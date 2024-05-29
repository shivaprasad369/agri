import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import {  Navigation } from 'swiper/modules';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
export default function Projects() {
  return (
    <div className="xl:pt-[100px] max-md:pt-[90px] pb-2 z-20 relative max-xl:px-[3%] flex flex-col justify-center items-center">
    
      <div className="xl:max-w-[1420px] flex flex-col mr-auto ml-auto relative">
        <div className="mb-[80px] max-w-[1290px]">
          <div>
            <div className="w-[100%]">
              <div className="md:flex max-md:flex-col w-[100%] md:items-center  gap-5 xl:px-[5%]  mb-[80px]">
                <div className=" md:hidden flex justify-center items-center w-[95vw]  overflow-hidden">
                <img  src="https://ld-wp73.template-help.com/wordpress/prod_25271/v1/wp-content/uploads/2019/08/Rectangle-3.2-3.jpg" alt=""  className="md:hidden object-cover overflow-hidden"/>

                </div>
                <img
     
                  className="pt-[10px] md:w-[875px] h-auto max-md:hidden md:h-[529px] max-md:w-[100%] object-cover max-md:ml-[0px] xl:pr-[85px] max-lg:ml-[-450px] max-xl:ml-[-406px] xl:ml-[-376px]"
                  src="https://ld-wp73.template-help.com/wordpress/prod_25271/v1/wp-content/uploads/2019/08/Rectangle-3.2-3.jpg"
                  alt=""
                />
                <div className="lg:w-[45%] md:w-[50%]   max-md:w-[100vw] max-md:pt-[70px] md:pt-[10px] xl:pr-[50px] max-lg:pr-[1rem] xl:pl-[44px]">
                  <div className="text-[#333333] w-[100%] pb-[13px] text=[14px] font-bold leading-[24px] uppercase tracking-[2.8px]">
                    our features
                  </div>
                  <h2 className="text-[#00996d] mb-[38px] md:text-[48px] max-md:text-[35px] max-md:leading-[40px] font-bold md:leading-[55px] ">
                    We change your living space
                  </h2>
                  <div className="mb-[17px] text-[#777777] text-[18px] pr-[1rem]  flex-wrap leading-[31px] tracking-[0.27px] ">
                    Our main goals are to make your design different from other
                    landscaping plans and provide only with quality greening and
                    best plants
                  </div>
                  <ul className=" xl:pl-[52px] max-xl:pl-[15px] list-disc  text-[#777777] text-[18px] leading-[31px] tracking-[0.27px]">
                    <li className="">
                      {" "}
                      <span className="">
                        {" "}
                        <i className=""> </i>{" "}
                      </span>{" "}
                      <span className="">Get the best plants from the USA</span>
                    </li>
                    <li className="">
                      {" "}
                      <span className="">
                        {" "}
                        <i className="fas fa-circle"></i>{" "}
                      </span>{" "}
                      <span className="">
                        Be sure in your irrigation systems
                      </span>
                    </li>
                    <li className="">
                      {" "}
                      <span className="">
                        {" "}
                        <i aria-hidden="true" className=""></i>{" "}
                      </span>{" "}
                      <span className="">
                        Feel the fredom with your gardening ideas
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="xl:px-[4%] pb-[3rem] max-w-[1320px] xl:justify-center xl:items-center w-[100%] h-[100%]">
                <div className="lg:flex max-lg:flex-col gap-5 w-[100%] xl:justify-center xl:items-center">
                  <div className=" lg:w-[38%]">
                    <div className="max-lg:w-[100vw] w-[100%] pt-[10px] xl:pr-[50px] xl:pl-[44px] md:pl-[20px] ">
                      <div className="text-[#333333] pb-[13px] text-[14px] font-bold leading-[24px] uppercase tracking-[2.8px]">
                        OUR TEAM
                      </div>
                      <h2 className="text-[#00996d] mb-[38px] text-[48px] font-bold leading-[55px] ">
                        Experts ready <br />to help
                      </h2>
                      <div className="mb-[17px] lg:w-[100%] max-lg:w-[50vw] max-md:w-[90vw] max-xl:mb-[2rem] flex-wrap text-[#777777] text-[18px] leading-[31px] tracking-[0.27px] ">
                        Our team of experts is always ready to help you with all
                        ideas. Planning, preparation and implementing are our
                        main priorities.
                      </div>
                    </div>
                  </div>
                  <div className="xl:pl-[24px] max-lg:pl-[40px] max-md:pl-[0px] max-xl:pt-[1rem] pb-[3rem] lg:w-[55%] max-lg:w-[100vw] relative ">
                  <FaLongArrowAltLeft className=" swiper-button image-swiper-button-prev absolute xl:right-[5rem] max-md:left-[30%] max-xl:right-[15rem] text-center bottom-0 text-[#312d2d73] hover:text-black transition-all text-[2rem]" />
                  <FaLongArrowAltRight className=" swiper-button image-swiper-button-next absolute xl:right-[2rem] max-md:left-[55%] max-xl:right-[10rem] bottom-0 text-[#312d2d73] hover:text-black transition-all text-[2rem]" />
                    <div>
                      <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        navigation={{
                          nextEl: ".image-swiper-button-next",
                          prevEl: ".image-swiper-button-prev",
                          disabledClass: "swiper-button-disabled",
                        }}
                        modules={[ Navigation]}
                        className="mySwiper conatiners"
                      >
                        <SwiperSlide>
                        <div className="flex  gap-10">
                          <div className="flex flex-col max-md:w-[95vw] max-md:text-center">
                            <img
                              className="mb-[30px] md:w-[280px] md:h-[377px]"
                              src="https://ld-wp73.template-help.com/wordpress/prod_25271/v1/wp-content/uploads/2019/08/Rectangle-2.4.jpg"
                              alt=""
                            />
                            <div className="text-[#00996d] text-[30px] font-bold mb-[6px] leading-[51px] md:text-left">
                              <span>Hank Howard</span>
                            </div>
                            <div className="text-[#333333]  text-[14px] leading-[24px] tracking-[2.8px] font-bold uppercase md:text-left">
                              <span>Designer</span>
                            </div>
                          </div>

                          <div className="flex flex-col max-md:hidden">
                            <img
                              className="mb-[30px] w-[280px] h-[377px]"
                              src="https://ld-wp73.template-help.com/wordpress/prod_25271/v1/wp-content/uploads/2019/08/Rectangle-2.4.jpg"
                              alt=""
                            />
                            <div className="text-[#00996d] text-[30px] font-bold mb-[6px] leading-[51px] text-left">
                              <span>Hank Howard</span>
                            </div>
                            <div className="text-[#333333] text-[14px] leading-[24px] tracking-[2.8px] font-bold uppercase text-left">
                              <span>Designer</span>
                            </div>
                          </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="flex  gap-10 ">
                        <div className="flex flex-col max-md:w-[95vw] max-md:text-center">
                            <img
                              className="mb-[30px] md:w-[280px] md:h-[377px]"
                              src="https://ld-wp73.template-help.com/wordpress/prod_25271/v1/wp-content/uploads/2019/08/Rectangle-2.4.jpg"
                              alt=""
                            />
                            <div className="text-[#00996d] text-[30px] font-bold mb-[6px] leading-[51px] md:text-left">
                              <span>Hank Howard</span>
                            </div>
                            <div className="text-[#333333]  text-[14px] leading-[24px] tracking-[2.8px] font-bold uppercase md:text-left">
                              <span>Designer</span>
                            </div>
                          </div>

                          <div className="flex flex-col max-md:hidden">
                            <img
                              className="mb-[30px] w-[280px] h-[377px]"
                              src="https://ld-wp73.template-help.com/wordpress/prod_25271/v1/wp-content/uploads/2019/08/Rectangle-2.4.jpg"
                              alt=""
                            />
                            <div className="text-[#00996d] text-[30px] font-bold mb-[6px] leading-[51px] text-left">
                              <span>Hank Howard</span>
                            </div>
                            <div className="text-[#333333] text-[14px] leading-[24px] tracking-[2.8px] font-bold uppercase text-left">
                              <span>Designer</span>
                            </div>
                          </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="flex  gap-10">
                        <div className="flex flex-col max-md:w-[95vw] max-md:text-center">
                            <img
                              className="mb-[30px] md:w-[280px] md:h-[377px]"
                              src="https://ld-wp73.template-help.com/wordpress/prod_25271/v1/wp-content/uploads/2019/08/Rectangle-2.4.jpg"
                              alt=""
                            />
                            <div className="text-[#00996d] text-[30px] font-bold mb-[6px] leading-[51px] md:text-left">
                              <span>Hank Howard</span>
                            </div>
                            <div className="text-[#333333]  text-[14px] leading-[24px] tracking-[2.8px] font-bold uppercase md:text-left">
                              <span>Designer</span>
                            </div>
                          </div>

                          <div className="flex flex-col max-md:hidden">
                            <img
                              className="mb-[30px] w-[280px] h-[377px]"
                              src="https://ld-wp73.template-help.com/wordpress/prod_25271/v1/wp-content/uploads/2019/08/Rectangle-2.4.jpg"
                              alt=""
                            />
                            <div className="text-[#00996d] text-[30px] font-bold mb-[6px] leading-[51px] text-left">
                              <span>Hank Howard</span>
                            </div>
                            <div className="text-[#333333] text-[14px] leading-[24px] tracking-[2.8px] font-bold uppercase text-left">
                              <span>Designer</span>
                            </div>
                          </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="flex  gap-10">
                        <div className="flex flex-col max-md:w-[95vw] max-md:text-center">
                            <img
                              className="mb-[30px] md:w-[280px] md:h-[377px]"
                              src="https://ld-wp73.template-help.com/wordpress/prod_25271/v1/wp-content/uploads/2019/08/Rectangle-2.4.jpg"
                              alt=""
                            />
                            <div className="text-[#00996d] text-[30px] font-bold mb-[6px] leading-[51px] md:text-left">
                              <span>Hank Howard</span>
                            </div>
                            <div className="text-[#333333]  text-[14px] leading-[24px] tracking-[2.8px] font-bold uppercase md:text-left">
                              <span>Designer</span>
                            </div>
                          </div>

                          <div className="flex flex-col max-md:hidden">
                            <img
                              className="mb-[30px] w-[280px] h-[377px]"
                              src="https://ld-wp73.template-help.com/wordpress/prod_25271/v1/wp-content/uploads/2019/08/Rectangle-2.4.jpg"
                              alt=""
                            />
                            <div className="text-[#00996d] text-[30px] font-bold mb-[6px] leading-[51px] text-left">
                              <span>Hank Howard</span>
                            </div>
                            <div className="text-[#333333] text-[14px] leading-[24px] tracking-[2.8px] font-bold uppercase text-left">
                              <span>Designer</span>
                            </div>
                          </div>
                        </div>
                        </SwiperSlide>


                      
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
