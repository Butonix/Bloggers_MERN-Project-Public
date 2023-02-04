import React from "react";

const DataTable = ({ dataHead, dataBody, itemWidth }) => {
  if (!dataHead || !dataBody) {
    return null;
  }

  return (
    <div className="border-[1px] border-[#ccc] p-2 overflow-x-auto dark:bg-[#fafafa]">
      <div className="flex items-center mb-3 border-b-[1px] border-gray-300 pb-1  ">
        {dataHead.map((item) => (
          <p
            key={item}
            className={`md:flex-1 min-w-[${itemWidth || 180}px] w-1/4 flex-none md:w-fit`}
          >
            {item}
          </p>
        ))}
      </div>
      <div>
        {dataBody.map((row, i) => (
          <div key={i} className="flex items-center justify-start mb-3">
            {row.map((item, idx) => (
              <div
                key={item}
                className={`md:flex-1 min-w-[${itemWidth || 160}px] md:min-w-[${
                  itemWidth || 180
                }px] mr-5 w-1/4 flex-none md:w-auto`}
              >
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataTable;
