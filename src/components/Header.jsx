
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { useState, useEffect } from "react";
// import { HiMenu, HiX } from "react-icons/hi";
// import { cartImg, logowhite } from "../assets/index";

// function Header() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const productData = useSelector((state) => state.hero.productData);
//   const userInfo = useSelector((state) => state.hero.userInfo);

//   // Debugging the userInfo object
//   useEffect(() => {
//     console.log("UserInfo from Redux: ", userInfo);
//   }, [userInfo]);

//   return (
//     <div className="w-full h-20 mt-5 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
//       <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between px-4 md:px-8">
//         <Link to="/">
//           <div>
//             <img className="w-22 h-10" src={logowhite} alt="logo" />
//           </div>
//         </Link>
//         <div className="flex items-center gap-4 md:gap-8">
//           <ul className="hidden md:flex items-center gap-4 md:gap-8">
//              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
//              <Link to="/">Home</Link>
//              </li>
//              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
//                <Link to="/contact">Contact</Link>
//              </li>
//              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
//                <Link to="/blog">Blog</Link>
//              </li>
//           </ul>
//           <button
//             className="md:hidden"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             {isMobileMenuOpen ? (
//               <HiX className="w-6 h-6" />
//             ) : (
//               <HiMenu className="w-6 h-6" />
//             )}
//           </button>
//           <ul
//             className={`${
//               isMobileMenuOpen ? "flex" : "hidden"
//             } flex-col items-center gap-4 md:hidden bg-white absolute top-16 left-0 w-full border-b-[1px] border-b-gray-800 pb-4`}
//           >
//             <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
//              <Link to="/">Home</Link>
//              </li>
    
//              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
//               <Link to="/contact">Contact</Link>
//             </li>
//             <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
//               <Link to="/blog">Blog</Link>
//             </li>
//           </ul>
//           <Link to="/cart">
//             <div className="relative">
//               <img className="w-6" src={cartImg} alt="cartImg" />
//               <span className="absolute w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold font-titleFont">
//                 {productData.length}
//               </span>
//             </div>
//           </Link>
//           <Link to="/login">
//             <img
//               className="w-8 h-8 rounded-full"
//               src={
//                 userInfo && userInfo.image
//                   ? userInfo.image
//                   : "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//               }
//               alt="User"
//             />
//           </Link>
//           {userInfo && (
//             <p className="text-base font-titleFont font-semibold underline underline-offset-2">
//               {userInfo.name}
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;


import { ImGithub } from "react-icons/im";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";

import { logoblack, paymentLogo } from "../assets";

const Footer = () => {
  return (
    <div className="bg-yellow-900 text-[#949494] py-20 font-titleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col gap-7 items-center md:items-start text-center md:text-left">
          <img className="w-32" src={logoblack} alt="logoblack" />
          <p className="text-white text-sm tracking-wide">© EV.com</p>
          <img className="w-56" src={paymentLogo} alt="paymentLogo" />
          <div className="flex gap-5 text-lg text-gray-400">
            <ImGithub className="hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
            <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold text-white mb-4">Locate Us</h2>
          <div className="text-base flex flex-col gap-2">
            <p>Mr. Monu Pal</p>
            <p>Mobile: 00991 0867168</p>
            <p>Phone: 00987 1467341</p>
            <p>e-mail: EvolveMart@gmail.com</p>
          </div>
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold text-white mb-4">Profile</h2>
          <div className="text-base flex flex-col gap-2">
            <p className="flex items-center justify-center md:justify-start gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <BsPersonFill />
              </span>
              My Account
            </p>
            <p className="flex items-center justify-center md:justify-start gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <BsPaypal />
              </span>
              Checkout
            </p>
            <p className="flex items-center justify-center md:justify-start gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <FaHome />
              </span>
              Order Tracking
            </p>
            <p className="flex items-center justify-center md:justify-start gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <MdLocationOn />
              </span>
              Help & Support
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <input
            className="bg-transparent border px-4 py-2 text-sm mb-4"
            type="text"
            placeholder="e-mail"
          />
          <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">
            Subscribe
          </button>
        </div>
      </div> 
    </div>
  );
};

export default Footer;
