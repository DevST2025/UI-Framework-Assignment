// import React from 'react'

import { useEffect, useState } from "react";

export default function GetScore() {
  const [studentScore, setStudentScore] = useState([]);

  useEffect(() => {
    const url = "https://voucher-hunter-api.onrender.com/api/v1/students";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setStudentScore(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>

 <div className="flex flex-col">
       <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
         <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
           <div className="overflow-hidden">
             <table className="min-w-full">
               <thead className="bg-white border-b">
                 <tr>
                   <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    YOB
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Score
                  </th>
                </tr>
              </thead>
              <tbody>
              
                {studentScore.map(item => (
                  <tr key={item.id} className={`${(item.id % 2) ? "bg-white-100" : "bg-gray-100"} border-b`}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item.id}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {item.name}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {item.yob}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {item.score}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </>
  
  );
}
