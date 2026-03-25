import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({ pricing }) => {
    // console.log(pricing)

    const {name, price, description, features} = pricing;
    return (
        <div className='flex flex-col border bg-gray-700 rounded-lg p-4 h-full'>
            
            {/* Header */}
            <div>
                <h1 className='text-2xl'>{name}</h1>
                <h4>{price}</h4>
            </div>

            {/* Body (this will grow) */}
            <div className='bg-gray-800 p-4 rounded-md mt-3 flex-1'>
                <p>{description}</p>
                {
                    features.map((feature, index) => (
                        <PricingFeature key={index} feature={feature} />
                    ))
                }
            </div>

            {/* Button stays at bottom */}
            <button className="btn w-full mt-3">
                Subscribe
            </button>
        </div>
    );
};

export default PricingCard;