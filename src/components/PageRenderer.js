import Profile from "../pages/Profile";
import Projects from "../pages/Projects";
import Learning from "../pages/Learning";
import Skillsets from "../pages/Skillsets";
import Todo from "../pages/Todo";
import Inspiration from "../pages/Inspiration";
import Contact from "../pages/Contact";
import Settings from "../pages/Settings";

const PageRenderer = ({ selectedPage }) => {
    switch (selectedPage) {
      case "profile":
        return <Profile />;
      case "projects":
        return <Projects />;
      case "learning":
        return <Learning />;
      case "skillsets":
        return <Skillsets />;
      case "todo":
        return <Todo />;
      case "inspiration":
        return <Inspiration />;
      case "contact":
        return <Contact />
      case "settings":
        return <Settings />;
      default:
    }
  };
  
  export default PageRenderer;
  