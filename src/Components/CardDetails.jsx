import React, { useState } from 'react';

const CardDetails = ({d,card, setCard}) => {
  const [clickedButton, setClickedButton] =useState(false);
  const handleButton=()=>{

    setCard([...card, d]);
    setClickedButton(true);
  }
  return (
    <div

             className="relative rounded-xl p-6 shadow-md bg-white">
              <div className={`py-1 px-3 rounded-4xl text-sm absolute right-3 top-3 ${d.tag=='Best Seller'? "bg-amber-200 text-amber-400" : 'bg-green-200 text-green-500'}`}>
                {d.tag}
              </div>
                <img src={d.image} alt="" />
            <h3 className="text-xl font-semibold mt-3">
              {d.name}
            </h3>
            <p className="text-sm mb-4">{d.description}</p>

            <div className="text-3xl font-bold mb-6">
              {d.price}
              <span className="text-xl font-semibold mt-3"> /month</span>
            </div>

            <ul className="text-sm  flex-1 space-y-2 mb-6">
              {d.features.map((f, i) => (
                <li  key={i}>

                  <svg xmlns="http://www.w3.org/2000/svg" className="size-6 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  {f}</li>

              ))}
            </ul>
            <button type='button' onClick={()=>handleButton()} className={`btn w-full rounded-4xl text-white ${clickedButton==true? 'bg-green-500' :'bg-linear-to-r from-blue-600 to-purple-600'} `}>
              {clickedButton== true ? 'Added to Card' :'Bye Now'}</button>
          </div>
  );
};

export default CardDetails;
