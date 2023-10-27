import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import DownloadIcon from '@mui/icons-material/Download';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import InfoIcon from '@mui/icons-material/Info';
const CourseCard = ({icon,title,duration,project,courseFee,courseUrl}) => {
    return (
        <div className='w-full rounded-lg p-6 bg-slate-200 border-slate-800' style={{border:"1px solid"}}>
            <h1 className='font-bold text-2xl flex flex-row justify-between items-center'>
                <span className='basis-2/3'>
                    {title}
                </span>
                <span className='basis-1/3 px-3 py-1'>
                    {icon}
                </span>
            </h1>
            <hr className='my-4 md:my-3 bg-slate-100 h-1'/>
            <p className='font-normal text-md flex flex-row justify-between mt-6'>
                <span className='flex items-center'><AccessTimeIcon/> <span className='ms-2'>{duration}</span></span>
                <span className='flex items-center'><AutoStoriesIcon/> <span className='ms-2'>{project}</span></span>
            </p>
            <p className='font-normal text-md flex flex-row justify-between mt-6'>
                <span className='flex items-center'><InfoIcon/> <span className='ms-2'>Free Trail</span></span>
                <span className='flex items-center text-orange-500'><CurrencyRupeeIcon/> <span className='font-bold text-xl '>{courseFee}/-</span></span>
            </p>
            <a className='w-full p-3 mt-6 border-slate-800 bg-slate-50 rounded-lg font-mono font-bold block text-center' style={{border:"1px solid"}} href={courseUrl} download><span><DownloadIcon/> Download Curriculum</span></a>
        </div>
    );
}

export default CourseCard;
