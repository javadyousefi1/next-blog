import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="md:mt-[71px] mt-[38px]">
      <Toaster />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
