import Navigation from "@/components/molecules/navigation/navigation";

export default function Home() {
  return (
    <>
      <Navigation collapsed={false} />
      <main className="p-8 rounded-lg bg-white w-full h-full">
        <h1 className="text-2xl font-semibold">Tracking</h1>
        <hr />
      </main>
    </>
  );
}
