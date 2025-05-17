import React, { ReactNode } from "react";
import Loading from "@/components/Loading";

type StateWrapperProps = {
  isLoading: boolean;
  isError: boolean;
  data: ReactNode;
  loadingMessage?: string;
  errorMessage?: string;
  skeleton?: number;
};

const StateWrapper: React.FC<StateWrapperProps> = ({
  isLoading,
  isError,
  data,
  loadingMessage = "กำลังโหลด...",
  errorMessage = "เกิดข้อผิดพลาด",
  skeleton = 0,
}) => {
  if (isLoading) {
    return (
      <Loading message={loadingMessage} showSkeleton skeletonCount={skeleton} />
    );
  }

  if (isError) {
    return <div className="text-center text-red-500">{errorMessage}</div>;
  }

  return <>{data}</>;
};

export default StateWrapper;
