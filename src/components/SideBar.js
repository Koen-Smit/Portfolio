import { useNavigate } from "react-router-dom";
import { BsFillLightningFill } from "react-icons/bs";
import { FaCodeBranch, FaListAlt, FaLightbulb, FaTasks, FaGithub, } from "react-icons/fa";
import { GoPersonFill, GoRead } from "react-icons/go";
import { motion } from "framer-motion";
import { TfiAgenda } from "react-icons/tfi";

const sections = [
  { icon: <GoPersonFill size="28" />, text: "Profile", page: "profile" },
  { icon: <FaCodeBranch size="28" />, text: "Projects", page: "projects" },
  { icon: <FaLightbulb size="28" />, text: "Learning", page: "learning" },
  { icon: <FaListAlt size="28" />, text: "Skillsets", page: "skillsets" },
  { icon: <BsFillLightningFill size="28" />, text: "Inspiration", page: "inspiration", },
  { icon: <FaTasks size="28" />, text: "To-Do List", page: "todo" }
];

const SideBar = () => {
    const navigate = useNavigate();
  
    return (
      <div className="fixed top-0 left-0 w-20 h-screen flex flex-col items-center bg-gray-900 text-white shadow-lg pt-4 z-50">
      <div className="flex-1 flex flex-col items-center space-y-4">
        {sections.map((section) => (
        <SideBarIcon
          key={section.text}
          icon={section.icon}
          text={section.text}
          onClick={() => navigate(`/${section.page}`)}
        />
        ))}
      </div>
      <div className="mb-4">
        <SideBarIcon
        icon={<TfiAgenda size="28" />}
        text="Cheatsheet"
        onClick={() => navigate("/cheatsheet")}
        />
      </div>
      <div className="mb-4">
        <SideBarIcon
        icon={<GoRead size="28" />}
        text="Contact"
        onClick={() => navigate("/contact")}
        />
      </div>
      <div className="mb-4">
        <SideBarIcon
        icon={<FaGithub size="28" />}
        text="GitHub"
        onClick={() => window.open("https://github.com/koen-smit", "_blank")}
        />
      </div>
      </div>
    );
  };

const SideBarIcon = ({ icon, text = "tooltip", onClick }) => {
  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      className="sidebar-icon group cursor-pointer"
      onClick={onClick}
    >
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </motion.div>
  );
};

export default SideBar;
