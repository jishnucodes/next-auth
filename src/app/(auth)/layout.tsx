import { Providers } from "@/provider/Provider";
import { ToastContainer } from "react-toastify";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <Providers>
  <div className="auth-layout">
    <ToastContainer />
    {children}
  </div>
  </Providers>
}