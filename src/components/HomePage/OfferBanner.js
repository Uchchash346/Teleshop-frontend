import React from 'react';
import offerBanner from '../images/banner_images/offer-banner.jpg';

const OfferBanner = () => {
    return (
        <>
            <div className='py-5'>
                <img src={offerBanner} alt="" />
            </div>
        </>
    );
};

export default OfferBanner;