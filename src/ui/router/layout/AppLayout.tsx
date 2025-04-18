import { Outlet } from "react-router-dom";
import Navbar from "../../components/nav/Navbar";
import Footer from "../../components/footer/Footer";

const AppLayout = () => {
  return (
    <main className=''>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default AppLayout;
