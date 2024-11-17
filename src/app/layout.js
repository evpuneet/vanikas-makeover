// layout.js
import ClientLayout from "./components/common/ClientLayout";
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import './globals.css';

export const metadata = {
  title: "Vanikas Makeover",
  description: "Beauty Parlour in Jodhpur",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>
          <Header />
          <main className="min-h-screen ">
            {children}
          </main>
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}
