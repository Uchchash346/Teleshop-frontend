import React from 'react';
import demo_video from '../videos/video_demo.mp4'

const VideoSection = () => {
    return (
        <>
            <div class="flex h-96">
                <div class="w-1/3 bg-[#71BD44]">
                    <p className='py-auto'>Enjoy the best deals</p>
                </div>
                <div class="w-2/3">
                <video src={demo_video}controls />
                </div>
            </div>
        </>
    );
};

export default VideoSection;