import React, { use, useState } from 'react';
import AvailableCard from './AvailableCard';
import SelectedCard from './SelectedCard';

const Premium = ({premiumData , card, setCard}) => {
  const data=use(premiumData)
  const [selectedType, setSelectedType]=useState("products")

  return (
    <div>
      <h2 className='text-3xl md:text-4xl font-bold text-center'>Premium Digital Tools</h2>
      <p className='text-center mt-4 mb-10 text-gray-600'>Choose from our curated collection of premium digital products designed <br />
        to boost your productivity and creativity.</p>
      <div className='text-center mt-8'>
            <button onClick={() =>setSelectedType("products")} className={`btn ${selectedType === "products" ? "text-white bg-linear-to-r from-blue-600 to-purple-600" :""} rounded-4xl `}>Products</button>
            <button onClick={() =>{setSelectedType("cart"); }} className={`btn  px-8 ${selectedType === "cart" ? "text-white bg-linear-to-r from-blue-600 to-purple-600" :""} border-t-neutral-50 rounded-4xl`}>Cart ({card.length}) </button>
      </div>
      {
        selectedType == "products" ? <AvailableCard card={card} setCard={setCard} data={data}></AvailableCard> : <SelectedCard card={card} setCard={setCard}></SelectedCard>
      }


    </div>
  );
};

export default Premium;
