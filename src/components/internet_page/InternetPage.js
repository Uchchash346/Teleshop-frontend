import React, { Fragment, useEffect, useState } from 'react';
import axios from "axios";

const InternetPage = () => {
    const [netPackages, setNetPackages] = useState([]);
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
                    netPackages.map((data, index) => {
                        return (
                            <div className='border-2 border-[#71BD44] rounded-lg p-5' key={index}>
                                <p className='text-center text-3xl font-semibold'>{data.net}</p>
                                <p className='text-center font-medium'>Amount: {data.amount} Tk</p>
                                <p className='text-center'>Duration: {data.duration}</p>
                                <p className='text-center'>Code: {data.code}</p>
                                <button className='mt-5 mx-20 border-2 rounded-full w-28 border-[#71BD44] hover:bg-[#71BD44]' type="">Buy Now</button>
                            </div>
                        )
                    })
                }
            </div>
        </Fragment>
    );
};

export default InternetPage;