import React, { Fragment } from 'react';
import errorPage from '../images/error_page/404.png'

const ErrorPage = () => {
    return (
        <Fragment>
            <div className='mx-auto container relative max-w-4xl'>
                <img className='w-10/12 mx-auto'
                    src={errorPage} alt="" />
            </div>
            <div className='grid'>
                <a href="/" className='mx-auto'>
                    <button type="" className='border-2 border-rose-600 w-64 h-7 rounded-lg hover:border-[#71BD44]'>Go to Home Page</button>
                </a>
            </div>
        </Fragment>
    );
};

export default ErrorPage;