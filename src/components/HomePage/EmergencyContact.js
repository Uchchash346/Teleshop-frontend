import React from 'react';
// import { BsTelephoneFill } from 'react-icons/bs';
import image1 from '../images/emergency_contact_images/106.png'
import image2 from '../images/emergency_contact_images/107.png'
import image3 from '../images/emergency_contact_images/108.png'
import image4 from '../images/emergency_contact_images/109.png'
import image5 from '../images/emergency_contact_images/110.png'

const EmergencyContact = () => {
    return (
        <>
            <p className='text-center text-[#71BD44] font-bold	 text-3xl p-5'>Emergency Contact</p>
            <div class="grid grid-cols-1 lg:grid-cols-5 gap-4 mx-auto container pb-5">
                <div>
                    <img src={image1} alt="image1" />
                </div>
                <div>
                    <img src={image2} alt="image2" />
                </div>
                <div>
                    <img src={image3} alt="image3" />
                </div>
                <div>
                    <img src={image4} alt="image4" />
                </div>
                <div>
                    <img src={image5} alt="image5" />
                </div>
            </div>
        </>
    );
};

export default EmergencyContact;