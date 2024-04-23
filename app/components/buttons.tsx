import { useState } from "react";

const Buttons = () => {
  type btn = boolean | string;

  const [btn, setBtn] = useState<btn>(false);
//   const [color, setColor] = useState<btn>("blue");

//   const handleChange = () => {
//     setBtn(!btn);
//     // setColor("");
//   };

  return (
    <div className="flex space-x-5 pb-1">
      {/* SIGN IN BUTTON */}
      <button
        className={`border w-[6rem] h-9 rounded-lg border-[#2937B6]  hover:bg-[#2937B6] text-black transition duration-200  ${
          btn ? "bg-[#2937B6] transition ease-in-out duration-300" : ""
        }`}
        onMouseEnter={() => setBtn(true)}
        onMouseLeave={() => setBtn(false)}
      >
        Sign In
      </button>

      {/* SIGN UP BUTTON */}
      <button
        className={`border w-[6rem] h-9 rounded-lg border-[#2937B6]  bg-[#2937B6] hover:text-white transition duration-300 ease-in-out ${
          btn ? "bg-white text-black transition duration-300 ease-in-out" : ""
        }`}
        // onMouseEnter={() => setBtn(false)}
        // onMouseLeave={() => setBtn(true)}
      >
        Sign Up
      </button>
    </div>
  );
};

export default Buttons;
