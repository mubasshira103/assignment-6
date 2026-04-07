import React from 'react';
import userImage from '../assets/user.png'
import creatAccount from '../assets/package.png'
import rocket from '../assets/rocket.png'


const Steps = () => {
  return (
    <div className='my-20 px-4'>
            <h2 className='text-3xl md:text-4xl font-bold text-center'>Get Started in 3 Steps</h2>
            <h4 className='text-center mt-4 mb-10 text-gray-600'>Start using premium digital tools in minutes, not hours.</h4>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl mx-auto'>

                {/* Step 01 */}
                <div className='border border-amber-100 rounded-2xl p-8 relative flex flex-col items-center text-center shadow-sm'>
                    <span className='bg-purple-600 rounded-full px-3 py-2 absolute top-4 right-4 text-white text-sm font-bold'>01</span>
                    <div className='bg-slate-100 rounded-full p-6 mb-6 mt-4'>
                        <img className='w-14 h-14 object-contain' src={userImage} alt="User" />
                    </div>
                    <p className='text-2xl font-bold mb-4'>Create Account</p>
                    <p className='text-gray-600 leading-relaxed'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>

                {/* Step 02 */}
                <div className='border border-amber-100 rounded-2xl p-8 relative flex flex-col items-center text-center shadow-sm'>
                    <span className='bg-purple-600 rounded-full px-3 py-2 absolute top-4 right-4 text-white text-sm font-bold'>02</span>
                    <div className='bg-slate-100 rounded-full p-6 mb-6 mt-4'>
                        <img className='w-14 h-14 object-contain' src={creatAccount} alt="Account" />
                    </div>
                    <p className='text-2xl font-bold mb-4'>Choose Products</p>
                    <p className='text-gray-600 leading-relaxed'>Browse our catalog and select the tools that fit your needs.</p>
                </div>

                {/* Step 03 */}
                <div className='border border-amber-100 rounded-2xl p-8 relative flex flex-col items-center text-center shadow-sm'>
                    <span className='bg-purple-600 rounded-full px-3 py-2 absolute top-4 right-4 text-white text-sm font-bold'>03</span>
                    <div className='bg-slate-100 rounded-full p-5 mb-4 mt-4'>
                        <img className='w-14 h-14 object-contain' src={rocket} alt="Rocket" />
                    </div>
                    <p className='text-2xl font-bold mb-4'>Start Creating</p>
                    <p className='text-gray-600 leading-relaxed'>Download and start using your premium tools immediately.</p>
                </div>

            </div>
        </div>
  );
};

export default Steps;



