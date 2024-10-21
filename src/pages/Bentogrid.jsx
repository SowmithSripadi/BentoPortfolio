import React from "react";

function Bentogrid() {
  return (
    <div className="flex justify-center lg:mt-[160px] md:mt-[160px] mt-20">
      <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-3 lg:gap-[30px] md:gap-[20px] gap-10 max-w-[1000px] max-h-[1000px]">
        <div className="grid-item lg:row-span-2 md:row-span-2 bg-[#C6D8E5]">
          {" "}
          Item 1
        </div>
        <div className="grid-item lg:col-span-2 md:col-span-2 bg-[#D9E3B9]">
          {" "}
          Item 2
        </div>
        <div className="grid-item bg-[#CACACA]"> Item 3</div>
        <div className="grid-item bg-[#F8A9C0]"> Item 4</div>
        <div className="grid-item lg:col-span-2 md:col-span-2 bg-[#D4C8ED]">
          {" "}
          Item 5
        </div>
        <div className="grid-item bg-[#FEEDAE]"> Item 6</div>
      </div>
    </div>
  );
}

export default Bentogrid;
