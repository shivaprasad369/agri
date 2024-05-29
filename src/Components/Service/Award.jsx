import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

export default function Award() {
  const { scrollY} = useScroll();
  // const divRef = useRef(null);

  // const getPosition = () => {
  //   const { x, y } = divRef.current.getBoundingClientRect();
  //   console.log(`X position: ${x}`);
    console.log(scrollY);
  // };

const y=useTransform(scrollY,[1500,2400],[0,400])
const y2=useTransform(scrollY,[1500,2400],[-50,200])
const y3=useTransform(scrollY,[1500,2400],[0,400])
  return (
    <div className="flex relative max-xl:pb-[200px] xl:pb-[500px] justify-center items-center pt-[65px] w-[100%]">

<motion.img style={{y:y}}  className="absolute max-xl:hidden top-[-17rem] opacity-[0.7] left-[-5%]" width={'208'} height={'385'} src="https://ld-wp73.template-help.com/wordpress/prod_25271/v1/wp-content/uploads/2019/08/2-4.png" alt="" />
    
      <motion.img style={{y:y2}} className="absolute  max-xl:hidden top-[-15rem]  right-[-2rem]"   src="https://ld-wp73.template-help.com/wordpress/prod_25271/v1/wp-content/uploads/2019/08/1-3.png" alt="" />
      <motion.img style={{y:y3}} className="absolute  max-xl:hidden top-[20%] right-[-2rem]" src="https://ld-wp73.template-help.com/wordpress/prod_25271/v1/wp-content/uploads/2019/08/1-2.png" alt="" />
      

      <div className="max-w-[1320px] flex justify-center items-center">
        <div>
          <div className="xl:flex max-xl:flex-col relative max-w-[1320px] justify-center max-xl:px-[3%] xl:px-[10%] w-[100%]">
            <div className="xl:w-[50%]">
              <div className="text-[#333333] text-[14px] font-bold leading-[24px] tracking-[2.8px]  uppercase">
                AWARDS
              </div>
              <h1 className="md:text-[48px] max-md:text-[35px] max-md:leading-[40px] font-bold text-[#00996d] md:leading-[55px] w-[100%]">
                Award-winning
                <br />
                gardening <br /> ideas
              </h1>
            </div>

            <div className="xl:w-[50%] max-xl:pt-[2rem] flex-col  xl:flex xl:justify-center items-center">
              <div className="mb-[21px]  text-[#777777] text-[18px] leading-[31px] tracking-[0.27px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
enim! Doloremque neque voluptatibus minus aliquam eum saepe sequi
nostrum? Voluptas ipsa quis magnam voluptatum accusamus architecto
cum exercitationem .
              </div>
              <div className="flex max-xl:pt-[1rem] ">
                <div className="mb-[10px] mt-[20px] ">
                  <h1 className="text-[18px] border-r-[3px] border-[#ceeeeb] pt-[5px] pr-[24px] pb-[38px] mt-[5px] text-[#777777] leading-[1em] ">2016</h1>

                </div>
                <div className="flex flex-col">

                <div className="font-bold md:text-[22px] max-md:text-[18px] max-md:leading-[20px] md:leading-[37px] mt-[15px] max-md:ml-[50px] md:ml-[70px] text-[#333333]"> ipsum dolor Award</div>
                <div className="text-[18px] leading-[1.7em] mt-[2px]  max-md:ml-[50px] md:ml-[70px] ">The best decoration for city garden.</div>
                </div>
              </div>
              <div className="flex ">
                <div className="mb-[10px] mt-[20px] ">
                  <h1 className="text-[18px] border-r-[3px] border-[#ceeeeb] pt-[5px] pr-[24px] pb-[38px] mt-[5px] text-[#777777] leading-[1em] ">2016</h1>

                </div>
                <div className="flex flex-col">

                <div className="font-bold md:text-[22px] max-md:text-[18px] max-md:leading-[20px] md:leading-[37px] mt-[15px] max-md:ml-[50px] md:ml-[70px] text-[#333333]"> ipsum dolor Award</div>
                <div className="text-[18px] leading-[1.7em] mt-[2px] max-md:ml-[50px] md:ml-[70px]">The best decoration for city garden.</div>
                </div>
              </div>
              <div className="flex ">
                <div className="mb-[10px] mt-[20px] ">
                  <h1 className="text-[18px] border-r-[3px] border-[#ceeeeb] pt-[5px] pr-[24px] pb-[38px] mt-[5px] text-[#777777] leading-[1em] ">2016</h1>

                </div>
                <div className="flex flex-col">

                <div className="font-bold md:text-[22px] max-md:text-[18px] max-md:leading-[20px] md:leading-[37px] mt-[15px] max-md:ml-[50px] md:ml-[70px] text-[#333333]"> ipsum dolor Award</div>
                <div className="text-[18px] leading-[1.7em] mt-[2px]  max-md:ml-[50px] md:ml-[70px] ">The best decoration for city garden.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
