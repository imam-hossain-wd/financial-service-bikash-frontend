import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/navbar/Navbar";
import Footer from "../pages/shared/footer/Footer";


const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="h-auto">
      <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
