
// import { ImGithub } from "react-icons/im";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaYoutube,
//   FaHome,
// } from "react-icons/fa";
// import { MdLocationOn } from "react-icons/md";
// import { BsPersonFill, BsPaypal } from "react-icons/bs";


// import { logoblack,paymentLogo } from "../assets";

// const Footer = () => {
//   return (
//     <div className="bg-yellow-900 text-[#949494] py-20 font-titleFont">
//        <div className="max-w-screen-xl mx-auto grid grid-cols-4">
//         <div className="flex flex-col gap-7">
//           <img className="w-32" src={logoblack} alt="logoblack" />
//           <p className="text-white text-sm tracking-wide">© EV.com</p>
//           <img className="w-56" src={paymentLogo} alt="paymentLogo" />
//           <div className="flex gap-5 text-lg text-gray-400">
//             <ImGithub className="hover:text-white duration-300 cursor-pointer" />
//             <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
//             <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
//             <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
//             <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
//           </div>
//         </div>
//         <div>
//           <h2 className="text-2xl font-semibold text-white mb-4">locate us</h2>
//           <div className="text-base flex flex-col gap-2">
//             <p>Mr. Monu Pal</p>
//             <p>Mobile: 00991 0867168</p>
//             <p>Phone: 00987 1467341</p>
//             <p>e-mail: EvolveMart@gmail.com</p>
//           </div>
//         </div>
//         <div>
//           <h2 className="text-2xl font-semibold text-white mb-4">profile</h2>
//           <div className="text-base flex flex-col gap-2">
//             <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
//               <span className="text-lg">
//                 <BsPersonFill />
//               </span>
//               my account
//             </p>
//             <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
//               <span className="text-lg">
//                 <BsPaypal />
//               </span>
//               checkout
//             </p>
//             <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
//               <span className="text-lg">
//                 <FaHome />
//               </span>
//               order tracking
//             </p>
//             <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
//               <span className="text-lg">
//                 <MdLocationOn />
//               </span>
//               help & support
//             </p>
//           </div>
//         </div>
//         <div className="flex flex-col justify-center">
//           <input
//             className="bg-transparent border px-4 py-2 text-sm"
//             type="text"
//             placeholder="e-mail"
//           />
//           <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">
//             Subscribe
//           </button>
//         </div>
//       </div> 
//       </div>
    
//   );
// };

// export default Footer;



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
        <div className="flex flex-col gap-7 items-center md:items-start">
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
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">locate us</h2>
          <div className="text-base flex flex-col gap-2">
            <p>Mr. Monu Pal</p>
            <p>Mobile: 00991 0867168</p>
            <p>Phone: 00987 1467341</p>
            <p>e-mail: EvolveMart@gmail.com</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">profile</h2>
          <div className="text-base flex flex-col gap-2">
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <BsPersonFill />
              </span>
              my account
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <BsPaypal />
              </span>
              checkout
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <FaHome />
              </span>
              order tracking
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <MdLocationOn />
              </span>
              help & support
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center md:items-start">
          <input
            className="bg-transparent border px-4 py-2 text-sm"
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
