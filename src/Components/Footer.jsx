import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div>
          <footer className="bg-[#081225] text-gray-300 px-6 py-14">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 lg:grid-cols-6 gap-10">


        <div className="md:col-span-2">
          <h3 className="text-white text-xl font-semibold mb-3">DigiTools</h3>
          <p className="text-sm opacity-80">
            Premium digital tools for creators,<br/> professionals, and businesses.<br/>
            Work smarter with our suite of powerful tools.
          </p>
        </div>


        <div>
          <h4 className="text-white mb-3 font-medium">Product</h4>
          <ul className="space-y-2 text-sm">
            <li>Features</li>
            <li>Pricing</li>
            <li>Templates</li>
            <li>Integrations</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white mb-3 font-medium">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white mb-3 font-medium">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li>Documentation</li>
            <li>Help Center</li>
            <li>Community</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='flex flex-col'>
        <p>Social Links</p>
        <div className='flex py-3 flex-row gap-2'>
           {/* <img className='bg-slate-200 rounded-full py-3 px-3 mt-3 ' src={instra} alt="" /> */}
            <div className='p-2 rounded-[50%] bg-white'>
              <FaXTwitter className=' text-black '></FaXTwitter>
            </div>
           <div className='p-2 rounded-[50%] bg-white'>
            <FaFacebook className='text-black'></FaFacebook>
           </div>
           <div className='p-2 rounded-[50%] bg-white'>
            <FaInstagram className='text-black'></FaInstagram>
           </div>
             {/* <img className='bg-slate-200 rounded-full py-3 px-3 mt-3 ' src={x} alt="" /> */}
        </div>
      </div>
      </div>


      <div className="max-w-6xl mx-auto mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© 2026 Digitools. All rights reserved.</p>

        <div className="flex gap-4 mt-3 md:mt-0">
          <span className="hover:text-white cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer">Terms of Service</span>
          <span className="hover:text-white cursor-pointer">Cookies</span>
        </div>

      </div>

    </footer>
        </div>
    );
};

export default Footer;
