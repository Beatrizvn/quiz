import Link from "next/link";
import prisma from "../../lib/prisma";

export default async function Home() {
  const user = await prisma.user.findFirst();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {user ? (
          <div className="flex flex-col gap-4 items-center">
            <h1 className="text-4xl font-bold">Welcome back, {user.username}!</h1>
        </div>) : "" }

        <li key={"link"}>
          <Link href={`/blog/`}>link</Link>
        </li>
        
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
