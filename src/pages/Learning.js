import { FaRegLightbulb } from "react-icons/fa";

const Learning = () => {
    return (
        <div className="flex flex-col items-center justify-start bg-gray-800 text-white min-h-screen p-6">
            {/* Page Header */}
            <div className="text-center">
                <h1 className="text-5xl font-bold flex items-center justify-center text-green-500">
                    Learning
                    <FaRegLightbulb size={40} className="ml-2" />
                </h1>
                <p className="text-xl mt-4 text-gray-400">Coming soon...</p>
            </div>

            {/* VSCode Shortcuts Section */}
            <div className="mt-8 w-full max-w-3xl bg-gray-700 p-6 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold text-green-500 border-b pb-2">VSCode Shortcuts:</h2>
                <ul className="list-inside list-disc mt-6 space-y-4">
                    <li className="font-medium text-gray-300">Command Palette</li>
                    <ul className="pl-6 space-y-2">
                        <li className="text-gray-500">Ctrl+P: Open the Command Palette.</li>
                        <li className="text-gray-500">&gt;: Access all commands when Command Palette is open.</li>
                    </ul>
                    <li className="font-medium text-gray-300">Find and Replace</li>
                    <ul className="pl-6 space-y-2">
                        <li className="text-gray-500">Ctrl+F: Find a word (basic).</li>
                        <li className="text-gray-500">@: In Command Palette, search for functions, classes, and methods.</li>
                        <li className="text-gray-500">Ctrl+Shift+.: Go to the next error or warning in the code.</li>
                    </ul>
                    <li className="font-medium text-gray-300">Navigation & Editing</li>
                    <ul className="pl-6 space-y-2">
                        <li className="text-gray-500">Ctrl+G: Go to a specific line number.</li>
                        <li className="text-gray-500">Shift+Arrow Keys: Highlight text by expanding selection.</li>
                        <li className="text-gray-500">Ctrl+Arrow Keys: Move the cursor word by word.</li>
                        <li className="text-gray-500">Ctrl+D: Select and add multiple instances of the word under the cursor (for replacing or editing).</li>
                        <li className="text-gray-500">Alt+Click: Create a cursor at any position in the file.</li>
                    </ul>
                </ul>
            </div>

            {/* Additional Recommendations Section */}
            <div className="mt-12 w-full max-w-3xl bg-gray-700 p-6 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold text-green-500 border-b pb-2">Additional Recommendations:</h2>
                <ul className="list-inside list-disc mt-6 space-y-4">
                    <li className="font-medium text-gray-300">Multi-Cursors</li>
                    <ul className="pl-6 space-y-2">
                        <li className="text-gray-500">Ctrl+Alt+Down/Up: Add a cursor below or above the current one (great for editing similar lines simultaneously).</li>
                    </ul>
                    <li className="font-medium text-gray-300">Quick File Navigation</li>
                    <ul className="pl-6 space-y-2">
                        <li className="text-gray-500">Ctrl+Shift+O: Jump to a specific symbol (function, variable) in the current file.</li>
                    </ul>
                    <li className="font-medium text-gray-300">Integrated Git</li>
                    <ul className="pl-6 space-y-2">
                        <li className="text-gray-500">Ctrl+Shift+G: Open the source control view, useful for managing version control without leaving the editor.</li>
                    </ul>
                </ul>
            </div>
        </div>
    );
};

export default Learning;
