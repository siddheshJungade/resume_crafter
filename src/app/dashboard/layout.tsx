import { Navbar, SubNavbar } from "@/components/header-component";
import { ReactNode } from "react";
const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="h-screen">
      <header>
        <Navbar />
        <SubNavbar />
      </header>
      {children}
    </div>
  );
};

export default Layout;
