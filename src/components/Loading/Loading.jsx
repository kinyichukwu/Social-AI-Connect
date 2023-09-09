import React from "react";
import Loader from "../../assets/loader/Loader.png";
import { ClipLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-8">
      <img src={Loader} alt="" />
      <ClipLoader color="#36d7b7" size={70} />
    </div>
  );
};

export default Loading;
