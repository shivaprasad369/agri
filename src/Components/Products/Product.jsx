import React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import data from "../constants/Product.jsx";
import { Link } from "react-router-dom";
export default function Product() {
 

  const commercial = data.filter((data) => data.type === "commercial");
  const commercial1 = data.filter((data) => data.type === "commercial1");
  console.log(commercial);
  console.log(commercial1);
  return (
    <div className="flex w-full px-[10%] justify-center items-center  overflow-hidden flex-col pb-[3rem] mb-[150px]">
      <div className="max-w-[1320px] flex justify-center items-center  flex-col ">
        <h1 className="text-[48px] leading-[55px] flex justify-center items-center font-[700] text-[#00996d]">
          Our Product
        </h1>
        <div className="my-[2rem]">
          <h2 className="text-[22px] text-black cursor-pointer justify-start hover:text-[#00996d] items-start text-left leading-[37px] font-[700]">
            Commercial products
          </h2>
        </div>
        <div>
         
            <div className="flex flex-wrap justify-center items-center gap-5 mt-[2rem]">
              {commercial?.map((data, index) => (
                <Link to={`/product-details/${data?.id}`}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 240, width: 345 }}
                    image={data.image}
                    title={data?.name}
                  />
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
          
        </div>
        <div className="my-[2rem] mt-[3rem] w-fit">
          <h2 className="text-[22px]  text-black cursor-pointer justify-start hover:text-[#00996d] items-start text-left leading-[37px] font-[700]">
            House products
          </h2>
        </div>
        <div>
        
            <div className="flex flex-wrap justify-center items-center gap-5 mt-[2rem]">
              {commercial1?.map((data, index) => (
               <Link to={`/product-details/${data?.id}`}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 240, width: 345 }}
                    image={data.image}
                    title={data?.name}
                  />
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
  
        </div>
      </div>
    </div>
  );
}
