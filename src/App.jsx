import Form from "./Form";
import Results from "./Results";
import "./index.css";
import cat from "./Assets/cat.png";
import { FaGithub } from "react-icons/fa";

const App = () => {
  return (
    <div className="h-100 w-100">
      <div className="container w-1/2 text-center mx-auto">
        <div>
          <h1 className="mt-10 md:mt-20 text-3xl">CAT FOOD CALCULATOR</h1>
          <img src={cat} alt="cat eating" className="mx-auto" />
        </div>

        <Form />
        <Results />
      </div>
      <div className="flex md:justify-end md:items-end justify-center text-xs footer pb-1 mt-10 md:fixed md:bottom-0 md:right-0">
        made by lapenji
        <a
          className="mr-3 ml-2 hover:text-blue-700"
          href="https://github.com/lapenji"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};
export default App;
