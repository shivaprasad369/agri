import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

export default function About() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [600, 1100], [-50, 70]);
  const y2 = useTransform(scrollY, [600, 1100], [-100, 100]);
  return (
    <div className="flex relative md:pb-[5rem] justify-center   items-center w-full h-full">
      <div className="xl:flex max-xl:flex-col relative max-w-[1320px] justify-center xl:px-[10%] max-xl:px-[3%] w-[100%]">
        <motion.img
          style={{ y: y }}
          width={268}
          height={385}
          className="left-[269px] max-xl:hidden  top-[205px] absolute z-[-10]"
          src="https://ld-wp73.template-help.com/wordpress/prod_25271/v1/wp-content/uploads/2019/08/2-4.png"
          alt=""
        />
        <motion.img
          style={{ y: y2 }}
          width={225}
          height={239}
          className="absolute max-xl:hidden left-[200px] top-[225px]"
          src="https://ld-wp73.template-help.com/wordpress/prod_25271/v1/wp-content/uploads/2019/08/2-1.png"
          alt=""
        />
        <div className="xl:w-[50%] max-xl:mb-[2rem]">
          <div className="text-[#333333] text-[14px] font-bold leading-[24px] tracking-[2.8px]  uppercase">
            about
          </div>
          <h1 className="md:text-[48px] max-md:text-[35px] font-bold text-[#00996d] max-md:leading-[40px] md:leading-[55px] w-[80%]">
            Choose
            <br />
            your green perfection
          </h1>
        </div>

        <div className="xl:w-[50%] flex-col flex justify-center items-center">
          <div className="text-[#333333] text-[22px] font-bold leading-[37px] mb-[28px]">
              Lorem ipsum dolorsit amet consectetur adipisicing elit. Obcaecati
              repellat labore distinctio quidem odio? Earum repellendus
            
          </div>
          <div className="mb-[21px] text-[#777777] text-[18px] leading-[31px] tracking-[0.27px]">
          Lorem ipsum dolorsit amet consectetur adipisicing elit. Obcaecati
              repellat labore distinctio quidem odio? Earum repellendus expedita architecto,
            asperiores nisi molestiae officiis laboriosam ratione, accusamus
          </div>
          <div className="mb-[21px] text-[#777777] text-[18px] leading-[31px] tracking-[0.27px]">
          Lorem ipsum dolorsit amet consectetur adipisicing elit. Obcaecati
              repellat labore distinctio quidem odio? Earum repellendus expedita architecto,
          </div>
          <div className="mb-[21px] text-[#777777] text-[18px] leading-[31px] tracking-[0.27px]">
          Lorem ipsum dolorsit amet consectetur adipisicing elit. Obcaecati
              repellat labore distinctio quidem odio? Earum repellendus expedita architecto,
            asperiores
          </div>
        </div>
      </div>
    </div>
  );
}
