import { useSelector } from "react-redux";
import { MdOutlineClose } from "react-icons/md";
//import { HiOutlineArrowLeft } from "react-icons/hi";

const CartItem = () => {
  const productData = useSelector((state) => state.hero.productData);
  console.log(productData)
  return (
    <div className="w-2/3 pr-10">
      <div className="w-full">
        <h2 className="font-titleFont text-2xl">Shopping cart</h2>
      </div>
      <div className=" bg-black">
        {productData.map((item) => {
          console.log("hello")
          return (
            <div
              key={item._id}
              className="flex items-center justify-between gap-6 mt-6"
            >
              <div>
                
                {/* <MdOutlineClose className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300" /> */}
                {/* <img src={item.image} alt="productImg" /> */}
                {/* console.log(item.image) */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CartItem;
