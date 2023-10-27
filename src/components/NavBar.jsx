import React from 'react';

const NavBar = () => {
    return (
        <div className='bg-slate-800 text-slate-50 p-5 flex flex-row text-xl font-normal'>
            <div className='basis-1/4 flex flex-row justify-start items-center'>
                <div className='md:ms-6'>
                    <h1><span className='font-bold'>CodeSphere</span><span className='hidden md:inline font-thin text-2xl'>Academy</span></h1>
                </div>
            </div>
            <div className='basis-3/4 flex flex-row justify-end items-center'>
                <div className='hidden md:flex'>
                    <h1 className='me-6'>Data-Science</h1>
                    <h1 className='me-6'>Front-End</h1>
                    <h1 className='me-6'>Back-End</h1>
                    <h1 className='me-6'>Full-Stack</h1>
                    <h1 className='me-6'>React-Native</h1>
                </div>
                <a class="md:me-3 rounded-lg bg-slate-50 text-slate-800 py-2 px-4 font-bold" href='https://forms.gle/ZM5ATo4eCCVvyM2J9' target='_blank'>Enroll Now</a>
            </div>
        </div>
    );
}

export default NavBar;
