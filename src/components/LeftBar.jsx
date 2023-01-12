import React from "react";

const LeftBar = () => {
  return (
    <div className="w-[5em] min-h-[90vh] flex flex-col justify-between p-5 items-center bg-[#00b8f1]">
      <i class="fa-solid fa-bars text-3xl text-white cursor-pointer"></i>
      <i class="fa-solid fa-arrow-right-from-bracket text-3xl text-white cursor-pointer"></i>
    </div>
  );
};

export default LeftBar;
