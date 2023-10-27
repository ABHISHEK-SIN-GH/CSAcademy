import React from 'react';

const Card = ({icon,title,description}) => {
    return (
        <div className='w-full rounded-lg px-3 py-6 bg-slate-100'>
            <h1 className='font-bold text-lg md:text-center'>
                <span className='mx-3 my-4 md:mx-0 md:block'>
                    <span className='p-3 bg-slate-50 rounded-full'>{icon}</span>
                </span>
                {title}
            </h1>
            <hr className='my-4 md:my-3 bg-slate-100 h-1'/>
            <p className='font-normal text-md'>{description}</p>
        </div>
    );
}

export default Card;
