import React, { useEffect, useState } from "react";
import { GiSofa, GiTable, GiBed } from "react-icons/gi";
import { MdOutlineChair } from "react-icons/md";
import { BsFillDoorClosedFill } from "react-icons/bs";

const furnitureIcons = [<GiSofa />,<BsFillDoorClosedFill/>, <MdOutlineChair />, <GiBed />];

const Loader = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [iconIndex, setIconIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped(prev => !prev);
      setIconIndex(prev => (prev + 1) % furnitureIcons.length);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const frontIcon = furnitureIcons[iconIndex];
  const backIcon = furnitureIcons[(iconIndex + 1) % furnitureIcons.length];

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div>
        <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 perspective">
          <div
            className={`relative w-full h-full duration-500 transform-style preserve-3d ${
              isFlipped ? "rotate-y-180" : ""
            }`}
          >
            {/* Front Side */}
            <div className="absolute w-full h-full flex justify-center items-center text-[4rem] sm:text-[5rem] md:text-[6rem] backface-hidden rounded-xl text-gray-600">
              {frontIcon}
            </div>

            {/* Back Side */}
            <div className="absolute w-full h-full flex justify-center items-center text-[4rem] sm:text-[5rem] md:text-[6rem] backface-hidden rotate-y-180 rounded-xl text-gray-600">
              {backIcon}
            </div>
          </div>
        </div>
        <p className="text-center text-gray-600 font-extrabold text-xl">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
