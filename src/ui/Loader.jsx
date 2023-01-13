import React from "react";
import { MagnifyingGlass } from "react-loader-spinner";

const Loader = () => {
  return (
    <>
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.5)]"></div>
      <div className="w-fit h-fit fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="#c0efff"
          color="#e15b64"
        />
      </div>
    </>
  );
};

export default Loader;
