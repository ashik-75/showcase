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
        <body className="dark:bg-slate-900 bg-white">
          <div className="max-w-4xl mx-auto min-h-screen">
            <Header />
            {children}
            <Footer />
          </div>
        </body>
      </Providers>
    </html>
  );
}
