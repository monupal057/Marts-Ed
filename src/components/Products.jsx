//import React from "react";
import ProductsCard from "./ProductsCard";

const Products = ({ products }) => {
  
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
          shopping everyday
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-[700px] text-gray-600 text-center">
        Experience the excitement of shopping for clothing every day with our website!
         Browse the latest trends in fashion, from stylish apparel to must-have footwear.
          Enjoy exclusive deals and new arrivals daily.
        </p>
      </div>
      {/* =================== Products Start here ================= */}
      <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10">
        {products.map((item) => (
          <ProductsCard Key={item._id} product={item} />
        ))

        }
      </div>
      {/* <div className="max-w-screen-xl mx-auto grid grid-cols-4 gap-10 py-10">
        {products.map((item) => (
          <ProductsCard key={item._id} product={item} />
        ))}
      </div> */}
      {/* =================== Products End here =================== */}
    </div>
  );
};

export default Products;