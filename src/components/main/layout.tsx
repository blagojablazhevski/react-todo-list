import React from "react";

interface LayoutProps {
  children?: React.ReactNode;
  cssClass?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, cssClass }) => {
  return <div className={cssClass ? cssClass : ""}>{children}</div>;
};

export default Layout;
