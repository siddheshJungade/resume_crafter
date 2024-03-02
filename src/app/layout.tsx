import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "@/context/provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Resume Crafter",
  description: "Created by Siddhesh Jungade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="dark:bg-black h-screen dark:text-white">
          <Provider>{children}</Provider>
        </div>
      </body>
    </html>
  );
}
