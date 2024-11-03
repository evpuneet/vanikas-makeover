import Loader from "./components/common/Loader";
import "./globals.css";

export const metadata = {
  title: "Vanikas Makeover",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
      <Loader /> {/* This will show the loader initially */}
        {children}  {/* Your main content */}
      </body>
    </html>
  );
}
