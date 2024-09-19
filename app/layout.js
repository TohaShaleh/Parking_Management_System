// "use client"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />

        {/* Use flex-grow for the main section to take up remaining space */}
        <main className="flex-grow p-1 overflow-y-auto">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}