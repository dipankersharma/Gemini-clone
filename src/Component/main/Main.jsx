import React, { useContext } from "react";
import "./main.css";
import { Context } from "../../context/context";

function Main() {
  const {
    onSent,
    recentPrompt,
    showResults,
    loading,
    resultData,
    input,
    setInput,
  } = useContext(Context);
  return (
    <div className="flex-1 min-h-[100vh] pb-[15vh] relative">
      <div className="nav flex items-center justify-between text-[22px] p-[20px] text-[#585858]">
        <p>Gemini</p>
        <i className="ri-account-circle-fill text-[30px]"></i>
      </div>

      <div className="main max-w-[900px] m-auto">
        {!showResults ? (
          <>
            {" "}
            <div className="greet my-[50px] text-[56px] text-[#c4c7c5] font-semibold p-[12px]">
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
          </>
        ) : (
          <div className="result px-[5%] max-h-[70vh] overflow-y-scroll">
            <div className="result-title my-[0px] flex items-center gap-[20px]">
              <i className="ri-account-circle-fill text-[30px]"></i>
              <p>{recentPrompt}</p>
            </div>
            <div className="result_data flex items-start gap-[15px] p-1">
              <i className="ri-bard-fill text-xl"></i>
              {loading ? (
                <div className="loader w-[100%] flex flex-col gap-[10px] animation-[pulse_3s_infinite_linear]">
                  <hr className="rounded-[4px] border-none bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] bg-[length:800px_50px] h-[20px]" />
                  <hr className="rounded-[4px] border-none bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] bg-[length:800px_50px] h-[20px]" />
                  <hr className="rounded-[4px] border-none bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] bg-[length:800px_50px] h-[20px]" />
                </div>
              ) : (
                <p
                  className="text-[17px] leading-[1.8] font-[300]"
                  dangerouslySetInnerHTML={{ __html: resultData }}
                ></p>
              )}
            </div>
          </div>
        )}

        <div className="mainbottom absolute bottom-0 w-[100%] max-w-[900px] m-auto">
          <div className="searchbox flex items-center justify-between gap-[20px] rounded-[50px] bg-[#f0f4f9] px-[20px] py-[10px]">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              className="flex-1 bg-transparent border-none outline-none text-[18px] p-[8px]"
              type="text"
              placeholder="Enter a prompt here"
            />
            <div className="flex items-center gap-[12px]">
              <i className="ri-gallery-fill w-[24px] cursor-pointer text-xl mr-1"></i>
              <i class="ri-mic-fill w-[24px] cursor-pointer text-xl mr-1"></i>
              <i
                onClick={() => onSent()}
                class="ri-send-plane-fill w-[24px] cursor-pointer text-xl mr-1"
              ></i>
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
