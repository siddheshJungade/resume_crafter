import {Navbar,SubNavbar} from "@/components/header-component";

import { ReactNode } from "react";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
      <>
      <Navbar />
      <SubNavbar />
      <div>
        {children}
      </div>
      </>
    );
  };
  
  export default Layout;