import React from 'react';
import demo_video from '../videos/video_demo.mp4'

const VideoSection = () => {
    return (
        <>
            <div class="flex h-96">
                <div class="relative w-1/2 bg-[#71BD44]">
                    <p className='absolute text-5xl top-1/3 left-1/4 text-white'>Enjoy the best deals with Teleshop</p>
                </div>
                <div class="w-1/2">
                    <video src={demo_video} controls autoPlay muted />
                </div>
            </div>
        </>
    );
};

export default VideoSection;