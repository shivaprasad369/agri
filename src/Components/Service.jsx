import React from "react";

export default function Service() {
  return (
    <div className="px-[0%] max-md:px-[3%] max-md:pt-[5rem] md:pt-[8rem] flex justify-center items-center">
      <div className="max-w-[1520px] flex flex-col justify-center items-center">
        <div className="md:flex max-md:flex-col  md:justify-around items-center pb-[3rem]">
          <div className="md:flex max-md:flex-col justify-around flex-col gap-2 ">
            <div className="uppercase text-[#333333] text-[14px] font-bold tracking-[2.8px] leading-[24px]">
              Services
            </div>
            <div>
              <h2 className="text-[#00996d] md:text-[48px] max-md:text-[35px] max-md:leading-[40px] max-md:mb-[2rem] md:leading-[55px] font-bold">
                We propose
                <br className="max-md:hidden "/>
                 the best services
              </h2>
            </div>
          </div>
          <div className="box-border text-[#777777] md:w-[35%] text-[18px] leading-[31px] tracking-[0.27px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            dicta, unde, saepe doloremque deserunt excepturi molestiae repellat
            exercitationem Lorem, ipsum
            {/* dolor sit amet
            consectetur adipisicing elit. Cupiditate dicta, unde, saepe
            doloremque deserunt excepturi molestiae repellat exercitationem
            ullam sapiente eum nesciunt, autem incidunt iusto nulla sunt culpa
            nihil iure? */}
          </div>
        </div>

        <div className="xl:px-[10%] max-xl:px-[3%] max-xl:mb-[10rem] flex mt-[3.5rem] justify-center items-center">
          <div className="md:flex max-md:flex-col xl:gap-28 max-xl:gap-10 justify-between  ">
            <div className=" flex flex-col md:w-[33.3%] max-md:mb-[3rem] gap-6">
              <h3 className="text-[22px] font-bold mb-[rem] leading-[37px] text-[#333333]">
              {/* eslint-disable-next-line */}
                <a href="" className="hover:text-[#00996d] transition-all">
                  {/* Design &amp; planting */}
                  House
                </a>
              </h3>
              <div className="text-[#777777] text-[16px] leading-[27px] w-[100%] mb-[1.5rem] tracking-[0.3px] elementor-text-editor elementor-clearfix">
                dolor sit amet consectetur adipisicing elit. Cupiditate dicta,
                unde, saepe doloremque deserunt excepturi molestiae
              </div>
              <div>
                <img
                src={require('../Assets/house.jpg')}
                  alt="tr"
                  className="w-[100%]"
                />
              </div>
            </div>

            <div className=" fle flex-col max-md:mb-[5rem] md:w-[33.3%] gap-6 xl:pt-[23%]">
              <h3 className="text-[22px] font-bold mb-[1rem] leading-[37px] text-[#333333]">
              {/* eslint-disable-next-line */}
                <a href="" className="hover:text-[#00996d] transition-all">
                  {/* Smart planning */}
                  Commercial
                </a>
              </h3>
              <div className="text-[#777777] text-[16px] leading-[27px] w-[100%] mb-[3rem] tracking-[0.3px] elementor-text-editor elementor-clearfix">
                dolor sit amet consectetur adipisicing elit. Cupiditate dicta,
                unde, saepe doloremque deserunt excepturi molestiae
              </div>
              <div>
                <img
                  src={require('../Assets/commercial.jpg')}
                  alt="re"
                  className="w-[100%]"
                />
              </div>
            </div>
            <div className="md:w-[33.3%]  fle flex-col gap-6 xl:mt-[7rem]">
              <h3 className="text-[22px] font-bold mb-[1rem] leading-[37px] text-[#333333]">
              {/* eslint-disable-next-line */}
                <a href="" className="hover:text-[#00996d] transition-all">
                  Garden care
                </a>
              </h3>
              <div className="text-[#777777] text-[16px] leading-[27px] w-[100%] mb-[3rem] tracking-[0.3px] elementor-text-editor elementor-clearfix">
                dolor sit amet consectetur adipisicing elit. Cupiditate dicta,
                unde, saepe doloremque deserunt excepturi molestiae
              </div>
              <div>
                <img
                  src="https://ld-wp73.template-help.com/wordpress/prod_25271/v1/wp-content/uploads/2019/08/Rectangle-3-2.jpg"
                  alt="ds"
                  className="w-[100%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
