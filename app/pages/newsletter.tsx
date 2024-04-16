import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-[#001727] h-[22rem]">
      <div className="flex flex-col items-center justify-center container-lg pt-20 text-white space-y-12">
        {/* TEXT */}
        <div className="text-center">
          <h1 className="font-bold">Newsletter</h1>
          <p className="uppercase text-4xl">Join Us</p>
          <p className="max-w-[27rem]">
            KarePal: Your AI medical companion, empowering informed health
            decisions.
          </p>
        </div>

        <div className="flex flex-row">
          <input
            type="text"
            placeholder="Your Email"
            className="p-3 rounded-l w-[30rem] text-gray-500 text-lg outline-0"
          />
          <button className="bg-[#2937B6] p-3 rounded-r w-[9rem] text-lg hover:bg-blue-900">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
