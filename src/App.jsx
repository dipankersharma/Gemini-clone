import React from "react";
import Sidebar from "./Component/sidebar/Sidebar";
import Main from "./Component/main/Main";

const App = () => {
  return (
    <div className="w-screen min-h-[100vh] flex">
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
