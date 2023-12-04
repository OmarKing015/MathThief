// Lectures.js

import { useState } from 'react';
import data from "./data.json"
// Sample data
const sampleData = {
  "MathematicalApplication": [
    {
      "Sessions": [
        {
          "session": "Session 1",
          "lectures": [
            {
              "name": "Skills",
              "link": "https://iframe.mediadelivery.net/play/33074/d19cb330-4bb6-4f9b-adb5-ab32ccc594a7?autoplay=true"
            },
            {
              "name": "Explanation",
              "link": "https://iframe.mediadelivery.net/play/33074/56889c56-be70-46cd-aa14-36855a0b1399?autoplay=true"
            },
            {
              "name": "Problems",
              "link": "https://iframe.mediadelivery.net/play/33074/0efede62-36f0-41f5-a1fe-891b3d6c67de?autoplay=true"
            },
            {
              "name": "Classwork",
              "link": "https://iframe.mediadelivery.net/play/33074/e383b4c3-964c-4835-8504-76567f0f7427?autoplay=true"
            }
          ]

        }
      ]
    }]
};

const Lectures = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
  console.log(data.MathematicalApplication[0].Sessions)
  return (
    <div className="container felx mx-auto mt-8">

      <div className="mb-4">

        <div className="  bg-gray-200 p-4 cursor-pointer " onClick={() => handleToggle(0)}>

          <h2 className="text-lg font-semibold">
            {
              data.MathematicalApplication[0].Sessions.map((lecture, index) => (


                <h3> {lecture.session}</h3>
<h1>{lecture.lectures} </h1>
              ))}</h2>
        </div>
        {openIndex === 0 && (
          <div className="mt-2">
            <ul>
              {data.MathematicalApplication[0].Sessions.map((session, index) => {
                session.map((lecture, index) => (
                  <li key={index} className="text-blue-500">
                    <a href={lecture.link} target="_blank" rel="noopener noreferrer">
                      {lecture.name}
                    </a>
                  </li>))

              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Lectures;
