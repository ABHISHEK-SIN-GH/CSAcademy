import React from 'react';

import imgUrl from '../assets/heroSide.png';
import dataAnalytics from '../assets/data-analytics.png';
import dataScience from '../assets/data-science.png';
import frontend from '../assets/frontend.png';
import backend from '../assets/backend.png';
import fullstack from '../assets/fullstack.png';
import mobileAppDev from '../assets/mobile-app-dev.png';

import Card from './Card';
import CourseCard from './CourseCard';
import SchoolIcon from '@mui/icons-material/School';
import DiscountIcon from '@mui/icons-material/Discount';
import DevicesIcon from '@mui/icons-material/Devices';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InfoIcon from '@mui/icons-material/Info';
import DownloadIcon from '@mui/icons-material/Download';

import dataAnalyticsUrl from '../docs/data-analytics.pdf';
import dataScienceUrl from '../docs/data-science.pdf';
import frontendUrl from '../docs/frontend.pdf';
import backendUrl from '../docs/backend.pdf';
import fullstackUrl from '../docs/fullstack.pdf';
import appDevUrl from '../docs/appdev.pdf';
import brochureUrl from '../docs/codesphere-brochure.pdf';

const Home = () => {
    return (
        <>
            <div className='bg-slate-50 text-slate-800 flex flex-col md:flex-row items-center md:px-12 py-20 px-6'>
                <div className='flex flex-col basis-1/2'>
                    <h1 className='text-5xl font-bold text-left'>Welcome to <br /> <span className='md:underline font-thin text-4xl' style={{textUnderlineOffset:"1.5rem"}}>CodeSphere Academy</span></h1>
                    <div className='my-2 md:my-5'></div>
                    <h3 className='text-lg md:font-thin font-normal text-start md:text-xl'>Empowering your tech journey through hands-on courses, expert instructors, and career support. Join us to unlock your potential in development and data science.</h3>
                    <span class="rounded-lg border-slate-800 border-2 py-2 px-4 font-normal text-lg mt-5 inline md:w-1/2 text-center">Courses Starts From <span className='text-orange-500 font-bold'>Rs. 6999/-</span></span>
                    <a class="rounded-lg bg-slate-800 text-slate-50 py-2 px-4 font-bold text-lg mt-5 inline md:w-1/2 text-center" href='https://forms.gle/ZM5ATo4eCCVvyM2J9' target='_blank'>Register Now</a>
                    <h3 className='font-semibold text-start text-xs mt-6 text-orange-500'><InfoIcon/> Pay only after satisfaction during the trial sessions.</h3>
                </div>
                <div className='flex justify-center items-center md:pt-6 pt-20 mx-auto basis-1/2'>
                    <img src={imgUrl} alt="home image" height="500px" width="500px"/>
                </div>
            </div>
            <div className='md:px-12 md:py-20 py-12 px-6 text-slate-800'>
                <h1 className='text-5xl font-bold text-left'>Why Choose <span className='font-thin md:text-5xl text-4xl'>CodeSphere Academy</span></h1> 
                <br />
                <br />
                <div className='flex md:flex-row flex-col gap-3 '>
                    <Card icon={<DiscountIcon/>} title={"Quality over Discounts"} description={"We prioritize exceptional education, believing that it's an investment in your future, not just a cost-saving deal."}/>
                    <Card icon={<DevicesIcon/>} title={"Practical Learning"} description={"Our approach emphasizes hands-on experience, allowing you to apply your knowledge to real-world scenarios, fostering a deeper understanding."}/>
                    <Card icon={<SchoolIcon/>} title={"Career Ready Support"} description={"We provide comprehensive assistance to ensure you're well-prepared for your professional journey, from interview readiness to resume-building skills."}/>
                    <Card icon={<PeopleAltIcon/>} title={"Expert Faculty"} description={"Our instructors are seasoned experts who are not only well-versed in the subject matter but also dedicated to guiding and mentoring."}/>   
                    <Card icon={<WorkspacePremiumIcon/>} title={"Training & Certification"} description={"Our programs offer both training and industry-recognized certification, validating your expertise and enhancing your career prospects."}/>   
                </div>  
                <br />  
            </div>
            <div className='bg-slate-50 text-slate-800 flex flex-col md:flex-row items-center md:px-12 py-20 px-6'>
                <div className='flex flex-col basis-2/5 md:pe-6'>
                    <h1 className='text-5xl font-bold text-left leading-tight'>Explore <span className='font-thin md:text-5xl text-4xl block'>Our Courses</span></h1>
                    <div className='my-2 md:my-3'></div>
                    <h3 className='text-lg  font-normal text-start md:text-xl'>
                        At Codesphere Academy, we offer quality education in
                        <ul className='font-light my-3 px-6 list-disc'>
                            <li>Data Analytics (Python)</li>
                            <li>Data Science & ML</li>
                            <li>Frontend Development</li>
                            <li>Backend Development</li>
                            <li>Fullstack Development</li>
                            <li>Mobile App Development</li>
                        </ul>
                    </h3>
                    <div className='my-1 md:my-2'></div>
                    <h3 className='text-3xl font-semibold text-start'>
                        Additional Benefits :-
                        <ul className='font-light my-3 px-6 list-disc text-lg'>
                            <li>Quality Education</li>
                            <li>Hands-On Learning</li>
                            <li>Career-Ready Support</li>
                            <li>Expert Faculty</li>
                            <li>Training and Certification</li>
                            <li>Customized Learning</li>
                            <li>Lifetime Access</li>
                            <li>Networking Opportunities</li>
                            <li>Internship Assistance</li>
                            <li>Flexible Scheduling</li>
                        </ul>
                    </h3>
                    <div className='my-1 md:my-2'></div>
                    <h3 className='text-lg font-normal text-start md:text-xl'>
                        Our hands-on approach, career support, and expert faculty ensure you're ready for success. 
                        Customized learning options available. 
                        Start your tech journey today.
                    </h3>
                    <div className='my-1 md:my-2'></div>
                    <a class="rounded-lg bg-slate-800 text-slate-50 py-2 px-4 font-bold text-lg mt-5 inline md:w-1/2 text-center" href={brochureUrl} target='_blank'><DownloadIcon/> Download Brochure</a>
                </div>
                <div className='flex flex-col md:py-6 pt-16 basis-3/5' id="Courses">
                    <div className='flex flex-col md:flex-row gap-5'>
                        <CourseCard icon={<img src={dataAnalytics} alt="dataAnalytics" className='inline-block'/>} title={`Data Analytics Using Python`} duration={"2 Months"} project={"3+ Projects"} courseFee={"6999"} courseUrl={dataAnalyticsUrl}/>
                        <CourseCard icon={<img src={dataScience} alt="dataScience" className='inline-block'/>} title={"Data Science Using ML"} duration={"3 Months"} project={"5+ Projects"} courseFee={"11999"} courseUrl={dataScienceUrl}/>
                    </div>
                    <div className='flex flex-col md:flex-row gap-5 mt-5'>
                        <CourseCard icon={<img src={frontend} alt="frontend" className='inline-block'/>} title={"Frontend Development"} duration={"2 Months"} project={"3+ Projects"} courseFee={"6999"} courseUrl={frontendUrl}/>
                        <CourseCard icon={<img src={backend} alt="backend" className='inline-block'/>} title={"Backend Development"} duration={"3 Months"} project={"5+ Projects"} courseFee={"11999"} courseUrl={backendUrl}/>
                    </div>
                    <div className='flex flex-col md:flex-row gap-5 mt-5'>
                        <CourseCard icon={<img src={fullstack} alt="fullstack" className='inline-block'/>} title={"Fullstack Development"} duration={"4 Months"} project={"8+ Projects"} courseFee={"16999"} courseUrl={fullstackUrl}/>
                        <CourseCard icon={<img src={mobileAppDev} alt="mobileAppDev" className='inline-block'/>} title={"Mobile App Development"} duration={"4 Months"} project={"8+ Projects"} courseFee={"19999"} courseUrl={appDevUrl}/>
                    </div>
                </div>
            </div>
            <div className='md:px-12 md:py-20 py-12 px-6 text-slate-800 flex flex-col justify-evenly md:flex-row'>
                <div className='w-full md:w-1/2 flex flex-col md:pe-12'>
                   
                    <h1 className='text-4xl md:text-5xl font-bold mb-5'>Get in Touch</h1>
                    <h3 className='text-2xl mb-5'>We're here to help. If you have any questions or need assistance, feel free to reach out to us.</h3>
                   
                    <h1 className='text-2xl font-light underline underline-offset-8 mb-2'>Contact Information:</h1>
                    <h3><span className='font-bold'>Email:</span> CodesphereAcademy@gmail.com</h3>
                    <h3 className='mb-3'><span className='font-bold'>Phone:</span> +91-7999456558, +91-8962522717</h3>

                    <h1 className='text-2xl font-light underline underline-offset-8 mb-2'>Office Hours:</h1>
                    <h3><span className='font-bold'>Mon - Fri:</span> 9.00 AM - 6.00 PM</h3>
                    <h3 className='mb-3'><span className='font-bold'>Sat - Sun:</span> 11.00 AM - 2.00 PM</h3>

                    <h1 className='text-2xl font-light underline underline-offset-8 mb-2'>Location:</h1>
                    <h3 className='mb-5'>Codesphere Academy, Bhilai, Chhattisgarh</h3>

                    <h3 className='text-2xl mb-12'>We look forward to hearing from you.</h3>

                </div>
                <form className='w-full md:w-1/2 flex flex-col border-2 rounded-lg p-6 bg-slate-200'>
                    <h1 className='text-3xl'>Have any queries?</h1>
                    <p className='text-xl mt-3 mb-6'>Get a free counselling session from our experts</p>
                    <TextField label="Enter Your Name *" variant="outlined" className='bg-white'/><div className='my-1'></div>
                    <TextField label="Enter Your Email *" variant="outlined" className='bg-white'/><div className='my-1'></div>
                    <TextField label="Enter Your Phone *" variant="outlined" className='bg-white'/><div className='my-1'></div>
                    <TextField label="Enter Your Query *" variant="outlined" className='bg-white'/><div className='my-1'></div>
                    <TextField label="Enter Course of Interest *" variant="outlined" className='bg-white'/><div className='my-1'></div>
                    <Button variant="contained" color='warning'>Submit</Button>
                </form>
            </div>
        </>
    ); 
}

export default Home;
