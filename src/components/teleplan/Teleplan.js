import React, { Fragment } from 'react';
import '../../styles/styles.css'

const Teleplan = () => {
    return (
        <Fragment>
            
            <div className='pt-5 flex flex-row justify-center items-center'>
                <div class="grid grid-cols-2 gap-4 w-6/12">
                    <div className='grid grid-rows-4 w-5/6'>
                        <div className='grid grid-cols-2 mt-5'>
                            <div className='w-32 font-bold'>
                                Internet
                            </div>
                            <div>
                                <button class="w-10 h-10 m-1 rounded-full bg-blue-500 hover:bg-[#71bd44] text-white">
                                    0
                                </button>
                                <button class="w-10 h-10 m-1 rounded-full bg-blue-500 hover:bg-[#71bd44] text-white">
                                    0
                                </button>
                                <button class="w-10 h-10 m-1 rounded-full bg-blue-500 hover:bg-[#71bd44] text-white">
                                    0
                                </button>
                                <button class="w-10 h-10 m-1 rounded-full bg-blue-500 hover:bg-[#71bd44] text-white">
                                    0
                                </button>
                                <button class="w-10 h-10 m-1 rounded-full bg-blue-500 hover:bg-[#71bd44] text-white">
                                    0
                                </button>
                                <button class="w-10 h-10 m-1 rounded-full bg-blue-500 hover:bg-[#71bd44] text-white">
                                    0
                                </button>
                                <button class="w-10 h-10 m-1 rounded-full bg-blue-500 hover:bg-[#71bd44] text-white">
                                    0
                                </button>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 mt-5'>
                            <div className='w-32 font-bold'>
                                Voice
                            </div>
                            <div>
                                <button class="w-10 h-10 m-1 rounded-full bg-green-500 hover:bg-[#71bd44] text-white">
                                    0
                                </button>
                                <button class="w-10 h-10 m-1 rounded-full bg-green-500 hover:bg-[#71bd44] text-white">
                                    0
                                </button>
                                <button class="w-10 h-10 m-1 rounded-full bg-green-500 hover:bg-[#71bd44] text-white">
                                    0
                                </button>
                                <button class="w-10 h-10 m-1 rounded-full bg-green-500 hover:bg-[#71bd44] text-white">
                                    0
                                </button>
                                <button class="w-10 h-10 m-1 rounded-full bg-green-500 hover:bg-[#71bd44] text-white">
                                    0
                                </button>
                                <button class="w-10 h-10 m-1 rounded-full bg-green-500 hover:bg-[#71bd44] text-white">
                                    0
                                </button>
                                <button class="w-10 h-10 m-1 rounded-full bg-green-500 hover:bg-[#71bd44] text-white">
                                    0
                                </button>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 mt-5'>
                            <div className='w-32 font-bold'>
                                SMS Bundle
                            </div>
                            <div>
                                <button class="w-10 h-10 m-1 rounded-full bg-red-500 hover:bg-[#71bd44] text-white">
                                    0
                                </button>
                                <button class="w-10 h-10 m-1 rounded-full bg-red-500 hover:bg-[#71bd44] text-white">
                                    0
                                </button>
                                <button class="w-10 h-10 m-1 rounded-full bg-red-500 hover:bg-[#71bd44] text-white">
                                    0
                                </button>
                                <button class="w-10 h-10 m-1 rounded-full bg-red-500 hover:bg-[#71bd44] text-white">
                                    0
                                </button>
                                <button class="w-10 h-10 m-1 rounded-full bg-red-500 hover:bg-[#71bd44] text-white">
                                    0
                                </button>
                                <button class="w-10 h-10 m-1 rounded-full bg-red-500 hover:bg-[#71bd44] text-white">
                                    0
                                </button>
                                <button class="w-10 h-10 m-1 rounded-full bg-red-500 hover:bg-[#71bd44] text-white">
                                    0
                                </button>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 mt-5'>
                            <div className='w-32 font-bold'>
                                Validity
                            </div>
                            <div>
                                <button class="w-10 h-10 m-1 rounded-full bg-orange-500 hover:bg-[#71bd44] text-white">
                                    0
                                </button>
                                <button class="w-10 h-10 m-1 rounded-full bg-orange-500 hover:bg-[#71bd44] text-white">
                                    0
                                </button>
                                <button class="w-10 h-10 m-1 rounded-full bg-orange-500 hover:bg-[#71bd44] text-white">
                                    0
                                </button>
                                <button class="w-10 h-10 m-1 rounded-full bg-orange-500 hover:bg-[#71bd44] text-white">
                                    0
                                </button>
                                <button class="w-10 h-10 m-1 rounded-full bg-orange-500 hover:bg-[#71bd44] text-white">
                                    0
                                </button>
                                <button class="w-10 h-10 m-1 rounded-full bg-orange-500 hover:bg-[#71bd44] text-white">
                                    0
                                </button>
                                <button class="w-10 h-10 m-1 rounded-full bg-orange-500 hover:bg-[#71bd44] text-white">
                                    0
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className=' py-5'>
                        <p>Internet: 0 MB</p>
                        <p>Voice : 0 Minute</p>
                        <p>SMS Bundle: 0</p>
                        <p>Validity: 3</p>
                        <p>Total Price ৳ : 0</p>
                        <button type="submit" className='w-20 rounded bg-[#71BD44]'>BUY</button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Teleplan;