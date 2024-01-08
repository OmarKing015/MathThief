// Lectures.js

import { useState } from "react";
import data from "./data.json";

const Lectures = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
  console.log(data.MathematicalApplication[0].Sessions);
  return (
    <div className="container felx mx-auto mt-8">
      <div className="mb-4">
        <div className="  bg-gray-200 p-4 cursor-pointer ">
          <h2 className="text-lg font-semibold">
            <div className="felx ">
              {data.MathematicalApplication.map((session, sessionIndex) => (
                <div key={sessionIndex}>
                  <h3>Math Appliction</h3>
                  <ul
                    className="flex gap-[7%] flex-col flex-wrap"
                    style={{ display: "flex", gap: "5%", flexWrap:"wrap" }}
                  >
                    {session.Sessions.map((lecture, lectureIndex) => (
                      <li key={lectureIndex} onClick={() => handleToggle(0)}>
                        {lecture.session}
                        {openIndex === 0 && (
                          <li className="flex flex-col">
                            {" "}
                            {lecture.lectures.map((lec, index) => (
                              <h4>
                                <a href={lec.link} key={index}>
                                  {lec.name}
                                </a>
                              </h4>
                            ))}{" "}
                          </li>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Lectures;
