// Lectures.js

import { useState } from "react";
import data from "./data.json";

const PureLectures = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
  console.log(data["Pure Math"][0].Sessions);
  return (
    <div className="container mx-auto ml-8">
      <div className="mb-4">
        <div className="  bg-gray-200 p-4 cursor-pointer ">
          <h2 className="text-lg font-semibold">
            <div className=" ">
              <h3>Pure Math</h3>
              {data["Pure Math"].map((session, sessionIndex) => (
                <div key={sessionIndex}>
                  <ul className="flex gap-7 text-red-600 " style={{display: "flex", gap:"7%", flexWrap:"wrap"}}>
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

export default PureLectures;
