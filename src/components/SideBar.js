import { BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaCodeBranch, FaListAlt, FaLightbulb, FaTasks } from 'react-icons/fa';
import { GoPersonFill, GoRead } from "react-icons/go";

const sections = [
    { icon: <GoPersonFill size="28" />, text: "Profile", page: "profile" },
    { icon: <FaCodeBranch size="28" />, text: "Projects", page: "projects" },
    { icon: <FaLightbulb size="28" />, text: "Learning", page: "learning" },
    { icon: <FaListAlt size="28" />, text: "Skillsets", page: "skillsets" },
    { icon: <FaTasks size="28" />, text: "To-Do List", page: "todo" },
    { icon: <BsFillLightningFill size="28" />, text: "Inspiration", page: "inspiration" },
    { icon: <GoRead size="28" />, text: "Contact", page: "contact" },
    { icon: <BsGearFill size="28" />, text: "Settings", page: "settings" },
];

const SideBar = ({ onSelect }) => {
    return (
        <div className="fixed top-0 left-0 w-20 h-screen m-0
                        flex flex-col items-center
                        bg-gray-900 text-white shadow-lg space-y-4 pt-4">
            {sections.map((section) => (
                <SideBarIcon 
                    key={section.text} 
                    icon={section.icon} 
                    text={section.text} 
                    onClick={() => onSelect(section.page)}
                />
            ))}
        </div>
    );
};

const SideBarIcon = ({ icon, text = 'tooltip', onClick }) => {
    return (
        <div className="sidebar-icon group cursor-pointer" onClick={onClick}>
            {icon}
            <span className="sidebar-tooltip group-hover:scale-100">
                {text}
            </span>
        </div>
    );
};

export default SideBar;
