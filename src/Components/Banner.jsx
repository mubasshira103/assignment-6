import React from 'react';
import BannerImage from '../assets/banner.png'
import play from '../assets/play.png'
import group from '../assets/group-5.png'

const Banner = () => {
  return (
     <div className='w-11/12 mx-auto px-2 md:px-20 grid md:grid-cols-2 justify-between items-center  '>
          <div className='p-1 md:py-20'>
            <div className='flex gap-3 rounded-4xl justify-center items-center w-80 h-10 mb-5 bg-slate-200'>

                <img src={group} alt="" />
            <p className='pb-5 text-purple-600 font-medium pt-5'>New: AI-Powered Tools Available</p>
            </div>


            <h1 className='text-3xl md:text-4xl font-bold mb-4'>Supercharge Your<br/>Digital Workflow</h1>
            <p>Access premium AI tools, design assets, templates, and productivity<br/>
               software—all in one place. Start creating faster today.<br/>Explore Products</p>
               <div className='mt-5'>
                <button  className="btn btn-primary rounded-4xl bg-linear-to-r from-blue-600 to-purple-600 mr-5">Explore Products</button>
                <button  className="btn btn-neutral btn-outline rounded-4xl text-purple-600 border-purple-600"><img src={play}></img> Watch Demo</button>
               </div>
            </div>
          <div className='flex justify-end items-center'><img className='w-[350px]'  src={BannerImage} alt="" /></div>
        </div>
  );
};

export default Banner;
