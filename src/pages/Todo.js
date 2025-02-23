import { FaTasks, FaCheckCircle } from "react-icons/fa";

const todoIdeas = [
  {
    title: "//",
    description: "//",
    status: "Nog niet begonnen",
  },
  {
    title: "//",
    description: "//",
    status: "In progress",
  }
];

const Todo = () => {
  // Scheiden van de ideeën op basis van hun status
  const notStarted = todoIdeas.filter((idea) => idea.status === "Nog niet begonnen");
  const inProgress = todoIdeas.filter((idea) => idea.status === "In progress");

  return (
    <div className="flex flex-col items-center justify-start text-white min-h-screen p-6">
      <h1 className="text-5xl font-bold flex items-center justify-center text-green-500 mb-6">
        To-Do <FaTasks size={40} className="ml-2" />
      </h1>
      <p className="text-xl text-gray-400 mb-12">
        Hier zijn enkele projecten die ik in de toekomst wil realiseren of waar ik nu mee bezig ben.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-7xl">

        <div className="flex flex-col space-y-6">
            <h2 className="text-3xl font-semibold text-green-400 mb-4">In Progress</h2>
            {inProgress.map((idea, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-green-400 mb-4">{idea.title}</h3>
                <p className="text-gray-300 mb-4">{idea.description}</p>
                <div className="flex items-center space-x-2">
                  <FaCheckCircle size={24} className="text-yellow-500" />
                  <span className="text-gray-400">{idea.status}</span>
                </div>
              </div>
            ))}
          </div>
        <div className="flex flex-col space-y-6">
          <h2 className="text-3xl font-semibold text-green-400 mb-4">Nog Niet Begonnen</h2>
          {notStarted.map((idea, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-green-400 mb-4">{idea.title}</h3>
              <p className="text-gray-300 mb-4">{idea.description}</p>
              <div className="flex items-center space-x-2">
                <FaCheckCircle size={24} className="text-yellow-500" />
                <span className="text-gray-400">{idea.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
