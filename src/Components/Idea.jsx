// import  from "framer-motion";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

export default function Idea() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [2000, 3000], [-50, 100]);
  const y2 = useTransform(scrollY, [2000, 3000], [-50, 200]);
  return (
    <div className="lg:pt-[141px] max-lg:pt-[3rem] max-xl:px-[3%] xl:px-[10%] bg-[#255852] max-xl:pb-[2rem] xl:pb-[151px]  flex justify-center items-center  mt-[-98px]">
      <div className="relative w-full h-full z-20 max-w-[1320px]">
        <div class="jet-parallax-section__image img1 relative z-[-10]">
          <motion.img
            style={{ y: y }}
            className="absolute  left-[-3rem]  top-[-5rem] z-[-10]"
            src="https://ld-wp73.template-help.com/wordpress/prod_25271/v1/wp-content/uploads/2019/08/2.png"
            alt=""
          />
        </div>
        <div className="jet-parallax-section__image img2">
          <motion.img
            style={{ y: y2 }}
            className="absolute  left-[20%]  top-[10rem] z-10 opacity-[0.5] w-[10rem]"
            src={require('../Assets/strobery.png')}
            alt=""
          />
        </div>
        <div className="md:mt-[1.5rem] z-30 lg:flex max-lg:flex-col gap-10 md:justify-between">
          <div className="lg:w-[30%]">
            <div className="text-[#fff] text-[14px] uppercase font-bold leading-[24px] tracking-[2.8px]">
              About
            </div>
            <h2 className="text-[#fff]  z-30 md:text-[48px] max-md:mb-[1rem] max-md:text-[35px] max-md:leading-[40px] font-bold md:leading-[55px]">
              Starting <br /> with the right idea
            </h2>
          </div>
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          tempora libero et, sunt officiis quos eveniet sapiente rerum ipsum
          accusamus nulla iusto repudiandae porro illo, perferendis culpa nihil,
          ex adipisci? */}
          <div className="flex flex-col gap-10 lg:w-[45%]">
            <p className="font-bold text-[#fff]  text-[22px] leading-[37px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem tempora libero et, sunt officiis quos eveniet
            </p>
            <div className="flex flex-col gap-7">
              <div className="text-[18px] leading-[31px] text-[#fff]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem tempora libero et, sunt officiis quos eveniet
                sapiente rerum ipsum accusamus nulla iusto repudiandae porro
                illo, perferendis culpa nihil, ex adipisci?
              </div>
              <div className="text-[18px] leading-[31px] text-[#fff]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem tempora libero et, sunt officiis quos eveniet
                sapiente rerum ipsum accusamus nulla iusto repudiandae .
              </div>
            </div>
            <div className="flex gap-2 text-white justify-center items-center font-bold text-[18px] cursor-pointer">
        <div className=" w-[1.5rem] border-0 h-[1.5rem] bg-green-900 rounded-full text-[18px] font-bold" />{" "}
      <Link to={'/about'} >More</Link>
      </div>
    
          </div>
        </div>
      </div>
    </div>
  );
}
