import Link from "next/link";
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80  hover:bg-red-400">
        <h1 className="text-2xl font-bold text-center text-blue-600">
          Hello Next.js 👋
        </h1>

        <p className="text-gray-600 text-center mt-3">
          Tailwind CSS is working
        </p>
<Link href="/about" className="text-blue-600 font-semibold">
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded">
          Click Me
        </button>
         </Link>
      </div>
    </div>
  );
}
