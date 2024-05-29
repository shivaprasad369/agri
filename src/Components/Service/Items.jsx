import React from "react";
import Data from "./service.jsx";

export default function Items() {
  return (
    <div className="flex xl:px-[10%] max-xl:px-[3%] pb-[65px] mt-[15px] w-[100%] h-[100%] overflow-hidden justify-center items-center box-border">
      <div className="max-w-[1320px] w-[100%] justify-center items-center ">
        <div className="grid md:grid-cols-3 max-md:grid-cols-1 w-[100%] xl:gap-20 max-xl:gap-10 justify-center items-center">
          {Data.map((data) => (
            <div className="w-[100%]">
              <div className="w-[100%]">
                <h2 className=" text-[22px] hover:text-[#00996d] transition-all font-bold mb-[16px] leading-[37px] text-[#333333]">
                {/* eslint-disable-next-line */}
                  <a href="#">
                    {data?.title}
                  </a>
                </h2>

                <div className="text-[#777777] mb-[54px] ml-[1px] text-[16px] leading-[27px] tracking-[0.3px] ">
                    {data.description}
                </div>
                
                <div>
                    <img loading="lazy" width={280} height={367} src={data.image} alt="" className="w-[100%]" />
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
