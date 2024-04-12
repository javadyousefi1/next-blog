import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="md:mt-[71px] mt-[38px]">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
