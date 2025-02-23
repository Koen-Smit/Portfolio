import { FaGithub, FaEnvelope, FaCodeBranch, FaTasks } from "react-icons/fa";
import { GoPersonFill } from "react-icons/go";

import FooterBanner from "./../assets/banner-sasuke.gif";

const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-start text-white  p-6">
      {/* Profiel header */}
      <div className="text-center">
        <h1 className="text-5xl font-bold flex items-center justify-center text-green-500">
          Profile <GoPersonFill size={40} className="ml-2" />
        </h1>
        <h3 className="text-xl mt-2 text-gray-400">Koen Smit, student-Programmeur</h3>
        <p className="mt-2 text-gray-400 max-w-2xl mx-auto">
        Ik studeer momenteel Informatica aan de Hogeschool Avans in Breda. Voorafgaand aan deze studie heb ik een versnelde mbo-opleiding in Software Development afgerond. In mijn vrije tijd ben ik vaak bezig met programmeren, iets wat ik al voor mijn opleidingen deed en nog steeds met veel plezier doe. Daarnaast heb ik werkervaring opgedaan tijdens stages op het MBO, ik hoop door mijn huidige opleiding nog meer ervaring en kennis op te doen. 
        </p>
      </div>

      {/* <div className="mt-6">
        <img
          src=""
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-green-500 mx-auto"
        />
      </div> */}

      {/* Social Media Links */}
      <div className="flex space-x-4 mt-6">
        <a
          href="https://github.com/Koen-Smit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub
            size={36}
            className="hover:text-green-400 transition duration-300"
          />
        </a>
        <a href="mailto:example@example.com">
          <FaEnvelope
            size={36}
            className="hover:text-green-400 transition duration-300"
          />
        </a>
      </div>

        {/* Footer Banner */}
        <div className="mt-12 mb-12">
          <img
            src={FooterBanner} // Vervang met je eigen bannerafbeelding
            alt="Footer Banner"
            className="w-full max-w-3xl rounded-lg shadow-lg mb-12"
          />
        </div>
      </div>
  );
};

export default Profile;
