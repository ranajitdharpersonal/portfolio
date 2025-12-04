import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ranajit Dhar | AI Engineer",
  description: "Portfolio of Ranajit Dhar - AI/ML Developer & Multi Agent Architect",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}