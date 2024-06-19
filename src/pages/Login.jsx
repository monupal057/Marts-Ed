//import React from 'react'
import { githubLogo, googleLogo } from "../assets"
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const Login = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth,provider).then((result)=> {
      const user = result.user;
      console.log(user);
    })
    .catch((error) => {
      console.log(error)
    })
    }

  return (
    <div className="w-full flex-col items-center justify-center gap-10 py-20">
      <div className="w-full flex items-center justify-center gap-10">
        <div onClick={handleGoogleLogin} className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300">
        <img  className="w-8" src={googleLogo} alt="googleLogo" />
        <span className="text-sm text-gray-900">Sign in with Google</span>
        </div>
        <button className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300">
            Sign Out
          </button>
      </div>
      
      <div className="w-full flex items-center justify-center gap-10">
        <div  className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300">
        <img  className="w-8" src={githubLogo} alt="githubLogo" />
        <span className="text-sm text-gray-900">Sign in with Google</span>
        </div>
        <button className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300">
            Sign Out
          </button>
      </div>
    </div>
  )
}

export default Login
