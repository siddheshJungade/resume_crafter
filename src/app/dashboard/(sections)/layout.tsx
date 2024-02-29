'use client'
import { ReactNode } from "react";
import { RecoilRoot } from "recoil";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <RecoilRoot>
      <section className="w-full h-full flex justify-center item-center">
        {children}
      </section>
    </RecoilRoot>
  );
};

export default Layout;
