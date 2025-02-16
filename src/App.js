import { useState } from "react";
import SideBar from "./components/SideBar";
import PageRenderer from "./components/PageRenderer";

function App() {
  const [selectedPage, setSelectedPage] = useState("profile");

  return (
    <div className="flex">
      <SideBar onSelect={setSelectedPage} />
      <div className="flex-1 flex bg-gray-700 text-white justify-center">
        <PageRenderer selectedPage={selectedPage} />
      </div>
    </div>
  );
}

export default App;