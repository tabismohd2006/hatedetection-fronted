function DeleteModal({ open, onCancel, onConfirm }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4 z-50">

      <div className="w-full max-w-md bg-slate-900 rounded-2xl shadow-2xl p-6 sm:p-8">

        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">
          Delete Prediction
        </h2>

        <p className="text-gray-400 text-center mt-4 text-sm sm:text-base">
          Are you sure you want to delete this prediction?
          <br />
          This action cannot be undone.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-8">

          <button
            onClick={onCancel}
            className="w-full bg-slate-700 hover:bg-slate-600 text-white py-3 rounded-lg font-semibold transition"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default DeleteModal;