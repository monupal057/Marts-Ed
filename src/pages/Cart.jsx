//import React from 'react'
import { ToastContainer,toast } from "react-toastify";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux"
import { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";



const Cart = () => {
   const productData = useSelector((state) => state.hero.productData);
   const userInfo = useSelector((state) => state.hero.userInfo);
   const [totalAmt, setTotalAmt] = useState("");
   const [payNow, setPayNow] = useState(false);
   

   useEffect(()=> {
    let price = 0;
    productData.map((item)=>{
      price += item.price * item.quantity;
      return price
    });
    setTotalAmt(price.toFixed(2));
   }, [productData])
   const handleCheckout=()=>{
    if(userInfo){
     setPayNow(true)
    } else {
      toast.error("please sign im to Checkout")
    }
   }
  //console.log(productData);
  return (
    <div>
      <img
       className="w-full h-60 object-cover" 
      src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
       alt="cartImg" 
       />
       <div className="max-w-screen-xl mx-auto py-20 flex">
        <CartItem/>
        <div className=" w-1/3 bg-[#fafafa] py-6 px-4">
          <div className=" flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
            <h2 className="text-2xl font-medium">cart totals</h2>
            <p className="flex items-center gap-4 text-base">
              subtotal{" "}
              <span className="font-titleFont font-bold text-lg">$ {totalAmt}</span>
            </p>
            <p className="flex items-start gap-4 text-base"> 
            Shipping{" "} 
            <span>
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, atque? */}
              Free Shipping 
            </span>
            </p>
          </div>
          <p className=" font-titleFont font-semibold flex justify-between mt-6">
            Total <span className="text-xl font-bold">$ {totalAmt}</span>
          </p>
          <button onClick={handleCheckout} className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300">
            proceed to checkout
            </button>
        </div>
        {
          payNow && 
          <div className="w-full mt-6 flex items-center justify-center" >
             <StripeCheckout
                  stripeKey="pk_test_51PU1buP6tvTsNGefzKDgMerawrF3lfJ61gXXDK9UEyf9sUp4BE2uV0Mc8KFSdqTMRx4CY4xR23ptM3wE5nNcFnpw00VAAotA3P"
                  name="EvolveMart"
                  amount={totalAmt * 100}
                  label="Pay to EvolveMart"
                  description={`Your Payment amount is $${totalAmt}`}
                  //token={payment}
                  email={userInfo.email}
                />
            </div>
        }
       </div>
       <ToastContainer 
       position="top-left"
       autoClose={3000}
       hideProgressBar={false}
       newestOnTop={false}
       closeOnClick rtl={false}
       pauseOnFocusLoss draggable pauseOnHover theme="dark"
       />
    </div>
  )
}

export default Cart