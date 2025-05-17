import React, { ReactNode } from "react";

type ItemsLayoutProps = {
  children: ReactNode;
};

const ItemsLayout: React.FC<ItemsLayoutProps> = ({ children }) => {
  return <div className="p-6 max-w-7xl mx-auto">{children}</div>;
};

export default ItemsLayout;
