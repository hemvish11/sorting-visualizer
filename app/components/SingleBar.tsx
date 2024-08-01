import React from "react";

interface obj {
  height: number;
}

const SingleBar = ({ height }: obj) => {
  return (
    <div className="flex flex-col">
      <div
        style={{ height: `${height}px` }}
        className={`w-[20px] bg-white border border-[#00246B]`}
      ></div>
      <p className="text-sm">{height}</p>
    </div>
  );
};

export default SingleBar;