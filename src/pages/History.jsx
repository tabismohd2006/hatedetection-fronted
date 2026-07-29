import Sidebar from "../components/Sidebar";
import HistoryTable from "../components/HistoryTable";

function History() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-950">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-x-hidden">

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
          Prediction History
        </h1>

        <HistoryTable />

      </div>

    </div>
  );
}

export default History;