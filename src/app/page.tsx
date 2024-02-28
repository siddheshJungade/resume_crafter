import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-dark flex-col items-center justify-start p-24">
      Home
      <Button asChild>
        <Link href="dashboard">Dashboard</Link>
      </Button>
    </main>
  );
}
