// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { cartImg,logowhite } from "../assets/index";


// function Header() {
//   const productData = useSelector((state) => state.hero.productData);
//   const userInfo = useSelector((state) => state.hero.userInfo);
// console.log(userInfo)
//   return (
//     <div className="w-full h-20 mt-5 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
//       <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
//         <Link to="/">
//         <div>
//           <img className="w-22 h-10" src={logowhite} alt="logo" />
//         </div>
//         </Link>
//         <div className="flex items-center gap-8">
//           <ul className="flex items-center gap-8">
//             <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Home</li>
//             <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Pages</li>
//             <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Shop</li>
//             <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Element</li>
//             <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Blog</li>
//           </ul>
//           <Link to="/cart">
//             <div className="relative">
//               <img className="w-6" src={cartImg} alt="cartImg" />
//               <span className="absolute w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold font-titleFont">
//                 {productData.length}
//               </span>
//             </div> 
//             </Link>
//             <Link to="/login">
//             <img
//              className="w-8 h-8 rounded-full"
//           src={
//             userInfo ?
//             userInfo.image
//             : "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//           }
//            />
//            {/* {console.log(userInfo.image)}     */}
//              </Link>
//              {userInfo && (
//             <p className="text-base font-titleFont font-semibold underline underline-offset-2">
//               {userInfo.name}
//             </p>
//           )}
//           </div>
//         </div>

//       </div>
      
//   )
// }

// export default Header


import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { cartImg, logowhite } from "../assets/index";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const productData = useSelector((state) => state.hero.productData);
  const userInfo = useSelector((state) => state.hero.userInfo);
  console.log(userInfo);

  return (
    <div className="w-full h-20 mt-5 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between px-4 md:px-8">
        <Link to="/">
          <div>
            <img className="w-22 h-10" src={logowhite} alt="logo" />
          </div>
        </Link>
        <div className="flex items-center gap-4 md:gap-8">
          <ul className="hidden md:flex items-center gap-4 md:gap-8">
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Home
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Pages
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Shop
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Element
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Blog
            </li>
          </ul>
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
          <ul
            className={`${
              isMobileMenuOpen ? "flex" : "hidden"
            } flex-col items-center gap-4 md:hidden bg-white absolute top-16 left-0 w-full border-b-[1px] border-b-gray-800 pb-4`}
          >
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Home
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Pages
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Shop
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Element
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Blog
            </li>
          </ul>
          <Link to="/cart">
            <div className="relative">
              <img className="w-6" src={cartImg} alt="cartImg" />
              <span className="absolute w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold font-titleFont">
                {productData.length}
              </span>
            </div>
          </Link>
          <Link to="/login">
            <img
              className="w-8 h-8 rounded-full"
              src={
                userInfo
                  ? userInfo.image
                  : "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
            />
          </Link>
          {userInfo && (
            <p className="text-base font-titleFont font-semibold underline underline-offset-2">
              {userInfo.name}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
