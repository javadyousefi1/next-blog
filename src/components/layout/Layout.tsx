import Header from "@/components/layout/Header";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="md:mt-[71px] mt-[38px]">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
