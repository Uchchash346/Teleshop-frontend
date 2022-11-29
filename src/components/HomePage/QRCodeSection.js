import React from 'react';
import qrImage from '../images/qr_image/frame-removebg-preview.png';
const QRCodeSection = () => {
    return (
        <>
            <div className='bg-[#E8E8FC]'>
                <div className='container mx-auto pt-5'>
                    <p className='text-center text-4xl font-semibold'>One App for</p>
                    <p className='text-center text-4xl font-semibold'>everything Teleshop</p>
                    <p className='text-center text-xl text-[#71BD44] pt-2'>Scan the QR code, download Teleshop App, and enjoy all the Teleshop services in just one super app.</p>
                    <img className='mx-auto w-1/3 h-1/3' src={qrImage} alt="" />
                </div>
            </div>
        </>
    );
};

export default QRCodeSection;