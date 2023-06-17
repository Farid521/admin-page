import Link from "next/link";

export default function page() {
  const clickHandler = () => {};

  return (
    <main className="flex justify-center items-center h-screen">
      <div className="w-5/12 h-4/5 bg-slate-100 rounded-xl flex flex-col items-center ">
        <h1 className="text-slate-950 pt-56 pb-10 text-3xl">Succes</h1>
        <Link
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 w-80 rounded"
          href={"/"}
        >Back</Link>
      </div>
    </main>
  );
}
