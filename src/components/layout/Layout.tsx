import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useRouter } from "next/router";
import { AdminLayout } from "./AdminLayout";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const isAdmin = router.pathname.startsWith("/admin");

  return (
    <div className={isAdmin ? "" : "md:mt-[71px] mt-[38px]"}>
      {isAdmin ? (
        <AdminLayout>iiygv</AdminLayout>
      ) : (
        <>
          <Header />
          {children}
          <Footer />
        </>
      )}
    </div>
  );
};

export default Layout;
