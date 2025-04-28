import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav className="h-full p-4 w-64 bg-slate-100">
        <ul className="block">
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">Dashboard</Link>
          </li>
        </ul>
      </nav>
      <main className="p-8 rounded-lg bg-white w-full h-full">
        <h1 className="text-2xl font-semibold">Tracking</h1>
        <hr />
      </main>
    </>
  );
}
