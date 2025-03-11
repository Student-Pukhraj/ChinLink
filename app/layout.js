import localFont from "next/font/local"
import "./globals.css";
import Navbar from "@/components/Navbar";



export const metadata = {
  title: "ChinLink - Your trusted URL shortener",
  description: "ChinLink helps you shorten your long URLs into short and memorable links. Share your links with ease.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-rose-50`}
      >
      <Navbar/>
        {children}
      </body>
    </html>
  );
}
