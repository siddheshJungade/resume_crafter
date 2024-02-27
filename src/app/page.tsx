import Link from "next/link";
import { RecoilRoot } from "recoil";

export default function Home() {
  return (
    <RecoilRoot>
      <main className="flex min-h-screen flex-col items-center justify-start p-24">
        Home
        <Link href="dashboard">Dashboard</Link>
      </main>
    </RecoilRoot>
  );
}
