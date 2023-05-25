import myProfile from '../assets/jasper.jpg'
import {Link} from 'react-router-dom';
import Kate from '../assets/kate.png'

const UsrProfileWFooter = () => {
    return(
        <div className='flex flex-col gap-5 px-5'>
            <div className="flex justify-between items-center">
                <div className='flex flex-row justify-start items-center gap-4'>
                    <div className="w-[50px] h-50px rounded-full overflow-hidden relative">
                        <img src={myProfile} alt="my profile" />
                    </div>
                    <div className="flex flex-col justify-start items-start">
                        <span className='font-semibold text-[14px]'>ejayawan22</span>
                        <span className='text-[14px]'>Jasper's_ARTs</span>
                    </div>
                </div>
                    
                <div className='d-flex justify-end items-center'>
                    <span className='font-semibold text-[#427eff] text-[13px]'>Switch</span>
                </div>
            </div>

            {/* ----------------users -----------------*/}

            <div className='flex flex-col gap-2'>
                <div className="flex justify-between items-center">
                    <span className='text-gray-500 font-semibold text-[14px]'>Suggested for you</span>
                    <div>
                        <Link className='text-[13px]'>
                            See all
                        </Link>
                    </div>
                </div>

                <div className='flex justify-between items-center'>
                    <div className='flex gap-5 justify-center items-center'>
                        <div className="">
                            <img src={Kate} alt="" className='w-[30px] h-[30px] rounded-full'/>
                        </div>
                        <div className='flex flex-col justify-start items-start'>
                            <Link><span className='font-semibold text-[13px]'>_itswysiwyg</span></Link>
                            <span className='text-[12px] text-gray-500'>Suggested for you</span>
                        </div>
                    </div>
                    <div>
                        <span className='font-semibold text-[12px] text-[#4183ff]'>Follow</span>
                    </div>
                </div>

                <div className='flex justify-between items-center'>
                    <div className='flex gap-5 justify-center items-center'>
                        <div className="">
                            <img src={Kate} alt="" className='w-[30px] h-[30px] rounded-full'/>
                        </div>
                        <div className='flex flex-col justify-start items-start'>
                            <Link><span className='font-semibold text-[13px]'>_itswysiwyg</span></Link>
                            <span className='text-[12px] text-gray-500'>Suggested for you</span>
                        </div>
                    </div>
                    <div>
                        <span className='font-semibold text-[12px] text-[#4183ff]'>Follow</span>
                    </div>
                </div>

                <div className='flex justify-between items-center'>
                    <div className='flex gap-5 justify-center items-center'>
                        <div className="">
                            <img src={Kate} alt="" className='w-[30px] h-[30px] rounded-full'/>
                        </div>
                        <div className='flex flex-col justify-start items-start'>
                            <Link><span className='font-semibold text-[13px]'>_itswysiwyg</span></Link>
                            <span className='text-[12px] text-gray-500'>Suggested for you</span>
                        </div>
                    </div>
                    <div>
                        <span className='font-semibold text-[12px] text-[#4183ff]'>Follow</span>
                    </div>
                </div>

                <div className='flex justify-between items-center'>
                    <div className='flex gap-5 justify-center items-center'>
                        <div className="">
                            <img src={Kate} alt="" className='w-[30px] h-[30px] rounded-full'/>
                        </div>
                        <div className='flex flex-col justify-start items-start'>
                            <Link><span className='font-semibold text-[13px]'>_itswysiwyg</span></Link>
                            <span className='text-[12px] text-gray-500'>Suggested for you</span>
                        </div>
                    </div>
                    <div>
                        <span className='font-semibold text-[12px] text-[#4183ff]'>Follow</span>
                    </div>
                </div>

                <div className='flex justify-between items-center'>
                    <div className='flex gap-5 justify-center items-center'>
                        <div className="">
                            <img src={Kate} alt="" className='w-[30px] h-[30px] rounded-full'/>
                        </div>
                        <div className='flex flex-col justify-start items-start'>
                            <Link><span className='font-semibold text-[13px]'>_itswysiwyg</span></Link>
                            <span className='text-[12px] text-gray-500'>Suggested for you</span>
                        </div>
                    </div>
                    <div>
                        <span className='font-semibold text-[12px] text-[#4183ff]'>Follow</span>
                    </div>
                </div>
            </div>

            {/* ----------------footer -----------------*/}

            <div className='flex flex-col gap-3'>
                <ul className='flex flex-wrap gap-1'>
                    <li>
                        <Link className='text-gray-400 text-[12px] font-semibold'>About</Link>
                    </li>
                    <li>
                        <Link className='text-gray-400 text-[12px] font-semibold'>Help</Link>
                    </li>
                    <li>
                        <Link className='text-gray-400 text-[12px] font-semibold'>Press</Link>
                    </li>
                    <li>
                        <Link className='text-gray-400 text-[12px] font-semibold'>API</Link>
                    </li>
                    <li>
                        <Link className='text-gray-400 text-[12px] font-semibold'>Jobs</Link>
                    </li>
                    <li>
                        <Link className='text-gray-400 text-[12px] font-semibold'>Privacy</Link>
                    </li>
                    <li>
                        <Link className='text-gray-400 text-[12px] font-semibold'>Terms</Link>
                    </li>
                    <li>
                        <Link className='text-gray-400 text-[12px] font-semibold'>Locations</Link>
                    </li>
                    <li>
                        <Link className='text-gray-400 text-[12px] font-semibold'>Language</Link>
                    </li>
                    <li>
                        <Link className='text-gray-400 text-[12px] font-semibold'>Meta Verified</Link>
                    </li>
                </ul>

                <div>
                    <span className='text-gray-400 text-[12px] font-semibold'>© 2023 INSTAGRAM FROM META</span>
                </div>
            </div>
        </div>
    )
}

export default UsrProfileWFooter;