import React from "react";

export default function Footer() {
  return (
    <div className="bg-cover max-md:pt-[700px] md:flex max-md:flex-col justify-between items-center  flex-col bg-no-repeat md:mt-[-600px] max-md:mt-[-400px] md:pt-[850px] max-md:pb-[2rem] md:pb-[122px] bg-[url('https://ld-wp73.template-help.com/wordpress/prod_25271/v1/wp-content/uploads/2019/08/Untitled-1.jpg')]">
      <div className="max-w-[1320px] md:flex max-md:flex-col items-center xl:px-[10%] max-xl:px-[3%] gap-[10rem] justify-between">
        <div className="flex flex-col max-md:mb-[2rem]  ">
          <h2 className="mb-[30px] text-[#ffffff] md:text-[48px] max-md:text-[35px] font-bold max-md:leading-[40px] md:leading-[55px]">
            Let’s build something <br /> amazing together
          </h2>
          <p className="text-[#ffffff] text-[22px] leading-[1.7em]">
            Lorem ipsum dolorsit amet consectetu{" "}
            <span style={{ textDecoration: "underline" }}>
              <strong>Lorem!</strong>
            </span>
            <br className="max-md:hidden" /> Or call us: &nbsp;
            <strong>
              <a href="callto:+91 1234567890">+91 12345567890</a>
            </strong>
          </p>
        </div>
        <div className="md:flex max-md:flex-col gap-20 justify-center items-center ">
          <div className="flex flex-col max-md:mb-[2rem]  ">
            <p className="text-[#ffffff] md:text-[14px] max-md:text-[18px] leading-[1.7em] mb-[15px]">
              Address
            </p>
            <div className="text-[#ffffff] text-[14px] leading-[1.7em] max-md:mb-[10px] md:mb-[15px]">
              Lorem ipsum dolorsit <br />
              consectetur adipisicing.
            </div>
            <p className="text-[#ffffff] text-[14px] leading-[1.7em] mb-[15px]">
              <a href="mailto:youremail@gmail.com">
                <span style={{ textDecoration: "underline" }}>
                  youremail@gmail.com
                </span>
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-3  text-[#ffffff] text-[14px] leading-[1.7em] mb-[15px]">
            <span>Dribbble</span>
            <span>insta</span>
            <span>Facebook</span>
            <span>Dribbbl</span>
          </div>
        </div>
      </div>
      <p className="md:px-[13%] max-md:pt-[2rem] w-[100%] max-md:px-[3%] md:pt-[6rem] text-[#ffffff] text-[14px] leading-[1.7em] md:mb-[15px]">
        © 2024 Unitechno. All Rights Reserved. Design by{" "}
        <strong>
        {/* eslint-disable-next-line */}
          <a href="#">
            <span style={{ textDecoration: "underline" }}>Unitechno</span>
          </a>
        </strong>
      </p>
    </div>
  );
}
