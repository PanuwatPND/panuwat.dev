import React from "react";

type LoadingProps = {
  message?: string;
  showSkeleton?: boolean;
  skeletonCount?: number;
};

const Loading: React.FC<LoadingProps> = ({
  message = "Loading...",
  showSkeleton = false,
  skeletonCount = 4,
}) => {
  if (showSkeleton) {
    return (
      <div>
        <h1 className="text-xl font-bold mb-4 text-gray-500">{message}</h1>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          {Array.from({ length: skeletonCount }).map((_, i) => (
            <div key={i} className="border p-4 rounded shadow-sm animate-pulse">
              <div className="bg-gray-200 h-32 w-full mb-2 rounded" />
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-1" />
              <div className="h-4 bg-gray-100 rounded w-1/2" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-64">
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 border-4 border-blue-500 border-dashed rounded-full animate-spin mb-2" />
        <div className="text-gray-600">{message}</div>
      </div>
    </div>
  );
};

export default Loading;
