import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";

const MainLayout: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="eddy-ui-theme">
      <div className="bg-gray-50 text-gray-900 w-full min-h-screen flex flex-col justify-between">
        <Navbar />
        <div className="">
          <Outlet />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default MainLayout;
