import Liza from '../assets/lizaa.webp'
import Jasper from '../assets/jasper.jpg'
import Jas from '../assets/jiji.jpg'
import Lizaa from '../assets/lizaa.jpg'

const Post = () => {
    return(
        <div className=''>
            <div className="flex flex-col max-w-[624px] overflow-hidden me-auto px-[5rem] my-[3rem]">
                <div className='flex justify-between items-center w-full'>
                    <div className="user-profile flex items-center justify-center gap-3">
                        <div className="flex justify-center items-center image w-[40px] h-[40px] overflow-hidden relative rounded-full bg-red-500 ">
                            <img src={Lizaa} alt="liza soberano" className='object-fit w-full h-full'/>
                        </div>
                        <div className="name">
                            <span className='text-[13px] font-semibold'>Liza soberano</span>
                        </div>
        
                            <div className='w-[4px] h-[4px] bg-gray-500 rounded-full'>
                            </div>
                       
                        <div className="time">
                            <span>3h</span>
                        </div>
                    </div>
                    <div className="icon" >
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} class="ionicon" viewBox="0 0 512 512"><circle cx="256" cy="256" r="32" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><circle cx="416" cy="256" r="32" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><circle cx="96" cy="256" r="32" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/></svg>
                    </div>
                </div>
                <div className="w-full h-[90vh] rounded-md">
                    <img src={Liza} alt="" className='w-full h-full object-cover rounded-md my-3'/>
                </div>  
                <div className='flex flex-col'>
                    <div className='flex mt-6 justify-between items-center'>
                        <div className='flex gap-4'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} class="ionicon" viewBox="0 0 512 512"><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
                            </span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} class="ionicon" viewBox="0 0 512 512"><path d="M87.49 380c1.19-4.38-1.44-10.47-3.95-14.86a44.86 44.86 0 00-2.54-3.8 199.81 199.81 0 01-33-110C47.65 139.09 140.73 48 255.83 48 356.21 48 440 117.54 459.58 209.85a199 199 0 014.42 41.64c0 112.41-89.49 204.93-204.59 204.93-18.3 0-43-4.6-56.47-8.37s-26.92-8.77-30.39-10.11a31.09 31.09 0 00-11.12-2.07 30.71 30.71 0 00-12.09 2.43l-67.83 24.48a16 16 0 01-4.67 1.22 9.6 9.6 0 01-9.57-9.74 15.85 15.85 0 01.6-3.29z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/></svg>
                            </span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} class="ionicon" viewBox="0 0 512 512"><path d="M470.3 271.15L43.16 447.31a7.83 7.83 0 01-11.16-7V327a8 8 0 016.51-7.86l247.62-47c17.36-3.29 17.36-28.15 0-31.44l-247.63-47a8 8 0 01-6.5-7.85V72.59c0-5.74 5.88-10.26 11.16-8L470.3 241.76a16 16 0 010 29.39z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
                            </span>
                        </div>
                        <div>
                            <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} class="ionicon" viewBox="0 0 512 512"><path d="M352 48H160a48 48 0 00-48 48v368l144-128 144 128V96a48 48 0 00-48-48z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
                            </span>
                        </div>
                    </div>

                    {/*----------------------- likes ----------------------*/}

                    <div className='mt-2'>
                        <span className='font-bold text-[12px]'>1M likes</span>
                    </div>

                    <div className='flex flex-col '>
                        <span>
                            <button className='text-gray-500 text-[13px]'>
                                View all 2k comments
                            </button>
                        </span>

                        <div className='mt-2 border-b-[1px] pb-2'>
                            <input type="text" placeholder='Add a comment...' className='w-full outline-0'/>
                        </div>
                    </div>
                </div>

            </div>

            <div className="flex flex-col max-w-[624px] overflow-hidden me-auto px-[5rem] my-[3rem]">
                <div className='flex justify-between items-center w-full'>
                    <div className="user-profile flex items-center justify-center gap-3">
                        <div className="flex justify-center items-center image w-[40px] h-[40px] overflow-hidden relative rounded-full bg-red-500 ">
                            <img src={Jasper} alt="liza soberano" className='object-fit w-full h-full'/>
                        </div>
                        <div className="name">
                            <span className='text-[13px] font-semibold'>Jasper Ayawan</span>
                        </div>
                        <div className='w-[4px] h-[4px] bg-gray-500 rounded-full'>
                            </div>
                        <div className="time">
                            <span>1h</span>
                        </div>
                    </div>
                    <div className="icon" >
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} class="ionicon" viewBox="0 0 512 512"><circle cx="256" cy="256" r="32" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><circle cx="416" cy="256" r="32" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><circle cx="96" cy="256" r="32" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/></svg>
                    </div>
                </div>
                <div className="w-full h-[90vh] rounded-md">
                    <img src={Jasper} alt="" className='w-full h-full object-cover rounded-md my-3'/>
                </div>  
                <div className='flex flex-col'>
                    <div className='flex mt-6 justify-between items-center'>
                        <div className='flex gap-4'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} class="ionicon" viewBox="0 0 512 512"><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
                            </span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} class="ionicon" viewBox="0 0 512 512"><path d="M87.49 380c1.19-4.38-1.44-10.47-3.95-14.86a44.86 44.86 0 00-2.54-3.8 199.81 199.81 0 01-33-110C47.65 139.09 140.73 48 255.83 48 356.21 48 440 117.54 459.58 209.85a199 199 0 014.42 41.64c0 112.41-89.49 204.93-204.59 204.93-18.3 0-43-4.6-56.47-8.37s-26.92-8.77-30.39-10.11a31.09 31.09 0 00-11.12-2.07 30.71 30.71 0 00-12.09 2.43l-67.83 24.48a16 16 0 01-4.67 1.22 9.6 9.6 0 01-9.57-9.74 15.85 15.85 0 01.6-3.29z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/></svg>
                            </span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} class="ionicon" viewBox="0 0 512 512"><path d="M470.3 271.15L43.16 447.31a7.83 7.83 0 01-11.16-7V327a8 8 0 016.51-7.86l247.62-47c17.36-3.29 17.36-28.15 0-31.44l-247.63-47a8 8 0 01-6.5-7.85V72.59c0-5.74 5.88-10.26 11.16-8L470.3 241.76a16 16 0 010 29.39z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
                            </span>
                        </div>
                        <div>
                            <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} class="ionicon" viewBox="0 0 512 512"><path d="M352 48H160a48 48 0 00-48 48v368l144-128 144 128V96a48 48 0 00-48-48z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
                            </span>
                        </div>
                    </div>

                    {/*----------------------- likes ----------------------*/}

                    <div className='mt-2'>
                        <span className='font-bold text-[12px]'>2,400 likes</span>
                    </div>

                    <div className='flex flex-col '>
                        <span>
                            <button className='text-gray-500 text-[13px]'>
                                View all 2k comments
                            </button>
                        </span>

                        <div className='mt-2 border-b-[1px] pb-2'>
                            <input type="text" placeholder='Add a comment...' className='w-full outline-0'/>
                        </div>
                    </div>
                </div>

            </div>

            <div className="flex flex-col max-w-[624px] overflow-hidden me-auto px-[5rem] my-[3rem]">
                <div className='flex justify-between items-center w-full'>
                    <div className="user-profile flex items-center justify-center gap-3">
                        <div className="flex justify-center items-center image w-[40px] h-[40px] overflow-hidden relative rounded-full bg-red-500 ">
                            <img src={Jasper} alt="liza soberano" className='object-fit w-full h-full'/>
                        </div>
                        <div className="name">
                            <span className='text-[13px] font-semibold'>Jasper Ayawan</span>
                        </div>
                        <div className='w-[4px] h-[4px] bg-gray-500 rounded-full'>
                            </div>
                        <div className="time">
                            <span>3h</span>
                        </div>
                    </div>
                    <div className="icon" >
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} class="ionicon" viewBox="0 0 512 512"><circle cx="256" cy="256" r="32" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><circle cx="416" cy="256" r="32" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><circle cx="96" cy="256" r="32" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/></svg>
                    </div>
                </div>
                <div className="w-full h-[90vh] rounded-md">
                    <img src={Jas} alt="" className='w-full h-full object-cover rounded-md my-3'/>
                </div>  
                <div className='flex flex-col'>
                    <div className='flex mt-6 justify-between items-center'>
                        <div className='flex gap-4'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} class="ionicon" viewBox="0 0 512 512"><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
                            </span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} class="ionicon" viewBox="0 0 512 512"><path d="M87.49 380c1.19-4.38-1.44-10.47-3.95-14.86a44.86 44.86 0 00-2.54-3.8 199.81 199.81 0 01-33-110C47.65 139.09 140.73 48 255.83 48 356.21 48 440 117.54 459.58 209.85a199 199 0 014.42 41.64c0 112.41-89.49 204.93-204.59 204.93-18.3 0-43-4.6-56.47-8.37s-26.92-8.77-30.39-10.11a31.09 31.09 0 00-11.12-2.07 30.71 30.71 0 00-12.09 2.43l-67.83 24.48a16 16 0 01-4.67 1.22 9.6 9.6 0 01-9.57-9.74 15.85 15.85 0 01.6-3.29z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/></svg>
                            </span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} class="ionicon" viewBox="0 0 512 512"><path d="M470.3 271.15L43.16 447.31a7.83 7.83 0 01-11.16-7V327a8 8 0 016.51-7.86l247.62-47c17.36-3.29 17.36-28.15 0-31.44l-247.63-47a8 8 0 01-6.5-7.85V72.59c0-5.74 5.88-10.26 11.16-8L470.3 241.76a16 16 0 010 29.39z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
                            </span>
                        </div>
                        <div>
                            <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} class="ionicon" viewBox="0 0 512 512"><path d="M352 48H160a48 48 0 00-48 48v368l144-128 144 128V96a48 48 0 00-48-48z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
                            </span>
                        </div>
                    </div>

                    {/*----------------------- likes ----------------------*/}

                    <div className='mt-2'>
                        <span className='font-bold text-[12px]'>1M likes</span>
                    </div>

                    <div className='flex flex-col '>
                        <span>
                            <button className='text-gray-500 text-[13px]'>
                                View all 2k comments
                            </button>
                        </span>

                        <div className='mt-2 border-b-[1px] pb-2'>
                            <input type="text" placeholder='Add a comment...' className='w-full outline-0'/>
                        </div>
                    </div>
                </div>

            </div>

            <div className="flex flex-col max-w-[624px] overflow-hidden me-auto px-[5rem] my-[3rem]">
                <div className='flex justify-between items-center w-full'>
                    <div className="user-profile flex items-center justify-center gap-3">
                        <div className="flex justify-center items-center image w-[40px] h-[40px] overflow-hidden relative rounded-full bg-red-500 ">
                            <img src={Lizaa} alt="liza soberano" className='object-fit w-full h-full'/>
                        </div>
                        <div className="name">
                            <span className='text-[13px] font-semibold'>Liza soberano</span>
                        </div>
                        <div className='w-[4px] h-[4px] bg-gray-500 rounded-full'>
                            </div>
                        <div className="time">
                            <span>3h</span>
                        </div>
                    </div>
                    <div className="icon" >
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} class="ionicon" viewBox="0 0 512 512"><circle cx="256" cy="256" r="32" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><circle cx="416" cy="256" r="32" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><circle cx="96" cy="256" r="32" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/></svg>
                    </div>
                </div>
                <div className="w-full h-[90vh] rounded-md">
                    <img src={Lizaa} alt="" className='w-full h-full object-cover rounded-md my-3'/>
                </div>  
                <div className='flex flex-col'>
                    <div className='flex mt-6 justify-between items-center'>
                        <div className='flex gap-4'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} class="ionicon" viewBox="0 0 512 512"><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
                            </span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} class="ionicon" viewBox="0 0 512 512"><path d="M87.49 380c1.19-4.38-1.44-10.47-3.95-14.86a44.86 44.86 0 00-2.54-3.8 199.81 199.81 0 01-33-110C47.65 139.09 140.73 48 255.83 48 356.21 48 440 117.54 459.58 209.85a199 199 0 014.42 41.64c0 112.41-89.49 204.93-204.59 204.93-18.3 0-43-4.6-56.47-8.37s-26.92-8.77-30.39-10.11a31.09 31.09 0 00-11.12-2.07 30.71 30.71 0 00-12.09 2.43l-67.83 24.48a16 16 0 01-4.67 1.22 9.6 9.6 0 01-9.57-9.74 15.85 15.85 0 01.6-3.29z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/></svg>
                            </span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} class="ionicon" viewBox="0 0 512 512"><path d="M470.3 271.15L43.16 447.31a7.83 7.83 0 01-11.16-7V327a8 8 0 016.51-7.86l247.62-47c17.36-3.29 17.36-28.15 0-31.44l-247.63-47a8 8 0 01-6.5-7.85V72.59c0-5.74 5.88-10.26 11.16-8L470.3 241.76a16 16 0 010 29.39z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
                            </span>
                        </div>
                        <div>
                            <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} class="ionicon" viewBox="0 0 512 512"><path d="M352 48H160a48 48 0 00-48 48v368l144-128 144 128V96a48 48 0 00-48-48z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
                            </span>
                        </div>
                    </div>

                    {/*----------------------- likes ----------------------*/}

                    <div className='mt-2'>
                        <span className='font-bold text-[12px]'>1M likes</span>
                    </div>

                    <div className='flex flex-col '>
                        <span>
                            <button className='text-gray-500 text-[13px]'>
                                View all 2k comments
                            </button>
                        </span>

                        <div className='mt-2 border-b-[1px] pb-2'>
                            <input type="text" placeholder='Add a comment...' className='w-full outline-0'/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Post;