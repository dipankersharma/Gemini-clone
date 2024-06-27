import { createContext, useState } from "react";
import run from "../config/Gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setrecentPrompt] = useState("");
  const [previousResponse, setpreviousResponse] = useState([]);
  const [showResults, setshowResults] = useState(false);
  const [loading, setloading] = useState(false);
  const [resultData, setresultData] = useState("");
  const clearAll = () => {
    setloading(false);
    setshowResults(false);
  };

  const onSent = async (prompt) => {
    const delayPara = (index, nextWord) => {
      setTimeout(function () {
        setresultData((prev) => prev + nextWord);
      }, 75 * index);
    };

    setresultData("");
    setloading(true);
    setshowResults(true);
    let response;
    if (prompt !== undefined) {
      response = await run(prompt);
      setrecentPrompt(prompt);
    } else {
      setpreviousResponse((prev) => [...previousResponse, input]);
      setrecentPrompt(input);
      response = await run(input);
    }

    let responsearray = response.split("**");
    let newArray = "";
    for (let i = 0; i < responsearray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newArray += responsearray[i];
      } else {
        newArray += "<b>" + responsearray[i] + "</b>";
      }
    }

    let newResponse2 = newArray.split("*").join("</br>");
    let newResponseArray = newResponse2.split(" ");
    console.log(newResponseArray);
    for (let i = 0; i < newResponseArray.length; i++) {
      const nextWord = newResponseArray[i];
      delayPara(i, nextWord + " ");
    }
    console.log(responsearray);
    setloading(false);
    setInput("");
  };

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
    clearAll,
  };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
