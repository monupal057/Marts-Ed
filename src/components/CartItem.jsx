
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { decrementQuantity, deleteItem, incrementQuantity, resetCart } from "../redux/heroSlice";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const CartItem = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.hero.productData);

  return (
    <div className="w-full md:w-2/3 pr-4 md:pr-10 mx-auto">
      <div className="w-full">
        <h2 className="font-titleFont text-2xl">Shopping cart</h2>
      </div>
      <div>
        {productData.length > 0 ? (
          productData.map((item) => (
            <div
              key={item._id}
              className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 mt-6"
            >
              <div className="flex items-center gap-2 w-full md:w-auto">
                <MdOutlineClose
                  onClick={() => {
                    dispatch(deleteItem(item._id));
                    toast.error(`${item.title} is removed`);
                  }}
                  className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300"
                />
                <img
                  className="w-20 h-20 md:w-32 md:h-32 object-cover"
                  src={item.image}
                  alt="productImg"
                />
              </div>
              <h2 className="w-full md:w-52 text-center md:text-left">{item.title}</h2>
              <p className="w-20 md:w-10 text-center md:text-left">${item.price}</p>
              <div className="w-full md:w-52 flex items-center justify-between text-gray-500 gap-4 border p-2 md:p-3">
                <p className="text-sm">Quantity</p>
                <div className="flex items-center gap-4 text-sm font-semibold">
                  <span
                    onClick={() => dispatch(decrementQuantity(item._id))}
                    className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                  >
                    -
                  </span>
                  {item.quantity}
                  <span
                    onClick={() => dispatch(incrementQuantity(item._id))}
                    className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                  >
                    +
                  </span>
                </div>
              </div>
              <p className="w-20 md:w-14 text-center md:text-left">${item.quantity * item.price}</p>
            </div>
          ))
        ) : (
          <p className="text-center md:text-left">Your cart is empty</p>
        )}
      </div>
      <button
        onClick={() => {
          dispatch(resetCart());
          toast.error("Your Cart is Empty");
        }}
        className="bg-red-500 text-white mt-8 mx-auto md:ml-7 py-1 px-6 hover:bg-red-800 duration-300 block md:inline-block"
      >
        Reset Cart
      </button>
      <Link to="/" className="block mt-8 mx-auto md:ml-7">
        <button className="flex items-center gap-1 text-gray-400 hover:text-black duration-300">
          <span>
            <HiOutlineArrowLeft />
          </span>
          Go Shopping
        </button>
      </Link>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default CartItem;
