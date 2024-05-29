import React from "react";

export default function About() {
  return (
    <div className="flex justify-center items-center max-md:pb-[40px] md:pb-[65px] w-[100%]">
      <div className="max-w-[1320px] flex justify-center items-center">
        <div>
          <div className="md:flex max-md:flex-col relative max-w-[1320px] justify-center xl:px-[10%] max-xl:px-[3%] w-[100%]">
            <div className="md:w-[50%]">
              <div className="text-[#333333] text-[14px] font-bold leading-[24px] tracking-[2.8px]  uppercase">
                SERVICES
              </div>
              <h1 className="md:text-[48px] max-md:text-[35px] max-md:leading-[40px] font-bold text-[#00996d] md:leading-[55px] w-[100%]">
                We propose
                <br />
                the best services
              </h1>
            </div>

            <div className="md:w-[50%] max-md:pt-[1rem] flex-col flex justify-center items-center">
              <div className="mb-[21px] lg::pr-[60px] text-[#777777] text-[18px] leading-[31px] tracking-[0.27px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
              enim! Doloremque neque voluptatibus minus aliquam eum saepe sequi
              nostrum? Voluptas ipsa quis magnam voluptatum accusamus.
              </div>
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
