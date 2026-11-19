
import { useEffect, useState } from "react";
import {
  Search,
  Download,
  FileText,
  Trash2,
  ChevronLeft,
  ChevronRight,
  History,
} from "lucide-react";
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

  // Export CSV
  const exportCSV = () => {
    const data = history.map((item) => ({
      Date: new Date(item.createdAt).toLocaleDateString(),
      Text: item.text,
      Prediction: item.prediction,
      Confidence: `${Number(item.confidence).toFixed(2)}%`,
    }));

    const csv = Papa.unparse(data);
    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;",
    });

    saveAs(blob, "prediction-history.csv");
  };

  // Export PDF
  const exportPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.setTextColor(91, 33, 182);
    doc.text("Hate Speech Detection Report", 14, 20);

    const tableData = history.map((item) => [
      new Date(item.createdAt).toLocaleDateString(),
      item.text,
      item.prediction,
      `${Number(item.confidence).toFixed(2)}%`,
    ]);

    autoTable(doc, {
      head: [["Date", "Text", "Prediction", "Confidence"]],
      body: tableData,
      startY: 30,
      headStyles: {
        fillColor: [124, 58, 237],
      },
      styles: {
        overflow: "linebreak",
        cellPadding: 3,
      },
    });

    doc.save("prediction-report.pdf");
  };

  // Delete prediction
  const deletePrediction = async (id) => {
    try {
      await api.delete(`/speech/delete/${id}`);

      if (history.length === 1 && page > 1) {
        setPage((currentPage) => currentPage - 1);
      } else {
        fetchHistory();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const filters = [
    "All",
    "Normal",
    "Toxic",
    "Offensive",
    "Threat",
    "Hate Speech",
  ];

  const filteredHistory = history.filter((item) => {
    const matchSearch = String(item.text || "")
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchFilter =
      filter === "All" || item.prediction === filter;

    return matchSearch && matchFilter;
  });

  const getPredictionStyle = (prediction) => {
    const label = String(prediction || "").toLowerCase();

    if (label.includes("normal")) {
      return "bg-emerald-50 text-emerald-700 border-emerald-200";
    }

    if (label.includes("offensive")) {
      return "bg-amber-50 text-amber-700 border-amber-200";
    }

    if (label.includes("threat")) {
      return "bg-orange-50 text-orange-700 border-orange-200";
    }

    if (label.includes("toxic") || label.includes("hate")) {
      return "bg-red-50 text-red-700 border-red-200";
    }

    return "bg-purple-50 text-purple-700 border-purple-200";
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <section className="mt-6 overflow-hidden rounded-2xl border border-purple-100 bg-white p-4 shadow-sm sm:p-6">

        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
              <History size={23} />
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-gray-900 sm:text-2xl">
                Recent History
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Search and manage your previous predictions.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={exportCSV}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-purple-200 bg-white px-4 py-2.5 text-sm font-semibold text-purple-700 transition hover:bg-purple-50"
            >
              <Download size={16} />
              Export CSV
            </button>

            <button
              type="button"
              onClick={exportPDF}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-purple-200 transition hover:bg-purple-700"
            >
              <FileText size={16} />
              Export PDF
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-5">
          <Search
            size={19}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400"
          />

          <input
            type="text"
            placeholder="Search prediction text..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-purple-100 bg-[#FAF9FF] py-3.5 pl-11 pr-4 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-purple-400 focus:bg-white focus:ring-4 focus:ring-purple-100"
          />
        </div>

        {/* Filters */}
        <div className="mb-6 flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => setFilter(item)}
              className={`rounded-lg border px-3.5 py-2 text-sm font-semibold transition ${
                filter === item
                  ? "border-purple-600 bg-purple-600 text-white shadow-sm shadow-purple-200"
                  : "border-purple-100 bg-white text-gray-600 hover:border-purple-300 hover:bg-purple-50 hover:text-purple-700"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl border border-purple-100">
          <table className="w-full min-w-[850px] text-left">
            <thead className="bg-purple-50">
              <tr className="text-xs font-bold uppercase tracking-wider text-purple-800">
                <th className="px-4 py-4">Date</th>
                <th className="px-4 py-4">Input Text</th>
                <th className="px-4 py-4">Prediction</th>
                <th className="px-4 py-4">Confidence</th>
                <th className="px-4 py-4 text-center">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {filteredHistory.length > 0 ? (
                filteredHistory.map((item) => (
                  <tr
                    key={item._id}
                    className="transition-colors hover:bg-purple-50/50"
                  >
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </td>

                    <td className="max-w-sm break-words px-4 py-4 text-sm leading-6 text-gray-700">
                      {item.text}
                    </td>

                    <td className="px-4 py-4">
                      <span
                        className={`inline-flex rounded-full border px-3 py-1.5 text-xs font-bold ${getPredictionStyle(
                          item.prediction
                        )}`}
                      >
                        {item.prediction}
                      </span>
                    </td>

                    <td className="whitespace-nowrap px-4 py-4 text-sm font-semibold text-gray-700">
                      {Number(item.confidence).toFixed(2)}%
                    </td>

                    <td className="px-4 py-4 text-center">
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedId(item._id);
                          setOpen(true);
                        }}
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-red-100 bg-red-50 px-3 py-2 text-sm font-semibold text-red-600 transition hover:border-red-200 hover:bg-red-100"
                      >
                        <Trash2 size={15} />
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={5}
                    className="px-4 py-12 text-center"
                  >
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-500">
                      <Search size={23} />
                    </div>

                    <p className="mt-3 font-semibold text-gray-800">
                      No matching predictions
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Try another search term or category.
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-500">
            Page{" "}
            <span className="font-bold text-purple-700">{page}</span>
            {" "}of{" "}
            <span className="font-bold text-gray-800">{totalPages}</span>
          </p>

          <div className="flex w-full gap-3 sm:w-auto">
            <button
              type="button"
              disabled={page === 1}
              onClick={() => setPage((currentPage) => currentPage - 1)}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-purple-200 bg-white px-4 py-2.5 text-sm font-semibold text-purple-700 transition hover:bg-purple-50 disabled:cursor-not-allowed disabled:opacity-40 sm:flex-none"
            >
              <ChevronLeft size={17} />
              Previous
            </button>

            <button
              type="button"
              disabled={page >= totalPages}
              onClick={() => setPage((currentPage) => currentPage + 1)}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-purple-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-40 sm:flex-none"
            >
              Next
              <ChevronRight size={17} />
            </button>
          </div>
        </div>
      </section>

      <DeleteModal
        open={open}
        onCancel={() => setOpen(false)}
        onConfirm={() => {
          if (selectedId) {
            deletePrediction(selectedId);
          }
          setOpen(false);
        }}
      />
    </>
  );
}

export default HistoryTable;
