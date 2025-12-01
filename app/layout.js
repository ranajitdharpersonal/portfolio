export const metadata = {
  title: "Ranajit Dhar | AI/ML Developer",
  description: "Portfolio of Ranajit Dhar"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
