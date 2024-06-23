import { createContext, useState } from "react";
import run from "../config/Gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const onSent = async (prompt) => {
    setresultData("");
    setloading(true);
    setshowResults(true);
    setrecentPrompt(input);
    const response = await run(input);
    let responsearray = response.split("**");
    let newArray;
    for (let i = 0; i < responsearray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newArray += responsearray[i];
      } else {
        newArray += "<b>" + responsearray[i] + "</b>";
      }
    }

    let newResponse2 = newArray.split("*").join("</br>");

    console.log(responsearray);
    setresultData(newResponse2);
    setloading(false);
    setInput("");
  };

  const [input, setInput] = useState("");
  const [recentPrompt, setrecentPrompt] = useState("");
  const [previousResponse, setpreviousResponse] = useState([]);
  const [showResults, setshowResults] = useState(false);
  const [loading, setloading] = useState(false);
  const [resultData, setresultData] = useState(false);
  const contextValue = {
    previousResponse,
    setpreviousResponse,
    onSent,
    setrecentPrompt,
    recentPrompt,
    showResults,
    loading,
    resultData,
    input,
    setInput,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
