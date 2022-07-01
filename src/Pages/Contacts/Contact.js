import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhoneFlip, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    return (
        <>
            <div className="hero" style={{ backgroundImage: "url(https://promo-theme.com/medina-wp/wp-content/uploads/2016/10/contact.jpg)", height: '420px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <div className="hero-content text-center font-thin">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold mb-2 text-cyan-400">Helping Your Teeth
                        </h1>
                        <h1 className='text-slate-800 mb-5 text-5xl font-bold'>Stay Healthy One</h1>
                        <p className="mb-5 text-slate-800">Check Out Our Services!</p>
                        <button className="bg-cyan-500 text-white px-4 mr-2 py-2 hover:bg-cyan-600 font-semibold">CHECK OUT</button>
                        <button className="bg-slate-800 font-semibold hover:bg-slate-900 text-white px-4 mr-2 py-2">MORE INFO</button>
                    </div>
                </div>
            </div>

            <div>
                <h1 className='text-center text-5xl font-semibold mt-8'>Contacts</h1>
                <div className='divider w-14 mt-2 bg-cyan-400 h-1 mx-auto'></div>
                <div className='grid md:grid-cols-3 grid-cols-1 mt-12'>
                    <div className='border-r-2 py-6'>
                        <FontAwesomeIcon icon={faLocationDot} className="text-cyan-400 text-5xl mb-3" />
                        <p>4321 Your Address, <br />
                            Country, Postcode</p>
                    </div>
                    <div className='border-r-2 py-6'>
                        <FontAwesomeIcon icon={faPhoneFlip} className="text-cyan-400 text-5xl mb-3" />
                        <p>8 800 2336 7811 <br />
                            8 988 2737 1132</p>
                    </div>
                    <div className='py-6'>
                        <FontAwesomeIcon icon={faEnvelope} className="text-cyan-400 text-5xl mb-3" />
                        <p>support@yeasin.shamim.com</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;