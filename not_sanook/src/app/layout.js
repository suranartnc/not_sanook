import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "../../context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Not Sanook",
  description: "This is demo application",
  icons: '/public/sanook_icon.png',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <div className="container">
            <Navbar />
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
