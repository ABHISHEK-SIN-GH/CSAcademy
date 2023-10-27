import React from 'react';

const Footer = () => {
    return (
        <div className='bg-slate-800 text-slate-50 md:px-12 px-6 py-6 flex flex-col md:flex-row justify-between'>
            <h1 className='text-2xl font-bold mb-3'>CodeSphere<span className='font-light'>Academy</span></h1>
            <div className='text-left md:text-right'>
                <h1 className='text-2xl font-bold'>Contact Us</h1>
                <h1 className='text-md font-normal'><span className='font-semibold'>Mobile:</span> +91-7999456558</h1>
                <h1 className='text-md font-normal'><span className='font-semibold'>Email:</span> CodesphereAcademy@gmail.com</h1>
            </div>
        </div>
    );
}

export default Footer;
