import React from "react";

const QueryTable = ({ data }) => {
  return (
    <div className="max-w-full overflow-hidden rounded-lg bg-white">
      <table className="min-w-full">
        <thead>
          <tr className="text-left font-light text-sm text-slate-300 text-gray-700 bg-white">
            <th className="px-5 py-3 border-b-2 border-gray-200">
              Name
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200">
              Industry
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200">
              City
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200">
              State
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200">
              Segment
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200">
              Owner ID
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-5 py-2 border-b border-gray-200 text-sm truncate">
                {item.name}
              </td>
              <td className="px-5 py-2 border-b border-gray-200 text-sm truncate">
                {item.industry}
              </td>
              <td className="px-5 py-2 border-b border-gray-200 text-sm truncate">
                {item.city}
              </td>
              <td className="px-5 py-2 border-b border-gray-200 text-sm truncate">
                {item.state}
              </td>
              <td className="px-5 py-2 border-b border-gray-200 text-sm truncate">
                {item.segment}
              </td>
              <td className="px-5 py-2 border-b border-gray-200 text-sm truncate">
                {item.ownerId}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
          <span className="text-xs xs:text-sm text-gray-900">
            Only X rows are shown. View full list for more
          </span>
          <div className="inline-flex mt-2 xs:mt-0">
            <button className="text-sm text-indigo-600 hover:text-indigo-500">
            </button>
            <button className="text-sm text-indigo-600 hover:text-indigo-500 ml-3" >
              Show Query
            </button>
            <button className="text-sm text-indigo-600 hover:text-indigo-500 ml-3" >
              Show Chart
            </button>
            <button className="text-sm text-indigo-600 hover:text-indigo-500 ml-3" >
              Pin to Dashboard
            </button>
          </div>
      </div>
    </div>
  );
};

export default QueryTable;

