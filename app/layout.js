import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Ranajit Dhar | AI/ML Developer",
  description: "Portfolio of Ranajit Dhar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}
