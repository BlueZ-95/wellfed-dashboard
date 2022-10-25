import React from "react";

// components

export default function Table({ columns , data }) {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded overflow-hidden">
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                {Object.values(columns).map((column : string, index) => {
                  return (
                    <th
                      key={index}
                      className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                    >
                      {column}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {data.map((courseDetails, index : number) => {

return (<tr key={index}>

    {Object.keys(columns).map((col, i) => {
     
      return <td key={i} className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"> {courseDetails[col]} </td>
    })}

</tr>);

              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
