function Loader() {
  return (
    <div className="flex flex-col items-center justify-center py-10">

      <div className="w-12 h-12 sm:w-14 sm:h-14 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>

      <p className="mt-4 text-gray-400 text-sm sm:text-base">
        Loading...
      </p>

    </div>
  );
}

export default Loader;