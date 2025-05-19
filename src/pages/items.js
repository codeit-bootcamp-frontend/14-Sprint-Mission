import Navbar from "@/components/Navbar";

export default function ItemsPage() {
  return (
    <>
      <Navbar currentPath="/items" />
      <main className="max-w-screen-xl mx-auto px-4">
        <h1 className="text-2xl font-bold my-8">중고마켓 페이지</h1>
      </main>
    </>
  );
}
