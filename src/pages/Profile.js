import { FaGithub, FaEnvelope, FaCodeBranch, FaTasks } from "react-icons/fa";
import FooterBanner from "./../assets/banner-sasuke.gif";

const Profile = () => {
    return (
        <div className="flex flex-col items-center justify-start text-white bg-gray-700 p-6">
            <div className="text-center">
                <h1 className="text-5xl font-bold flex items-center text-green-500">
                    Hi, I'm Koen
                </h1>
                <h3 className="text-xl mt-2 text-gray-400">Student Software Developer</h3>
            </div>

            <div className="flex space-x-4 mt-6">
                <a href="https://github.com/Koen-Smit" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={36} className="hover:text-green-400 transition duration-300" />
                </a>
                <a href=".">
                    <FaEnvelope size={36} className="hover:text-green-400 transition duration-300" />
                </a>
            </div>

            <div className="mt-8">
                <h2 className="text-3xl font-bold text-green-500">Skills</h2>
                <div className="grid grid-cols-4 gap-6 mt-4">
                    <SkillIcon src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/csharp-colored.svg" alt="C#" />
                    <SkillIcon src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/java-colored.svg" alt="Java" />
                    <SkillIcon src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" alt="JavaScript" />
                    <SkillIcon src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg" alt="Python" />
                    <SkillIcon src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" alt="HTML5" />
                    <SkillIcon src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" alt="CSS3" />
                    <SkillIcon src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg" alt="MySQL" />
                    <SkillIcon src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/linux-colored.svg" alt="Linux" />
                </div>
            </div>

            <div className="mt-12">
                <h2 className="text-3xl font-bold text-green-500">Top Repositories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <RepoCard
                        title="Warehouse-Tool"
                        link="https://github.com/Koen-Smit/Warehouse-Tool"
                        icon={<FaCodeBranch size={28} className="text-green-500" />}
                    />
                    <RepoCard
                        title="???"
                        link="https://github.com/Koen-Smit/"
                        icon={<FaTasks size={28} className="text-green-500" />}
                    />
                </div>
            </div>

            <div className="mt-12">
                <img src={FooterBanner} alt="Banner" className="w-full max-w-3xl rounded-lg shadow-lg" />
            </div>
        </div>
    );
};

// Skill Icon Component
const SkillIcon = ({ src, alt }) => (
    <img src={src} alt={alt} className="w-12 h-12 transition transform hover:scale-110" />
);

// Repository Card Component
const RepoCard = ({ title, link, icon }) => (
    <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
        {icon}
        <span className="text-lg font-semibold">{title}</span>
    </a>
);

export default Profile;
