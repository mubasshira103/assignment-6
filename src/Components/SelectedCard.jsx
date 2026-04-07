import React from 'react';
import {  toast } from 'react-toastify';
import BannerImage from '../assets/products/shopping-cart.png'

const SelectedCard = ({card ,setCard}) => {
  const handleDeletedItem=(data)=>{
    const filteredData= card.filter((c) => c.id != data.id);
    setCard(filteredData)
    toast.warn('Item Deleted!!')

  }
  const total = card.reduce(
    (sum, item) => sum + item.price,
    0
  );
  const handleCheckout =()=>{
    setCard([]);
    toast.success("Payement Successfull!!");
  }


  return (
    <div className='w-10/12 mx-auto mt-10 bg-base-200 rounded-3xl shadow p-4'>

            <p className='font-bold text-2xl'>Your cart</p>


<div className="space-y-5 ">
        {card.length === 0 ? (

            <div className=" p-8 flex items-center justify-center flex-col ">
            <img className='h-8 w-8' src={BannerImage} alt=""></img>
            <p className='text-center font-medium pt-5'>Your cart is empty</p>

          </div>
        ) : (
          card.map((data) => {
            return (

              <div className='flex justify-between bg-amber-100 py-2 px-4 rounded-2xl'>
              <div key={data.id} className='flex flex-col-2 gap-4'>
              <div className=' flex justify-center items-center'>
              <img className='h-7 w-7'
              src={data.image}
              alt="" />
              </div>
              <div>
                <p>{data.name}</p>
                <p>${data.price}</p>
              </div>
              </div>
              <div className='text-red-700 flex justify-center  items-center'><button onClick={() =>handleDeletedItem(data)}>Remove</button></div>

              </div>
            );
          })
        )}
      </div>
     {
      !card.length=="0" && <div>
       <div className='flex justify-between bg-black rounded-3xl py-2 px-4  text-xl mt-5'>
        <h3 className='text-white'>Total:</h3>
          <h3 className='text-white'> ${total}</h3>
      </div>

      <button onClick={handleCheckout} className='py-2 bg-linear-to-r from-blue-600 to-purple-600 w-full h-10 text-white border-none rounded-4xl px-4 mt-5'>

        Proceed to Checkout
      </button>

        </div>
     }
     </div>
  );
};

export default SelectedCard;
