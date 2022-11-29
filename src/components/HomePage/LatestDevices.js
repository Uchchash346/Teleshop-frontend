import React from 'react';
import '../../styles/styles.css';

const LatestDevices = () => {
    return (
        <>
            <p className='text-3xl text-[#71BD44] text-center font-bold p-5'>Latest and Trending Devices</p>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-2 mx-auto container max-w-6xl p-5">
                <div>
                    <div class="card">
                        <div class="imgBox">
                            <img src="https://www.corsair.com/corsairmedia/sys_master/productcontent/CH-9300011-NA-M65_PRO_RGB_BLK_04.png" alt="mouse corsair" class="mouse" />
                        </div>
                        <div class="contentBox">
                            <h3>Mouse Corsair M65</h3>
                            <h2 class="price">3000 ৳</h2>
                            <a href="/" class="buy">Buy Now</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card">
                        <div class="imgBox">
                            <img src="https://i.ibb.co/g4wPTgY/imagename-56-removebg-preview.png" alt="mouse corsair" class="mouse" />
                        </div>
                        <div class="contentBox">
                            <h3>Samsung Galaxy A30s</h3>
                            <h2 class="price">30000 ৳</h2>
                            <a href="/" class="buy">Buy Now</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card">
                        <div class="imgBox">
                            <img src="https://i.ibb.co/KFtGBJF/imagename-60-removebg-preview.png" alt="mouse corsair" class="mouse" />
                        </div>
                        <div class="contentBox">
                            <h3>Samsung Galaxy S10</h3>
                            <h2 class="price">35000 ৳</h2>
                            <a href="/" class="buy">Buy Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LatestDevices;