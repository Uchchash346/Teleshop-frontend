import React from 'react';
import { FaSimCard, FaNewspaper, FaSms } from 'react-icons/fa';
import { MdOutlineContactPhone } from 'react-icons/md';
import { AiOutlineWifi } from 'react-icons/ai';
import { IoGameControllerOutline } from 'react-icons/io5';
import { BiSupport } from 'react-icons/bi';
import { Link } from 'react-router-dom';


const OptionCategory = () => {
    return (
        <>
            <div className='container mx-auto'>
                <div className='grid grid-flow-col auto-cols-max  justify-center p-5'>
                    <Link rel="" type="" href="">
                        <div className='m-5'>
                            <MdOutlineContactPhone className='text-5xl text-[#71BD44]' />
                            {/* <p className=''>Recharge</p> */}
                        </div>
                    </Link>
                    <Link rel="" type="" href="">
                        <div className='m-5'>
                            <FaNewspaper className='text-5xl text-[#71BD44]' />
                            {/* <p className=''>Bill Payment</p> */}
                        </div>
                    </Link>
                    <Link rel="" type="" href="">
                        <div className='m-5 '>
                            <AiOutlineWifi className='text-5xl text-[#71BD44]' />
                        </div>
                    </Link>
                    <Link rel="" type="" href="">
                        <div className='m-5 '>
                            <FaSimCard className='text-5xl text-[#71BD44]' />
                        </div>
                    </Link>
                    <Link rel="" type="" href="">
                        <div className='m-5 '>
                            <FaSms className='text-5xl text-[#71BD44]' />
                        </div>
                    </Link>
                    <Link rel="" type="" href="">
                        <div className='m-5 '>
                            <IoGameControllerOutline className='text-5xl text-[#71BD44]' />
                        </div>
                    </Link>
                    <Link rel="" type="" href="">
                        <div className='m-5 '>
                            <BiSupport className='text-5xl text-[#71BD44]' />
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default OptionCategory;