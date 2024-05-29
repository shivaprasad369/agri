import React from 'react'
import data from '../constants/Product'
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import { Link } from 'react-router-dom';
export default function Related({id,type}) {
    const datas= data.filter((data)=>data.id!==id);
    const types= datas.filter((data)=>data.type===type);
    const Related=types.filter((data)=>data.id!==id)
    // console.log(Related)
    // console.log(type)
  return (
    <div className='mt-[3rem]'>
        <h1 className='text-center text-[38px] font-[700] leading-[55px] tracking-wider text-green-700'>Related products</h1>
        <div>
            <div>
            {Related && (
            <div className="flex flex-wrap justify-center items-center gap-5 mt-[2rem]">
              {Related?.map((data, index) => (
              <Link to={`/product-details/${data?.id}`}>
              <Card sx={{ maxWidth: 345 }}>
              <Link to={`/product-details/${data.id}`}> <CardMedia
                    sx={{ height: 240, width: 345 }}
                    image={data.image}
                    title={data?.name}
                  /></Link>
                  <CardContent>
                    <Typography
                      sx={{
                        color: "#00996d",
                        cursor: "pointer",
                        fontWeight: 600,
                      }}
                      gutterBottom
                      variant="h6"
                      component="div"
                    >
                      {data?.name}
                    </Typography>
                    <Typography
                      sx={{ color: "#00996d" }}
                      gutterBottom
                      variant="h7"
                      component="div"
                    >
                      Rs.{data?.price}
                    </Typography>
                  </CardContent>
                </Card>
                </Link>
              ))}
            </div>
          )}
            </div>
        </div>
     
    </div>
  )
}
