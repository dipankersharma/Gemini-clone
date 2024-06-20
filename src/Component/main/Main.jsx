import React from "react";
import "./main.css";

function Main() {
  return (
    <div className="flex-1 min-h-[100vh] pb-[15vh] relative">
      <div className="nav flex items-center justify-between text-[22px] p-[20px] text-[#585858]">
        <p>Gemini</p>
        <i className="ri-account-circle-fill "></i>
      </div>

      <div className="main max-w-[900px] m-auto">
        <div className="greet my-[50px] text-[56px] text-[#c4c7c5] font-semibold p-[15px]">
          <p>
            <span className="">Hello, Dev</span>
          </p>
          <p>How Can I help you today</p>
        </div>

        <div className="cards flex gap-[15px] p-[20px] ">
          <div className="card h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]">
            <p className="text-[#585858] text-[17px]">
              suggest beautiful places to see on an upcoming road trip
            </p>
            <i class="ri-compass-discover-line w-[40px] p-[3px] absolute bg-white rounded-full bottom-[10px] right-[10px] text-2xl text-center"></i>
          </div>
          <div className="card h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer  hover:bg-[#dfe4ea]">
            <p className="text-[#585858] text-[17px]">
              Briefly summarize this concept: urban planning
            </p>
            <i class="ri-lightbulb-flash-fill w-[40px] p-[3px] absolute bg-white rounded-full bottom-[10px] right-[10px] text-2xl text-center"></i>
          </div>
          <div className="card h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer  hover:bg-[#dfe4ea]">
            <p className="text-[#585858] text-[17px]">
              Brainstrom team bonding activities for our work retreat
            </p>
            <i class="ri-chat-4-line w-[40px] p-[3px] absolute bg-white rounded-full bottom-[10px] right-[10px] text-2xl text-center"></i>
          </div>
          <div className="card h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer  hover:bg-[#dfe4ea]">
            <p className="text-[#585858] text-[17px]">
              Improve the readability of the following code
            </p>
            <i class="ri-code-s-slash-line w-[40px] p-[3px] absolute bg-white rounded-full bottom-[10px] right-[10px] text-2xl text-center"></i>
          </div>
        </div>

        <div className="mainbottom absolute bottom-0 w-[100%] max-w-[900px] m-auto">
          <div className="searchbox flex items-center justify-between gap-[20px] rounded-[50px] bg-[#f0f4f9] px-[20px] py-[10px]">
            <input
              className="flex-1 bg-transparent border-none outline-none text-[18px] p-[8px]"
              type="text"
              placeholder="Enter a prompt here"
            />
            <div className="flex items-center gap-[12px]">
              <i className="ri-gallery-fill w-[24px] cursor-pointer text-xl mr-1"></i>
              <i class="ri-mic-fill w-[24px] cursor-pointer text-xl mr-1"></i>
              <i class="ri-send-plane-fill w-[24px] cursor-pointer text-xl mr-1"></i>
            </div>
          </div>
          <p className="bottom-info text-[13px] my-[15px] mx-auto text-center font-[300] ">
            Gemini may display inaccurate information, including about people,
            so double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
