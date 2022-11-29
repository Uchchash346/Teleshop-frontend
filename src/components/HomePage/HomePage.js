import React from 'react';
import Banner from './Banner';
import EmergencyContact from './EmergencyContact';
import LatestDevices from './LatestDevices';
import OfferCardSection from './OfferCardSection';
import OptionCategory from './OptionCategory';
import VideoSection from './VideoSection';

const HomePage = () => {
    return (
        <>
            <Banner />
            <OptionCategory />
            <OfferCardSection />
            <VideoSection />
            <EmergencyContact />
            <LatestDevices />
        </>
    );
};

export default HomePage;