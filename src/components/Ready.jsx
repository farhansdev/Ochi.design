import React from "react";
import { useEffect, useState } from "react";

function Ready() {

    const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180)
    })
  });

  return (
    <div className="eyes relative w-full h-screen bg-[#CDEA43]">
     <div className='headings flex justify-center items-center flex-col leading-none tracking-tighter py-20 text-9xl uppercase'>
     <div className="flex justify-center items-center flex-col transition-all duration-300 hover:scale-110">
     <span className=" font-['Neue Montreal'] text-black text-[12vw] uppercase font-bold">
     Ready
     </span>
     <span className=" font-['Neue Montreal'] text-black text-[12vw] uppercase font-bold">
     To Start
     </span><span className=" font-['Neue Montreal'] text-black text-[12vw] uppercase font-bold">
     The Project?
     </span>
     </div>
        <div className="flex absolute gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
           <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
              <div
                style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 bg-red"
              >
                <div className="w-8 h-8 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
              <div
                style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 bg-red"
              >
                 <div className="w-8 h-8 rounded-full bg-zinc-100"></div>
        </div> 
      </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default Ready;