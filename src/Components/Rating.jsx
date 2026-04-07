import React from 'react';

const Rating = () => {
  return (

     <div className="bg-linear-to-r from-blue-700 to-purple-600 py-12 my-15 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-around items-center text-white space-y-8 md:space-y-0">

                {/* Active Users */}
                <div className="text-center md:border-r md:border-white/30 w-full">
                    <h2 className="text-3xl md:text-5xl font-bold">50K+</h2>
                    <p className="text-lg mt-2 opacity-90">Active Users</p>
                </div>

                {/* Premium Tools */}
                <div className="text-center md:border-r md:border-white/30 w-full">
                    <h2 className="text-3xl md:text-5xl font-bold">200+</h2>
                    <p className="text-lg mt-2 opacity-90">Premium Tools</p>
                </div>

                {/* Rating */}
                <div className="text-center w-full">
                    <h2 className="text-3xl md:text-5xl font-bold">4.9</h2>
                    <p className="text-lg mt-2 opacity-90">Rating</p>
                </div>

            </div>
        </div>
  );
};

export default Rating;





