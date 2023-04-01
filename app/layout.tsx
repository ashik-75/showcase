import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";
import Providers from "./Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth">
      <head />
      <Providers>
        <body className="bg-slate-900">
          <div className="max-w-7xl mx-auto min-h-screen">
            <Header />
            {children}
            <Footer />
          </div>
        </body>
      </Providers>
    </html>
  );
}
