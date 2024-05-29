import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../constants/ProductDetail'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

import 'swiper/css/thumbs';

// import './styles.css';

// import required modules
import { FreeMode,  Thumbs } from 'swiper/modules';
import { useState } from 'react';
import Related from './Related';
import Header from '../Products/Header';
import Footer from '../Footer';
export default function ProductDetails() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
   const {id}=  useParams()

   const datas=data?.filter((dt)=>dt.id===Number(id));
   console.log(datas)
  return (
    <>
    <Header/>
    <div className='w-[100%] lg:px-[10%] max-lg:px-[3%] mt-[2rem] justify-center items-center mb-[180px]'> 
       <div className='lg:flex max-lf:flex-col gap-10 w-[100%]'>
        <div className='lg:w-[40%] h-[30rem]'>
        <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
         
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
        modules={[FreeMode, Thumbs]}
        className="mySwiper2 h-[20rem] "
      >
        <SwiperSlide  >
          <img src={datas[0]?.image1} alt='product' className='w-[100%] h-[100%] object-cover'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={datas[0]?.image2} alt='product' className='w-[100%] h-[100%] object-cover'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={datas[0]?.image3} alt='product' className='w-[100%] h-[100%] object-cover' />
        </SwiperSlide>
        
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="mySwiper w-[100%] h-[8.6rem]"
      >
        <SwiperSlide className='w-[100%] h-[100%] overflow-hidden object-cover'>
          <img src={datas[0]?.image1} alt='product' className='w-[100%] h-[100%] object-cover'/>
        </SwiperSlide>
        <SwiperSlide className='w-[100%] h-[100%] object-cover'>
          <img src={datas[0]?.image2} alt='product' className='w-[100%] h-[100%] object-cover' />
        </SwiperSlide>
        <SwiperSlide className='w-[100%] h-[100%] object-cover'>
          <img src={datas[0]?.image3} alt='product'  className='w-[100%] h-[100%] object-cover'/>
        </SwiperSlide>
      </Swiper>
        </div>
        <div className=';g:w-[50%]'>
            <h1 className='text-[22px] hover:text-green-700 cursor-pointer tracking-wider font-[700] leading-[38px]'>{datas[0]?.heading}</h1>
            <h2 className='text-[18px]  leading-[35px] font-[700] text-green-600'> Rs.{datas[0]?.price}</h2>
            <div className='mt-[1.5rem] w-[90%] text-[18px] font-[400] leading-[35px]'>
                <p>{datas[0]?.content}</p>
            </div>
        </div>
       </div>

       <Related id={Number(id)} type={datas[0]?.type}/>
    </div>
    <Footer/>
    </>
  )
}
