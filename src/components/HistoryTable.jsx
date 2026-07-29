import { useEffect, useState } from "react";
import api from "../services/api";
import { saveAs } from "file-saver";
import Papa from "papaparse";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import DeleteModal from "./DeleteModal";
import Loader from "./Loader";

function HistoryTable() {

  const [history, setHistory] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [page, setPage] = useState(1);
const [totalPages, setTotalPages] = useState(1);
const [loading, setLoading] = useState(true);

  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

 useEffect(() => {

    fetchHistory();

}, [page]);

const fetchHistory = async () => {

    try {

        setLoading(true);

        const res = await api.get(
            `/speech/history?page=${page}&limit=10`
        );

        setHistory(res.data.data);
        setTotalPages(res.data.totalPages);

    } catch (error) {

        console.log(error);

    } finally {

        setLoading(false);

    }

};

  // ================= Export CSV =================

  const exportCSV = () => {

    const data = history.map((item) => ({
      Date: new Date(item.createdAt).toLocaleDateString(),
      Text: item.text,
      Prediction: item.prediction,
      Confidence: `${Number(item.confidence).toFixed(2)}%`
    }));

    const csv = Papa.unparse(data);

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;"
    });

    saveAs(blob, "prediction-history.csv");

  };

  // ================= Export PDF =================

  const exportPDF = () => {

    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Hate Speech Detection Report", 14, 20);

    const tableData = history.map((item) => ([

      new Date(item.createdAt).toLocaleDateString(),
      item.text,
      item.prediction,
      `${Number(item.confidence).toFixed(2)}%`

    ]));

    autoTable(doc, {

      head: [["Date", "Text", "Prediction", "Confidence"]],
      body: tableData,
      startY: 30,

    });

    doc.save("prediction-report.pdf");

  };

  // ================= Delete =================

  const deletePrediction = async (id) => {

    try {

      await api.delete(`/speech/delete/${id}`);

      fetchHistory();

    } catch (error) {

      console.log(error);


    }

  };

  if (loading) {
    return <Loader />;
}

  return (

   <>
  <div className="bg-slate-900 mt-6 rounded-2xl p-4 sm:p-6 shadow-lg">

    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">

      <h2 className="text-xl sm:text-2xl font-semibold text-white">
        Recent History
      </h2>

      <div className="flex flex-wrap gap-3">

        <button
          onClick={exportCSV}
          className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-lg text-white text-sm"
        >
          Export CSV
        </button>

        <button
          onClick={exportPDF}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-white text-sm"
        >
          Export PDF
        </button>

      </div>

    </div>

    <input
      type="text"
      placeholder="Search..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full mb-5 bg-slate-800 text-white px-4 py-3 rounded-lg outline-none border border-slate-700 focus:border-cyan-400"
    />

    <div className="flex flex-wrap gap-2 mb-6">

      {["All","Normal","Toxic","Offensive","Threat","Hate Speech"].map((item)=>(
        <button
          key={item}
          onClick={() => setFilter(item)}
          className={`px-4 py-2 rounded-lg text-sm transition ${
            filter===item
              ? "bg-cyan-500 text-black font-semibold"
              : "bg-slate-800 text-white hover:bg-slate-700"
          }`}
        >
          {item}
        </button>
      ))}

    </div>

    <div className="overflow-x-auto rounded-xl">

      <table className="min-w-[900px] w-full text-left">

        <thead className="bg-slate-800">

          <tr className="text-gray-300">

            <th className="p-4">Date</th>
            <th className="p-4">Input Text</th>
            <th className="p-4">Prediction</th>
            <th className="p-4">Confidence</th>
            <th className="p-4">Action</th>

          </tr>

        </thead>

        <tbody>

          {history
            .filter((item) => {

              const matchSearch =
                item.text.toLowerCase().includes(search.toLowerCase());

              const matchFilter =
                filter === "All"
                  ? true
                  : item.prediction === filter;

              return matchSearch && matchFilter;

            })
            .map((item) => (

              <tr
                key={item._id}
                className="border-b border-slate-800 hover:bg-slate-800/40"
              >

                <td className="p-4 text-white whitespace-nowrap">
                  {new Date(item.createdAt).toLocaleDateString()}
                </td>

                <td className="p-4 text-gray-300 max-w-xs break-words">
                  {item.text}
                </td>

                <td
                  className={`p-4 font-semibold ${
                    item.prediction === "Normal"
                      ? "text-green-400"
                      : item.prediction === "Offensive"
                      ? "text-yellow-400"
                      : item.prediction === "Threat"
                      ? "text-orange-400"
                      : "text-red-500"
                  }`}
                >
                  {item.prediction}
                </td>

                <td className="p-4 text-white">
                  {Number(item.confidence).toFixed(2)}%
                </td>

                <td className="p-4">

                  <button
                    onClick={() => {
                      setSelectedId(item._id);
                      setOpen(true);
                    }}
                    className="bg-red-600 hover:bg-red-700 px-3 py-2 rounded-lg text-white text-sm"
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

        </tbody>

      </table>

    </div>

    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">

      <button
        disabled={page===1}
        onClick={()=>setPage(page-1)}
        className="w-full sm:w-auto bg-cyan-600 hover:bg-cyan-700 px-5 py-2 rounded-lg text-white disabled:bg-gray-600"
      >
        Previous
      </button>

      <span className="text-white font-semibold">
        Page {page} of {totalPages}
      </span>

      <button
        disabled={page===totalPages}
        onClick={()=>setPage(page+1)}
        className="w-full sm:w-auto bg-cyan-600 hover:bg-cyan-700 px-5 py-2 rounded-lg text-white disabled:bg-gray-600"
      >
        Next
      </button>

    </div>

  </div>

  <DeleteModal
    open={open}
    onCancel={() => setOpen(false)}
    onConfirm={() => {
      deletePrediction(selectedId);
      setOpen(false);
    }}
  />
</>

  );

}

export default HistoryTable;