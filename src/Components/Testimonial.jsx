import {  motion,  useScroll, useTransform } from 'framer-motion';
import React, {useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import './styles.css';

// import required modules
import { Autoplay} from 'swiper/modules';

export default function Testimonial() {
    // const divRef = useRef(null);
    const { scrollY } = useScroll();
    const divRef = useRef(null);

    // const getPosition = () => {
    //   const { x, y } = divRef.current.getBoundingClientRect();
    //   console.log(`X position: ${x}`);
      console.log(scrollY);
    // };

const y=useTransform(scrollY,[4154,5000],[0,300])
const y2=useTransform(scrollY,[4154,5000],[-50,200])
const y3=useTransform(scrollY,[4554,5500],[0,300])
  return (
      
<div ref={divRef} className="lg:pt-[216px] max-xl:pt-[7rem] relative md:pb-[355px] z-10 flex justify-center items-center" >
    
  
    <motion.img style={{y:y}}  className="absolute max-md:hidden top-[-17rem] opacity-[0.7] left-[-5%]" width={'208'} height={'385'} src="https://ld-wp73.template-help.com/wordpress/prod_25271/v1/wp-content/uploads/2019/08/2-4.png" alt="" />
    
      <motion.img style={{y:y2}} className="absolute max-md:hidden top-[-15rem]  right-[-2rem]"   src="https://ld-wp73.template-help.com/wordpress/prod_25271/v1/wp-content/uploads/2019/08/1-3.png" alt="" />
      <motion.img style={{y:y3}} className="absolute max-md:hidden top-[20%] right-[-2rem]" src="https://ld-wp73.template-help.com/wordpress/prod_25271/v1/wp-content/uploads/2019/08/1-2.png" alt="" />
      
      <div className="flex flex-col md:overflow-visible  relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
       
     
        modules={[Autoplay]}
        className="mySwiper bg-transparent  md:max-w-[1320px] max-md:w-[350px] py-[2rem]"
      >
        <SwiperSlide>
        <div className="text-center flex flex-col  justify-center items-center"> 

          <p className="text-[22px] leading-[37px] xl:w-[845px] max-xl:w-[700px] max-md:w-[100%] justify-center items-center mb-[51px] text-[#333333] text-center font-bold">
            <span>
              “The best way to demonstrate your uniqueness is to add more
              naturalism to the grey walls in the huge city. So the main idea of
              this project is to be close to wildlife...”
            </span>
          </p>
          <span className="text-[#00996d]  text-center text-[30px] font-bold leading-[51px]">Jerome Bell</span>
          <span className="text-[16px] font-bold leading-[24px] tracking-[2.5px] uppercase text-[#333333] ">IND</span>
          <span className="text-[#00996d33] text-[300px] font-bold absolute w-full top-[-4rem] leading-[341px]">“</span>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="text-center flex flex-col relative justify-center items-center"> 

          <p className="text-[22px] leading-[37px] w-[100%] xl:w-[845px] max-xl:w-[700px] max-md:w-[100%] justify-center items-center mb-[51px] text-[#333333] text-center font-bold">
            <span>
              “The best way to demonstrate your uniqueness is to add more
              naturalism to the grey walls in the huge city. So the main idea of
              this project is to be close to wildlife...”
            </span>
          </p>
          <span className="text-[#00996d]  text-center text-[30px] font-bold leading-[51px]">Jerome Bell</span>
          <span className="text-[16px] font-bold leading-[24px] tracking-[2.5px] uppercase text-[#333333] ">IND</span>
          <span className="text-[#00996d33] text-[300px] font-bold absolute w-full top-[-4rem] leading-[341px]">“</span>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="text-center flex flex-col relative justify-center items-center"> 

          <p className="text-[22px] leading-[37px] xl:w-[845px] max-xl:w-[700px] max-md:w-[100%] justify-center items-center mb-[51px] text-[#333333] text-center font-bold">
            <span>
              “The best way to demonstrate your uniqueness is to add more
              naturalism to the grey walls in the huge city. So the main idea of
              this project is to be close to wildlife...”
            </span>
          </p>
          <span className="text-[#00996d]  text-center text-[30px] font-bold leading-[51px]">Jerome Bell</span>
          <span className="text-[16px] font-bold leading-[24px] tracking-[2.5px] uppercase text-[#333333] ">IND</span>
          <span className="text-[#00996d33] text-[300px] font-bold absolute w-full top-[-4rem] leading-[341px]">“</span>
        </div>
        </SwiperSlide>
        </Swiper>
      </div>
    </div>
  
  );
}
