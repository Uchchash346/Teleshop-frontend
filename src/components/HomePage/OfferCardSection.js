import React from 'react';

const OfferCardSection = () => {
    return (
        <>
            <div className='container mx-auto pt-5 max-w-7xl'>
                <div className='grid grid-cols-1 px-3 lg:grid-cols-3 md:grid-cols-3 gap-3'>
                    <div className="bg-white shadow-2xl rounded-lg mb-6 tracking-wide" >
                        <div className="md:flex-shrink-0">
                            <img src="https://teletalk.com.bd/storage/app/uploads/public/606/952/cb6/606952cb6fd53533586831.png" alt="mountains" className="w-full h-64 rounded-lg rounded-b-none" />
                        </div>
                        <div className="px-4 py-2 mt-2">
                            <h2 className="font-bold text-2xl text-[#71BD44] tracking-normal">Uninterrupted, ad-free music anytime, anywhere</h2>
                            <button href="/" className="text-[#71BD44] text-xl border-double border-4 border-[#71BD44] rounded-full w-32 mt-2">Click Here</button>

                        </div>
                    </div>
                    <div className="bg-white shadow-2xl rounded-lg mb-6 tracking-wide" >
                        <div className="md:flex-shrink-0">
                            <img src="https://teletalk.com.bd/storage/app/uploads/public/606/953/4a3/6069534a3891b260477842.jpg" alt="mountains" className="w-full h-64 rounded-lg rounded-b-none" />
                        </div>
                        <div className="px-4 py-2 mt-2">
                            <h2 className="font-bold text-2xl text-[#71BD44] tracking-normal">Get doctor's care on the go, round the clock</h2>
                            <button href="/" className="text-[#71BD44] text-xl border-double border-4 border-[#71BD44] rounded-full w-32 mt-2">Click Here</button>

                        </div>
                    </div>
                    <div className="bg-white shadow-2xl rounded-lg mb-6 tracking-wide" >
                        <div className="md:flex-shrink-0">
                            <img src="https://teletalk.com.bd/storage/app/uploads/public/606/953/b5c/606953b5c25c3950742306.png" alt="mountains" className="w-full h-64 rounded-lg rounded-b-none" />
                        </div>
                        <div className="px-4 py-2 mt-2">
                            <h2 className="font-bold text-2xl text-[#71BD44] tracking-normal">Experience the magical world of toys</h2>
                            <button href="/" className="text-[#71BD44] text-xl border-double border-4 border-[#71BD44] rounded-full w-32 mt-2">Click Here</button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OfferCardSection;