import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RecoilRoot } from "recoil";

export default function Home() {
  return (

    <main className="flex flex-col items-center justify-start p-24">
      Home
      <Button asChild>
        <Link href="dashboard">Dashboard</Link>
      </Button>
    </main>
  );
}
