import { TfiAgenda } from "react-icons/tfi";
import TextSection from "../components/TextSection";
import SectionList from "../components/SectionList";

const Cheatsheet = () => {
  const sections = [
    {
      title: "VSCode Shortcuts",
      description: "Essential shortcuts for navigating and editing in VSCode.",
      collapsible: true,
      lists: [
        {
          title: "Command Palette",
          textItems: [
            "Ctrl+P: Open the Command Palette.",
            ">: Access all commands when Command Palette is open.",
          ],
        },
        {
          title: "Find and Replace",
          textItems: [
            "Ctrl+F: Find a word (basic).",
            "@: In Command Palette, search for functions, classes, and methods.",
            "Ctrl+Shift+.: Go to the next error or warning in the code.",
          ],
        },
        {
          title: "Navigation & Editing",
          textItems: [
            "Ctrl+G: Go to a specific line number.",
            "Shift+Arrow Keys: Highlight text by expanding selection.",
            "Ctrl+Arrow Keys: Move the cursor word by word.",
            "Ctrl+D: Select and add multiple instances of the word under the cursor.",
            "Alt+Click: Create a cursor at any position in the file.",
          ],
        },
        {
          title: "Multi-Cursors",
          textItems: [
            "Ctrl+Alt+Down/Up: Add a cursor below or above the current one.",
          ],
        },
        {
          title: "Quick File Navigation",
          textItems: ["Ctrl+Shift+O: Jump to a specific symbol in the current file."],
        },
        {
          title: "Integrated Git",
          textItems: ["Ctrl+Shift+G: Open the source control view."],
        }
      ],
    }
  ];

  return (
    <div className="flex flex-col items-center justify-start text-white min-h-screen p-6">
      <div className="text-center">
        <h1 className="text-5xl font-bold flex items-center justify-center text-green-500">
          Cheatsheet
          <TfiAgenda size={40} className="ml-2" />
        </h1>
        <p className="text-xl mt-4 text-gray-400">Lijst met shortcuts of andere handige dingen die ik graag wil onthouden!</p>
      </div>

      {sections.map((section, index) => (
        <TextSection
          key={index}
          title={section.title}
          description={section.description}
          collapsible={section.collapsible}
        >
          {section.lists.map((list, idx) => (
            <SectionList key={idx} title={list.title} textItems={list.textItems} />
          ))}
        </TextSection>
      ))}
    </div>
  );
};

export default Cheatsheet;
