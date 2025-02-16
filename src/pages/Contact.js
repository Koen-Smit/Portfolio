import { GoRead } from "react-icons/go";

import TextSection from "../components/TextSection";
import SectionList from "../components/SectionList";

const Contact = () => {
  const sections = [
    {
      title: "Contactgegevens",
      lists: [
        {
          title: "E-mail:",
          textItems: [
            "support@example.com",
          ],
        },
        {
          title: "Github:",
          textItems: [
            "github.com/Koen-Smit",
          ],
        },
        {
          title: "Telefoon:",
          textItems: [
            "+31 6 12345678",
          ],
        }
      ],
    },
    {
      title: "Social Media",
      lists: [
        {
          title: "Platforms",
          textItems: [
            "LinkedIn: /company/example",
            "Instagram: @example_official",
          ],
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-start text-white min-h-screen p-6">
      <div className="text-center">
        <h1 className="text-5xl font-bold flex items-center justify-center text-green-500">
          Contact
          <GoRead size={40} className="ml-2" />
        </h1>
        <p className="text-xl mt-4 text-gray-400">Hier vind je verschillende manieren om contact op te nemen!</p>
      </div>

      {sections.map((section, index) => (
        <TextSection key={index} title={section.title} description={section.description}>
          {section.lists.map((list, idx) => (
            <SectionList key={idx} title={list.title} textItems={list.textItems} />
          ))}
        </TextSection>
      ))}
    </div>
  );
};

export default Contact;
