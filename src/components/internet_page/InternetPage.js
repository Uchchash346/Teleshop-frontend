import React, { Fragment, useEffect, useState } from 'react';
import axios from "axios";

const InternetPage = () => {
    const [netPackages, setNetPackages] = useState([]);
    const [netCardLength, setNetCardLength] = useState(6);
    const [showModal, setShowModal] = React.useState(false);

    useEffect(() => {
        axios
            .get("/datas/regular_net_page.json")
            .then((res) => setNetPackages(res.data))
            .catch((err) => console.log(err));
    }, [])
    return (
        <Fragment>
            <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 py-11 px-5 mx-auto container max-w-5xl">
                {
                    netPackages.slice(0, netCardLength).map((data, index) => {
                        return (
                            <div className='border-2 border-[#71BD44] rounded-lg p-5' key={index}>
                                <p className='text-center text-3xl font-semibold'>{data.net}</p>
                                <p className='text-center font-medium'>Amount: {data.amount} Tk</p>
                                <p className='text-center'>Duration: {data.duration}</p>
                                <p className='text-center'>Package: {data.package_type}</p>
                                <p className='text-center'>Code: {data.code}</p>
                                <button
                                    className='mt-5 mx-20 border-2 rounded-full w-28 border-[#71BD44] hover:bg-[#71BD44]'
                                    type="button"
                                    data-modal-toggle="defaultModal"
                                    onClick={() => setShowModal(true)}
                                >
                                    Buy Now
                                </button>
                                {showModal ? (
                                    <>
                                        <div
                                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                        >
                                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                                {/*content*/}
                                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                    {/*header*/}
                                                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                                        <h3 className="text-3xl font-semibold">
                                                            Modal Title {data.duration}
                                                        </h3>
                                                        <button
                                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                            onClick={() => setShowModal(false)}
                                                        >
                                                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                                ×
                                                            </span>
                                                        </button>
                                                    </div>
                                                    {/*body*/}
                                                    <div className="relative p-6 flex-auto">
                                                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                                            I always felt like I could do anything. That’s the main
                                                            thing people are controlled by! Thoughts- their perception
                                                            of themselves! They're slowed down by their perception of
                                                            themselves. If you're taught you can’t do anything, you
                                                            won’t do anything. I was taught I could do everything.
                                                        </p>
                                                    </div>
                                                    {/*footer*/}
                                                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                                        <button
                                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                            type="button"
                                                            onClick={() => setShowModal(false)}
                                                        >
                                                            Close
                                                        </button>
                                                        <button
                                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                            type="button"
                                                            onClick={() => setShowModal(false)}
                                                        >
                                                            Save Changes
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                    </>
                                ) : null}
                            </div>
                        )
                    })
                }
                {/* <button className='border-2 border-rose-600 w-64 h-7 rounded-lg hover:border-[#71BD44]' type="submit">VIEW MORE</button> */}
            </div>
            <div className='grid'>
                <button type=""
                    onClick={() => setNetCardLength(netPackages.length)}
                    className='border-2 border-rose-600 w-64 h-7 rounded-lg hover:border-[#71BD44] mx-auto'>VIEW MORE</button>
            </div>

            {/* Net package model */}
            <div id="staticModal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
                <div class="relative w-full h-full max-w-2xl md:h-auto">
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                Static modal
                            </h3>
                            <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="staticModal">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>
                        <div class="p-6 space-y-6">
                            <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                            </p>
                            <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                            </p>
                        </div>
                        <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button data-modal-toggle="staticModal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                            <button data-modal-toggle="staticModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    );
};

export default InternetPage;