import { FaRegLightbulb } from "react-icons/fa";

const Learning = () => {
  return (
    <div className="flex flex-col items-center justify-start text-white min-h-screen p-6">
      {/* Page Header */}
      <div className="text-center">
        <h1 className="text-5xl font-bold flex items-center justify-center text-green-500">
          Learning
          <FaRegLightbulb size={40} className="ml-2" />
        </h1>
        <p className="text-xl mt-4 text-gray-400">Coming soon...</p>
      </div>
    </div>
  );
};

export default Learning;
