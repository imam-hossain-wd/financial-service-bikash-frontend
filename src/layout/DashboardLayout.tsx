import { Outlet } from "react-router-dom";

import Navbar from "../pages/shared/navbar/Navbar";
import Footer from "../pages/shared/footer/Footer";
import SideBar from "../components/sidebar/Sidebar";
const DashboardLayout = () => {


  return (
    <div>
      <Navbar />
      <div className="flex">
        <SideBar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;