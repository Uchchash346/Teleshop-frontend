import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';

const CustomerSupport = () => {
    const [address, setAddress] = useState([]);

    useEffect(() => {
        axios
            .get("/datas/customer_care_info.json")
            .then((res) => setAddress(res.data))
            .catch((err) => console.log(err));
    }, [])
    return (
        <Fragment>
            <div className='container mx-auto max-w-6xl pt-10'>
                <div class="w-10/12">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                        <thead class="text-xs text-gray-900 uppercase dark:text-gray-400">
                            <tr>
                                <th scope="col" class="py-3 px-6">
                                    স্টেশন
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    থানা/উপজেলা
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    ঠিকানা
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    ছুটি
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                address.map((data, index) => {
                                    return (
                                        <tr class="bg-white dark:bg-gray-800" key={index}>
                                            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {data.station}
                                            </th>
                                            <td class="py-4 px-6">
                                                {data.thana}
                                            </td>
                                            <td class="py-4 px-6">
                                                {data.customercenter}
                                            </td>
                                            <td class="py-4 px-6">
                                                {data.vacation}
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    );
};

export default CustomerSupport;