import { motion } from "framer-motion";
import Profile from "../pages/Profile";
import Projects from "../pages/Projects";
import Learning from "../pages/Learning";
import Skillsets from "../pages/Skillsets";
import Todo from "../pages/Todo";
import Inspiration from "../pages/Inspiration";
import Contact from "../pages/Contact";
import Cheatsheet from "../pages/Cheatsheet";

const pageVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
};

const PageRenderer = ({ selectedPage }) => {
  let PageComponent;
  switch (selectedPage) {
    case "profile":
      PageComponent = Profile;
      break;
    case "projects":
      PageComponent = Projects;
      break;
    case "learning":
      PageComponent = Learning;
      break;
    case "skillsets":
      PageComponent = Skillsets;
      break;
    case "todo":
      PageComponent = Todo;
      break;
    case "inspiration":
      PageComponent = Inspiration;
      break;
    case "contact":
      PageComponent = Contact;
      break;
    case "cheatsheet":
      PageComponent = Cheatsheet;
      break;
    default:
      PageComponent = null;
  }
      return (
        <motion.div
          key={selectedPage}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="p-6 w-full"
        >
          {PageComponent && <PageComponent />}
        </motion.div>
      );

};

export default PageRenderer;
