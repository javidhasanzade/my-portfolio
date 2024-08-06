import React from "react";
import { FaPaperPlane } from "react-icons/fa";
// @ts-ignore

export default function SubmitBtn() {
 // const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 
  h-[3rem] w-[8rem] bg-green-400 text-white 
  hover:bg-green-500
  rounded-full outline-none transition-all   
  focus:scale-110 
  hover:scale-110 
  active:scale-105 
  disabled:scale-100
  disabled:bg-opacity-65"
    >

      Submit{" "}
      <FaPaperPlane
             className="text-xs
             opacity-70 transition-all
              group-hover:translate-x-1
              group-hover:-translate-y-1"
          />{" "}
    </button>
  );
}
