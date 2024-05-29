import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react'
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMenu } from 'react-icons/io5';


export default function Banner() {
  const { scrollY } = useScroll();

    
    const y=useTransform(scrollY,[0,200],[0,70])
    function openNav() {
      document.getElementById("myNav").style.width = "100%";
    }
    
    function closeNav() {
      document.getElementById("myNav").style.width = "0%";
    }
  return (
    <div className=' w-full xl:h-[125vh] max-xl:h-[80vh]  relative '>
        <img src={require('../Assets/Banner.jpg')} alt="" className='absolute w-full h-full z-10 object-cover' />
      <div className='bg-hero-pattern max-w-[1520px]  relative  z-20 text-white '>
        <div className='flex  justify-between px-[3%] items-center'> 
            <div className='text-3xl mt-[2rem]'>
                Logo
            </div>
            <div className='md:hidden'>
            <IoMenu onClick={openNav} className='text-white mt-[2rem] text-[2.5rem]'/>
            </div>
            <div className='flex max-md:hidden justify-around items-center gap-20 capitalize text-[1.1rem]'>
                <ul className='flex '>
                <li className='px-[2rem] py-[2.5rem] border-t-[0.8rem] border-[#113f23]'><a href='/'>Home</a> </li>
              <li className='px-[1.5rem] py-[2.5rem] border-t-[0.8rem] border-transparent tracking-wider transition-all hover:border-[#113f23]'><a href="/about"> About</a></li>
              <li className='px-[1.5rem] py-[2.5rem] border-t-[0.8rem] border-transparent tracking-wider transition-all hover:border-[#113f23]'><a href="/service"> Services</a></li>
              <li className='px-[1.5rem] py-[2.5rem] border-t-[0.8rem] border-transparent tracking-wider transition-all hover:border-[#113f23]'><a href="/products">Products</a></li>
              <li className='px-[1.5rem] py-[2.5rem] border-t-[0.8rem] border-transparent tracking-wider transition-all hover:border-[#113f23]'><a href="contact">Contact</a></li>
                   
                </ul>
                <motion.button initial={{scale:1}}
                 whileHover={{scale:0.9,transition:{duration:1,type:'spring'}}} className='px-[1rem] max-xl:hidden bg-[#00996d] mt-[0.7rem] h-[2rem]  flex gap-3 justify-center items-center border-0 py-[0.3rem] rounded-l-full rounded-r-full'>
                <BiSolidPhoneCall/> <span className='text-sm'>
                    
                    1234567890
                    </span> 
                    </motion.button>
            </div>
        </div>
      </div>
        <div  className='absolute xl:top-[40%] max-xl:top-[30%] z-20 w-full h-full text-white xl:left-[12%] max-xl:left-[5%] xl:w-[45%] max-xl:w-[25rem] max-sm:w-[93%]'>
            <div className='flex flex-col md:gap-10 gap-5'>
            <h1  className="xl:text-[68px] max-xl:text-[50px] max-xl:leading-[60px] max-md:text-[40px]  xl:leading-[73px] max-md:[50px] font-bold">Indoor  Farming Solutions</h1>
            <p className='xl:ml-[6rem]  xl:w-[70%] text-lg tracking-wider'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nam placeat.</p>
            </div>
        </div>
      <motion.img style={{
          y: y // adjust the multiplier to control the movement speed
        }} src={require('../Assets/banner1.png')} alt=""   className='banner max-lg:hidden absolute bottom-[-100px] max-w-[859px] right-[-210px] z-20 w-[830px]'/>
   <div id="myNav" className="overlay z-40">
  <div className="closebtn text-white text-xl" onClick={closeNav}>x</div>
  <div className="overlay-content ml-[1rem]">
    <a href="/" className='border-l-[7px] border-[#204916]  mb-[20px] w-[15rem] pl-[1rem]' style={{paddingLeft: "2rem"}}>Home</a>
    <a href="/about"  className='border-l-[7px] border-transparent hover:border-[#204916]  mb-[20px] w-[15rem] pl-[1rem]' style={{paddingLeft: "2rem"}}>About</a>
    <a href="/service"  className='border-l-[7px] border-transparent hover:border-[#204916]  mb-[20px] w-[15rem] pl-[1rem]' style={{paddingLeft: "2rem"}}>Services</a>
    <a href="/contact" className='border-l-[7px] border-transparent hover:border-[#204916]  mb-[20px] w-[15rem] pl-[1rem]' style={{paddingLeft: "2rem"}}>Contact</a>
  </div>
</div>
    </div>
    
  )
}
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nam placeat voluptatum? Aliquid expedita atque vero iusto laboriosam, et hic labore ipsa autem nam eaque eligendi animi non id placeat?
