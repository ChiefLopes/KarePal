import React from 'react'

const Buttons = () => {
  return (
    <div className="flex space-x-5 pb-1">
      <button className="border w-[6rem] h-9 rounded-lg border-[#2937B6] hover:bg-[#2937B6] hover:text-white transition duration-200">
        Sign In
      </button>
      <button className="border w-[6rem] h-9 rounded-lg bg-[#2937B6] text-white hover:bg-transparent hover:text-black hover:border-[#2937b6] transition duration-200">
        Sign Up
      </button>
    </div>
  );
}

export default Buttons