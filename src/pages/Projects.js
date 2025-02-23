import { useState } from "react";
import { Tooltip } from "react-tooltip";

// Icons voor gebruik in de technologies sectie
import { FaGithub, FaHive, FaCodeBranch, FaChevronDown, FaChevronUp} from "react-icons/fa";
// https://devicons-react.vercel.app/latest
import CsharpLine from 'devicons-react/lib/icons/CsharpLine';
import BlazorOriginal from 'devicons-react/lib/icons/BlazorOriginal';
import DotNetPlain from 'devicons-react/lib/icons/DotNetPlain';
import BootstrapOriginal from 'devicons-react/lib/icons/BootstrapOriginal';
import Html5Original from 'devicons-react/lib/icons/Html5Original';
import Css3Original from 'devicons-react/lib/icons/Css3Original';
import JavascriptOriginal from 'devicons-react/lib/icons/JavascriptOriginal';
import MysqlOriginal from 'devicons-react/lib/icons/MysqlOriginal';
import RaspberrypiOriginal from 'devicons-react/lib/icons/RaspberrypiOriginal';
import ArduinoOriginal from 'devicons-react/lib/icons/ArduinoOriginal';
import JsonOriginal from 'devicons-react/lib/icons/JsonOriginal';
import DockerPlain from 'devicons-react/lib/icons/DockerPlain';
import ReactOriginal from 'devicons-react/lib/icons/ReactOriginal';
import TailwindcssOriginal from 'devicons-react/lib/icons/TailwindcssOriginal';


const projectsData = [
  {
    title: "HBO Projecten",
    projects: [
      {
        name: "ATIx1.2_Robotics-Prototyping",
        shortDescription: "Robotics Prototyping",
        longDescription: "Dit project is het tweede project van mijn opleiding Informatica. De applicatie is ontwikkeld om een robot te besturen en gegevens te verwerken met behulp van MQTT-communicatie. De robot bevat onder andere een Raspberry Pi en de Romi32U4 controller. Via een interface kun je herinneringen/taken toevoegen en deze worden via de robot uitgezonden, dit zou mensen kunnen helpen met zelfstandigheid (zie github voor meer).",
        repo: "https://github.com/Koen-Smit/ATIx1.2_Robotics-Prototyping",
        technologies: [
          <div key="csharp" data-tooltip-id="csharp-tooltip">
            <CsharpLine size={24} className="text-blue-500" />
            <Tooltip id="csharp-tooltip" place="top" content="C#" />
          </div>,
          <div key="blazor" data-tooltip-id="blazor-tooltip">
            <BlazorOriginal size={24} className="text-green-500" />
            <Tooltip id="blazor-tooltip" place="top" content="Blazor" />
          </div>,
          <div key="html" data-tooltip-id="html-tooltip">
            <Html5Original size={24} className="text-red-500" />
            <Tooltip id="html-tooltip" place="top" content="HTML5" />
          </div>,
          <div key="css" data-tooltip-id="css-tooltip">
            <Css3Original size={24} className="text-blue-500" />
            <Tooltip id="css-tooltip" place="top" content="CSS3" />
          </div>,
             <div key="bootstrap" data-tooltip-id="bootstrap-tooltip">
             <BootstrapOriginal size={24} className="text-purple-500" />
             <Tooltip id="bootstrap-tooltip" place="top" content="Bootstrap" />
           </div>,
          <div key="mysql" data-tooltip-id="mysql-tooltip">
            <MysqlOriginal size={24} className="text-blue-500" />
            <Tooltip id="mysql-tooltip" place="top" content="MySQL" />
          </div>,
          <div key="mqtt" data-tooltip-id="mqtt-tooltip">
            <FaHive size={24} className="text-yellow-500" />
            <Tooltip id="mqtt-tooltip" place="top" content="MQTT" />
          </div>,
          <div key="raspberry" data-tooltip-id="raspberry-tooltip">
            <RaspberrypiOriginal size={24} className="text-red-500" />
            <Tooltip id="raspberry-tooltip" place="top" content="Raspberry Pi" />
          </div>,
          <div key="arduino" data-tooltip-id="arduino-tooltip">
            <ArduinoOriginal size={24} className="text-blue-500" />
            <Tooltip id="arduino-tooltip" place="top" content="Arduino" />
          </div>
        ],
      },
      {
        name: "ATIx1.1_Smart-Meter",
        shortDescription: "Smart-Meter Data Processing",
        longDescription: "Dit project is het eerste project van mijn opleiding Informatica. De applicatie is ontwikkeld om data te genereren en te visualiseren met behulp van een `Smart Meter`. Deze meters voerden metingen uit voor onder andere elektriciteit en gas.",
        repo: "https://github.com/Koen-Smit/ATIx1.1_Smart-Meter",
        technologies: [
          <div key="csharp" data-tooltip-id="csharp-tooltip">
            <CsharpLine size={24} className="text-blue-500" />
            <Tooltip id="csharp-tooltip" place="top" content="C#" />
          </div>,
          <div key="blazor" data-tooltip-id="blazor-tooltip">
            <BlazorOriginal size={24} className="text-green-500" />
            <Tooltip id="blazor-tooltip" place="top" content="Blazor" />
          </div>,
          <div key="dotnet" data-tooltip-id="dotnet-tooltip">
            <DotNetPlain size={24} className="text-purple-500" />
            <Tooltip id="dotnet-tooltip" place="top" content=".NET" />
          </div>,
          <div key="html" data-tooltip-id="html-tooltip">
            <Html5Original size={24} className="text-red-500" />
            <Tooltip id="html-tooltip" place="top" content="HTML5" />
          </div>,
          <div key="css" data-tooltip-id="css-tooltip">
            <Css3Original size={24} className="text-blue-500" />
            <Tooltip id="css-tooltip" place="top" content="CSS3" />
          </div>,
             <div key="bootstrap" data-tooltip-id="bootstrap-tooltip">
             <BootstrapOriginal size={24} className="text-purple-500" />
             <Tooltip id="bootstrap-tooltip" place="top" content="Bootstrap" />
           </div>,
          <div key="js" data-tooltip-id="js-tooltip">
            <JavascriptOriginal size={24} className="text-yellow-500" />
            <Tooltip id="js-tooltip" place="top" content="JavaScript" />
          </div>
        ],
      },
    ],
  },
  {
    title: "MBO Projecten",
    projects: [
      {
        name: "SD_Warehouse-Tool",
        shortDescription: "Eerste stageperiode: Warehouse-Tool",
        longDescription: "Dit project betreft een console-gebaseerde tool die via de commandline gebruikt kan worden. De tool laadt JSON-configuratiebestanden en verstuurt deze naar een API, waarmee een test-warehouse wordt opgezet. Vervolgens kunnen aangepaste instellingen worden opgeslagen voor later gebruik. De JSON-bestanden zijn door mij gemaakt op basis van bestaande templates die ik heb ontvangen samen met de API.",
        repo: "https://github.com/Koen-Smit/SD_Warehouse-Tool",
        technologies: [
          <div key="csharp" data-tooltip-id="csharp-tooltip">
            <CsharpLine size={24} className="text-blue-500" />
            <Tooltip id="csharp-tooltip" place="top" content="C#" />
          </div>,
          <div key="json" data-tooltip-id="json-tooltip">
            <JsonOriginal size={24} className="text-yellow-500" />
            <Tooltip id="json-tooltip" place="top" content="JSON" />
          </div>,
          <div key="docker" data-tooltip-id="docker-tooltip">
            <DockerPlain size={24} className="text-blue-500" />
            <Tooltip id="docker-tooltip" place="top" content="Docker" />
          </div>
        ],
      },
    ],
  },
  {
    title: "Persoonlijke Projecten",
    projects: [
      {
        name: "Portfolio Website",
        shortDescription: "Mijn portfolio en website.",
        longDescription: "Work in progress...",
        repo: "https://github.com/Koen-Smit/Portfolio",
        technologies: [
          <div key="react" data-tooltip-id="react-tooltip">
            <ReactOriginal size={24} className="text-blue-500" />
            <Tooltip id="react-tooltip" place="top" content="React" />
          </div>,
          <div key="js" data-tooltip-id="js-tooltip">
            <JavascriptOriginal size={24} className="text-yellow-500" />
            <Tooltip id="js-tooltip" place="top" content="JavaScript" />
          </div>,
          <div key="tailwind" data-tooltip-id="tailwind-tooltip">
            <TailwindcssOriginal size={24} className="text-blue-500" />
            <Tooltip id="tailwind-tooltip" place="top" content="TailwindCSS" />
          </div>,
          <div key="html" data-tooltip-id="html-tooltip">
            <Html5Original size={24} className="text-red-500" />
            <Tooltip id="html-tooltip" place="top" content="HTML5" />
          </div>,
          <div key="css" data-tooltip-id="css-tooltip">
            <Css3Original size={24} className="text-blue-500" />
            <Tooltip id="css-tooltip" place="top" content="CSS3" />
          </div>
      ],
      },
    ],
  },
];

const Projects = () => {
  const [openProject, setOpenProject] = useState(null);

  const toggleProject = (index) => {
    setOpenProject(openProject === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center justify-start text-white min-h-screen p-6">
      <h1 className="text-5xl font-bold flex items-center justify-center text-green-500 mb-6">
        Projects <FaCodeBranch size={40} className="text-green-500" />
      </h1>
      <p className="text-xl text-gray-400 mb-12">
        Een overzicht van mijn projecten.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl">
        {projectsData.map((category, catIndex) => (
          <div key={catIndex} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-green-400 mb-4">
              {category.title}
            </h2>
            <div className="space-y-4">
              {category.projects.map((project, projIndex) => {
                const index = `${catIndex}-${projIndex}`;
                return (
                  <div key={index} className="bg-gray-900 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleProject(index)}
                      className="flex items-center justify-between w-full p-4 hover:bg-gray-700 transition"
                    >
                      <div className="flex items-center space-x-4">
                        <FaGithub size={28} className="text-green-500" />
                        <div>
                          <h3 className="text-lg font-semibold">{project.name}</h3>
                          <p className="text-sm text-gray-400">{project.shortDescription}</p>
                        </div>
                      </div>
                      {openProject === index ? (
                        <FaChevronUp size={18} className="text-gray-400" />
                      ) : (
                        <FaChevronDown size={18} className="text-gray-400" />
                      )}
                    </button>

                    {openProject === index && (
                      <div className="p-4 bg-gray-800 border-t border-gray-700">
                        <p className="text-gray-300 mb-2">{project.longDescription}</p>
                        <div className="flex items-center space-x-3 mb-3">
                          {project.technologies.map((icon) => icon)}
                        </div>
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center p-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                        >
                          Bekijk op GitHub
                        </a>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;