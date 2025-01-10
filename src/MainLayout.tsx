import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { SettingProvider } from "./contexts/SettingContext";
import { LanguageProvider } from "./contexts/LanguageContext";

const MainLayout: React.FC = () => {
  return (
    <SettingProvider 
      defaultTheme="dark"
      defaultColor="blue"
      defaultBorderRadius="md"
      storageKey="eddy-ui"
    >
      <LanguageProvider>
        <div className="bg-background text-tprimary w-full min-h-screen flex flex-col justify-between">
          <Navbar />
          <div>
            <Outlet />
          </div>
          <Footer />
        </div>
      </LanguageProvider>
    </SettingProvider>
  );
};

export default MainLayout;
