import React from "react";
import classNames from "classnames";

type LoadingSpinnerProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeMap = {
  sm: "w-4 h-4 border-2",
  md: "w-6 h-6 border-4",
  lg: "w-10 h-10 border-[6px]",
};

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "md",
  className,
}) => {
  return (
    <div
      className={classNames(
        "rounded-full border-blue-500 border-t-transparent animate-spin",
        sizeMap[size],
        className
      )}
    />
  );
};

export default LoadingSpinner;
