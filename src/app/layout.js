import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">

        <nav className="bg-white shadow p-4 flex gap-4">
          <Link href="/" className="text-blue-600 font-semibold">
            Home
          </Link>
          <Link href="/about" className="text-blue-600 font-semibold">
            About
          </Link>
        </nav>

        {children}
        
        <div className="flex  justify-center">
          <h1>All rights reserved @ 2026</h1>
        </div>

      </body>
    </html>
  );
}
