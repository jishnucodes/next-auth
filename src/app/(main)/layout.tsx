import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import AuthProvider from "@/hocs/AuthComponent";
import { Providers } from "@/provider/Provider";
import { ToastContainer } from "react-toastify";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
    <AuthProvider>
    <div className="main-layout">
      <Header />
      <ToastContainer />
      {children}

      <Footer />
    </div>
    </AuthProvider>
    </Providers>
  );
}
