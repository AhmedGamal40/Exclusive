import React from "react";
import { Spinner } from "@material-tailwind/react";

function Loader() {
  return  <div className="flex justify-center items-center">
         <div className="flex gap-2 my-10">
      <Spinner color="blue" className="size-20"/>
      <Spinner color="red" className="size-20"/>
      <Spinner color="green" className="size-20"/>
      <Spinner color="amber" className="size-20"/>
      <Spinner color="teal" className="size-20"/>
      <Spinner color="indigo" className="size-20"/>
      <Spinner color="purple" className="size-20"/>
      <Spinner color="pink" className="size-20"/>
    </div>
    </div>
}

export default Loader;
