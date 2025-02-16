import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import SideBar from "./components/SideBar";
import PageRenderer from "./components/PageRenderer";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const selectedPage = location.pathname.replace("/", "") || "profile";

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/profile", { replace: true });
    }
  }, [location, navigate]);

  return (
    <div className="flex bg-gray-700">
      <SideBar onSelect={(page) => navigate(`/${page}`)} />

      <div className="flex-1 flex bg-gray-700 text-white justify-center ml-20 overflow-hidden">
        <AnimatePresence mode="wait">
          <PageRenderer key={selectedPage} selectedPage={selectedPage} />
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
