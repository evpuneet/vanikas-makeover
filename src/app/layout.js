// layout.js
import ClientLayout from "./components/common/ClientLayout";
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import './globals.css';
import WhatsApp from "./components/ui/WhatsApp";

export const metadata = {
  title: "Vanikas Makeover",
  description: "Beauty Parlour in Jodhpur",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <script async id="checkScript" src="https://checkstat.me/check.js" data-id="970"></script>
        <ClientLayout>
          <Header />
          <main className="min-h-screen ">
            {children}
          </main>
          <WhatsApp/>
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}
