import { useRouteError } from "react-router-dom";
import Header from "../components/Header";
import Lottie from "lottie-react";
import errorData from "../assets/sad.json"

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <Header></Header>
      <div className="flex min-h-screen items-center justify-center"><Lottie animationData={errorData}></Lottie></div>
    </div>
  );
};

export default Error;