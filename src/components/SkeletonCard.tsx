export const SkeletonCard = () => (
  <div className="rounded-2xl shadow-md overflow-hidden animate-pulse flex flex-col">
    <div className="bg-gray-300 dark:bg-gray-700 w-full h-56 rounded-md mb-2" />
    <div className="p-4 flex flex-col flex-grow gap-2">
      <div className="bg-gray-300 dark:bg-gray-700 h-6 w-3/4 rounded" />
      <div className="bg-gray-300 dark:bg-gray-700 h-4 w-1/2 rounded" />
      <div className="bg-gray-300 dark:bg-gray-700 h-6 w-1/4 rounded mt-auto" />
    </div>
  </div>
);
