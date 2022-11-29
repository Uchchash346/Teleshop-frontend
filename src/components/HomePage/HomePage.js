import React from 'react';
import Banner from './Banner';
import EmergencyContact from './EmergencyContact';
import LatestDevices from './LatestDevices';
import OfferBanner from './OfferBanner';
import OfferCardSection from './OfferCardSection';
import OptionCategory from './OptionCategory';
import QRCodeSection from './QRCodeSection';
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
            <OfferBanner />
            <QRCodeSection />
        </>
    );
};

export default HomePage;