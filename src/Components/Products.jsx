import React, { useState } from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import data from "./constants/Product.jsx";
import { Link } from "react-router-dom";
export default function Products() {
  const [products, setProducts] = useState(true);

  const commercial = data.filter((data) => data.type === "commercial");
  const commercial1 = data.filter((data) => data.type === "commercial1");
  console.log(commercial);
  console.log(commercial1);
  return (
    <div className="md:px-[%] px-[3%] flex flex-col justify-center items-center py-[3rem]">
      <div className="text-[48px] leading-[55px] text-[#00996d] font-[700]">
        <h1>Our Products</h1>
      </div>
      <div className="flex gap-10 mt-[3rem]">
        <button
          className={` ${
            products
              ? " bg-[#00996d] border-0 text-white"
              : "bg-white border-[2px] text-[#00996d]"
          }  px-[1.3rem] py-1 font-semibold `}
          onClick={() => setProducts(true)}
        >
          Commercial
        </button>
        <button
          className={` ${
            !products
              ? " bg-[#00996d] border-0 text-white"
              : "bg-white border-[2px] text-[#00996d]"
          }  px-[1.3rem] py-1 font-semibold `}
          onClick={() => setProducts(false)}
        >
          House
        </button>
      </div>
      <div>
        {products && (
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
        )}
        {!products && (
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
        )}
      </div>
    </div>
  );
}
