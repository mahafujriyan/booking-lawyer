import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router';
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-[#0F0F0F] text-base-content rounded p-10">
         <div className='flex gap-2 p-1'>
        <div>
            <img className='' src="/asset/logo.png" alt="" />
        </div>
        <div>
            <h1 className='text-[20px] font-bold text-[#FFFFFF] '>Law.BD</h1>
        </div>

    </div>
        <nav className="text-white grid grid-flow-col gap-4">
          <a className="link link-hover">Home</a>
          <a className="link link-hover">My-Bookings</a>
          <a className="link link-hover">Blogs</a>
          <a className="link link-hover">Contact Us</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4 font-bold text-white">
          <Link><FaFacebookSquare /></Link>
          <Link><FaInstagram /></Link>
          <Link><FaXTwitter /></Link>
          <Link><FaYoutube /></Link>
           
           
          </div>
        </nav>
       
      </footer>
    );
};

export default Footer;