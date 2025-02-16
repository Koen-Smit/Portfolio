import { TfiAgenda } from "react-icons/tfi";

const Cheatsheet = () => {
  return (
    <div className="flex flex-col items-center justify-start text-white min-h-screen p-6">
      <div className="text-center">
        <h1 className="text-5xl font-bold flex items-center justify-center text-green-500">
          Cheatsheet
          <TfiAgenda size={40} className="ml-2" />
        </h1>
        <p className="text-xl mt-4 text-gray-400">Coming soon...</p>
      </div>

      <ShortcutSection title="VSCode Shortcuts">
        <ShortcutList
          title="Command Palette"
          shortcuts={["Ctrl+P: Open the Command Palette.", ">: Access all commands when Command Palette is open."]}
        />
        <ShortcutList
          title="Find and Replace"
          shortcuts={[
            "Ctrl+F: Find a word (basic).",
            "@: In Command Palette, search for functions, classes, and methods.",
            "Ctrl+Shift+.: Go to the next error or warning in the code."
          ]}
        />
        <ShortcutList
          title="Navigation & Editing"
          shortcuts={[
            "Ctrl+G: Go to a specific line number.",
            "Shift+Arrow Keys: Highlight text by expanding selection.",
            "Ctrl+Arrow Keys: Move the cursor word by word.",
            "Ctrl+D: Select and add multiple instances of the word under the cursor.",
            "Alt+Click: Create a cursor at any position in the file."
          ]}
        />
      </ShortcutSection>

      <ShortcutSection title="Additional Recommendations">
        <ShortcutList
          title="Multi-Cursors"
          shortcuts={["Ctrl+Alt+Down/Up: Add a cursor below or above the current one."]}
        />
        <ShortcutList
          title="Quick File Navigation"
          shortcuts={["Ctrl+Shift+O: Jump to a specific symbol in the current file."]}
        />
        <ShortcutList
          title="Integrated Git"
          shortcuts={["Ctrl+Shift+G: Open the source control view."]}
        />
      </ShortcutSection>
    </div>
  );
};

const ShortcutSection = ({ title, children }) => (
  <div className="mt-8 w-full max-w-3xl bg-gray-800 p-6 rounded-lg shadow-lg">
    <h2 className="text-3xl font-semibold text-green-500 border-b pb-2">
      {title}
    </h2>
    {children}
  </div>
);

const ShortcutList = ({ title, shortcuts }) => (
  <div className="mt-6">
    <h3 className="font-medium text-gray-300">{title}</h3>
    <ul className="pl-6 space-y-2">
      {shortcuts.map((shortcut, index) => (
        <li key={index} className="text-gray-500">
          {shortcut}
        </li>
      ))}
    </ul>
  </div>
);

export default Cheatsheet;
