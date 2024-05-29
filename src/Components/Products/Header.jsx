import { motion } from "framer-motion";
import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMenu } from "react-icons/io5";

export default function Header() {
  function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }

  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
  return (
    <div className="bg-[#255852]  text-white flex w-[100%] xl:mb-[100px] max-xl:mb-[5rem] max-md:mb-[2rem]">
      <div className="flex justify-between max-md:py-[1rem] items-center px-[5%] w-[100%]">
        <span className="xl:text-3xl max-xl:text-2xl   font-bold uppercase">
          Logo
        </span>
        <div className="md:hidden">
          <IoMenu
            className="text-white  text-[2.5rem]"
            onClick={() => openNav()}
          />
        </div>
        <div className="flex gap-10 items-center max-md:hidden">
          <ul className="text-[18px] flex leading-[1.7em]">
            <li className="px-[2rem] py-[2.5rem] border-t-[0.8rem] border-transparent hover:border-[#113f23]">
              <a href="/">Home</a>{" "}
            </li>
            <li className="px-[1.5rem] py-[2.5rem] border-t-[0.8rem] border-transparent tracking-wider transition-all hover:border-[#113f23]">
              <a href="/about"> About</a>
            </li>
            <li className="px-[1.5rem] py-[2.5rem] border-t-[0.8rem] border-transparent tracking-wider transition-all hover:border-[#113f23]">
              <a href="/service"> Services</a>
            </li>
            <li className="px-[1.5rem] py-[2.5rem] border-t-[0.8rem]  tracking-wider transition-all border-[#113f23]">
              <a href="/products"> Products</a>
            </li>
            {/* <li className='px-[1.5rem] py-[2.5rem] border-t-[0.8rem] border-transparent tracking-wider transition-all hover:border-[#113f23]'>Idea</li> */}
            <li className="px-[1.5rem] py-[2.5rem] border-t-[0.8rem] border-transparent tracking-wider transition-all hover:border-[#113f23]">
              <a href="/contact">Contact</a>
            </li>
          </ul>

          <motion.button
            initial={{ scale: 1 }}
            whileHover={{
              scale: 0.9,
              transition: { duration: 1, type: "spring" },
            }}
            className="px-[1rem] max-xl:hidden bg-[#00996d]  flex gap-3 h-[2rem] tracking-wider  justify-center items-center border-0  rounded-l-full rounded-r-full"
          >
            <BiSolidPhoneCall /> <span className="text-sm">1234567890</span>
          </motion.button>
        </div>
      </div>
      <div id="myNav" className="overlay z-40">
        <div className="closebtn text-white text-xl" onClick={closeNav}>
          x
        </div>
        <div className="overlay-content ml-[1rem]">
          <a
            href="/"
            className="border-l-[7px] border-transparent hover:border-[#204916]   mb-[20px] w-[15rem] pl-[1rem]"
            style={{ paddingLeft: "2rem" }}
          >
            Home
          </a>
          <a
            href="/about"
            className="border-l-[7px] border-transparent hover:border-[#204916]  mb-[20px] w-[15rem] pl-[1rem]"
            style={{ paddingLeft: "2rem" }}
          >
            About
          </a>
          <a
            href="/service"
            className="border-l-[7px] border-transparent hover:border-[#204916]  mb-[20px] w-[15rem] pl-[1rem]"
            style={{ paddingLeft: "2rem" }}
          >
            Services
          </a>
          <a
            href="/products"
            className="border-l-[7px] border-[#204916]  mb-[20px] w-[15rem] pl-[1rem]"
            style={{ paddingLeft: "2rem" }}
          >
            Products
          </a>
          <a
            href="/contact"
            className="border-l-[7px] border-transparent hover:border-[#204916]  mb-[20px] w-[15rem] pl-[1rem]"
            style={{ paddingLeft: "2rem" }}
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
