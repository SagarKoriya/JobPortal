import React from "react";
//import icons 
import {AiFillInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'

const Footer = () =>{
    return(
        <div className="footer p-[5rem] mb-4 bg-blueColor rounded-[10px] gap-8 grid grid-cols-5 m-auto items-start justify-center">
            
            <div>
                <div className="logoDiv">
                    <h1 className="logo text-[25px] text-white pb-[1.5rem]"><strong>Job</strong>Search</h1>
                </div>
                <p className="text-white pb-[13px] opacity-70 leading-7">this is footer text.... this is footer text.... this is footer text.... this is footer text.... this is footer text....</p>
            </div>

            <div className="grid">
                <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white ">Company</span>
                <div className="grid gap-3">
                    <li className="text-white opacity-[.7] hover:opacity-[1]">About Us</li>
                    <li className="text-white opacity-[.7] hover:opacity-[1]">Features</li>
                    <li className="text-white opacity-[.7] hover:opacity-[1]">News</li>
                    <li className="text-white opacity-[.7] hover:opacity-[1]">FAQ</li>
                </div>
            </div>

            <div className="grid">
                <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white ">Company</span>
                <div className="grid gap-3">
                    <li className="text-white opacity-[.7] hover:opacity-[1]">About Us</li>
                    <li className="text-white opacity-[.7] hover:opacity-[1]">Features</li>
                    <li className="text-white opacity-[.7] hover:opacity-[1]">News</li>
                    <li className="text-white opacity-[.7] hover:opacity-[1]">FAQ</li>
                </div>
            </div>

            <div className="grid">
                <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white ">Company</span>
                <div className="grid gap-3">
                    <li className="text-white opacity-[.7] hover:opacity-[1]">About Us</li>
                    <li className="text-white opacity-[.7] hover:opacity-[1]">Features</li>
                    <li className="text-white opacity-[.7] hover:opacity-[1]">News</li>
                    <li className="text-white opacity-[.7] hover:opacity-[1]">FAQ</li>
                </div>
            </div>

            <div className="grid">
                <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white ">Contact Us</span>
                <div>
                    <small className="text-[14px] text-white">abc.xyz@gmail.com</small>
                    <div className="icons flex gap-4 py-[1rem]">
                        <AiFillInstagram className="bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor"/>
                        <BsFacebook className="bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor"/>
                        <AiOutlineTwitter className="bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor"/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;