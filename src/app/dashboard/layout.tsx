import { Navbar, SubNavbar } from "@/components/header-component";
import { ReactNode } from "react";
const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
    
      <header>
        <Navbar />
        <SubNavbar />
      </header>
      {children}
    </>
  );
};

export default Layout;
