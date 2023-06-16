import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "context/ThemeContext";
import ErrorBoundary from "@/components/errorboundary/ErrorBoundary";
import Error from "./error";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <div className="container">
            <Navbar />
            <ErrorBoundary fallback={<Error />}>{children}</ErrorBoundary>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
