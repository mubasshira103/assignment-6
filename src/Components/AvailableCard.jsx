import React from 'react';
import CardDetails from './CardDetails';

const AvailableCard = ({data, card, setCard}) => {
  return (
    <div className="grid  my-10 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 text-left">
        {data.map((d, index) =><CardDetails card={card} setCard={setCard} key={index} d={d}></CardDetails>)}
      </div>
  );
};

export default AvailableCard;
