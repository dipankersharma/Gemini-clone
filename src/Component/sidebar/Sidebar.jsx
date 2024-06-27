import React, { useContext, useState } from "react";
import { Context } from "../../context/context";

const Sidebar = () => {
  const [extend, setextend] = useState(true);
  const { onSent, setrecentPrompt, previousResponse, clearAll } =
    useContext(Context);

  const loadingPrompt = async (prompt) => {
    setrecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className="sidebar min-h-[100vh] inline-flex flex-col justify-between bg-[#f0f4f9] py-[25px] px-[15px]">
      {/* Top  */}
      <div className="top">
        <i
          onClick={() => setextend((prev) => !prev)}
          className="ri-menu-line text-lg block ml-[10px] cursor-pointer"
        ></i>
        <div className="new-chat inline-flex items-center gap-[10px] px-[10px] py-[10px] mt-2 bg-[#e6eaf1] rounded-[50px] text-[14px] text-grey cursor-pointer ">
          <i className="ri-add-line text-xl"></i>
          {extend ? <p onClick={() => clearAll()}>New Chat</p> : null}
        </div>
        {extend ? (
          <div className="recent flex flex-col">
            <p className="recent-title mt-[30px] mb-[20px] font-semibold">
              Recent
            </p>
            {previousResponse.map((items, index) => {
              return (
                <div
                  onClick={() => loadingPrompt(items)}
                  className="recent-entry flex items-start gap-[10px] px-[20px] cursor-pointer text-[#282828] rounded-[50px] hover:bg-[#e2e6eb] duration-300"
                >
                  <i className="ri-chat-4-line text-lg "></i>
                  <p>{items.slice(0, 18)}...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      {/* bottom */}
      <div className=" flex flex-col">
        <div className="bottom-items  flex items-start gap-[10px] px-[20px] cursor-pointer text-[#282828] mb-1 rounded-[50px] hover:bg-[#e2e6eb] duration-300 ">
          <i className="ri-question-line text-lg"></i>
          {extend ? <p>Help</p> : null}
        </div>
        <div className="bottom-items flex items-start gap-[10px] px-[20px] cursor-pointer text-[#282828] mb-1 rounded-[50px] hover:bg-[#e2e6eb] duration-300">
          <i className="ri-history-line text-lg"></i>
          {extend ? <p>Activity</p> : null}
        </div>
        <div className="bottom-items flex items-start gap-[10px] px-[20px] cursor-pointer text-[#282828] mb-1 rounded-[50px] hover:bg-[#e2e6eb] duration-300">
          <i className="ri-settings-2-line text-lg"></i>
          {extend ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
