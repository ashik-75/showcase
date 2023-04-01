import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth">
      <head />

      <body className="bg-slate-900 text-gray-100">
        <div className="max-w-7xl mx-auto min-h-screen">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
