import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "My Site",
  description: "A simple Next.js site with a navbar and footer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
