import React, { Fragment } from 'react';
import errorPage from '../images/error_page/404.png'

const ErrorPage = () => {
    return (
        <Fragment>
            <div className='mx-auto container max-w-7xl'>
                <img className='w-screen h-screen'
                src={errorPage} alt="" />
            </div>
        </Fragment>
    );
};

export default ErrorPage;