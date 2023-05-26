import {Link} from 'react-router-dom'
import '../App.css'

const Sidebar = () => {
    return(
        <div className='bottom-0 left-0 fixed md:relative w-full h-[70px] md:w-[70px] lg:w-1/5 md:h-screen overflow-hidden z-50'>
            <div className='bottom-0 left-0 bg-white w-full sm:border-t-[1px] fixed md:top-0 md:left-0  md:border-r-[1px] md:h-full md:w-[70px] lg:w-1/5'>
                <h2 className='hidden md:flex text-center md:justify-center px-3 md:items-center py-[3rem] instagram text-[1.5rem]'>
                    <svg className='lg:hidden' xmlns="http://www.w3.org/2000/svg" width={20} height={20} class="ionicon" viewBox="0 0 512 512"><path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"/><path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"/></svg>
                    <span className='hidden lg:flex'>Instagram</span>
                </h2>
                <ul className='flex md:flex-col gap-[1rem] justify-center items-start px-3'>
                    <li className='md:w-full rounded-md py-2 px-2'>
                        <Link className='flex justify-start items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} class="ionicon" viewBox="0 0 512 512"><path d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
                            <span className='font-bold hidden lg:flex'>Home</span>
                        </Link>
                    </li>
                    <li className='md:w-full rounded-md py-2 px-2'>
                        <Link className='flex justify-start items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} class="ionicon" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M338.29 338.29L448 448"/></svg>
                            <span className='hidden lg:flex'>Search</span>
                        </Link>
                    </li>
                    <li className='md:w-full rounded-md py-2 px-2'>
                        <Link className='flex justify-start items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} class="ionicon" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path d="M350.67 150.93l-117.2 46.88a64 64 0 00-35.66 35.66l-46.88 117.2a8 8 0 0010.4 10.4l117.2-46.88a64 64 0 0035.66-35.66l46.88-117.2a8 8 0 00-10.4-10.4zM256 280a24 24 0 1124-24 24 24 0 01-24 24z"/></svg>
                            <span className='hidden lg:flex'>Explore</span>
                        </Link>
                    </li>
                    <li className='md:w-full rounded-md py-2 px-2'>
                        <Link className='flex justify-start items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} class="ionicon" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path d="M216.32 334.44l114.45-69.14a10.89 10.89 0 000-18.6l-114.45-69.14a10.78 10.78 0 00-16.32 9.31v138.26a10.78 10.78 0 0016.32 9.31z"/></svg>
                            <span className='hidden lg:flex'>Reels</span>
                        </Link>
                    </li>
                    <li className='md:w-full rounded-md py-2 px-2'>
                        <Link className='flex justify-start items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} class="ionicon" viewBox="0 0 512 512"><path d="M87.49 380c1.19-4.38-1.44-10.47-3.95-14.86a44.86 44.86 0 00-2.54-3.8 199.81 199.81 0 01-33-110C47.65 139.09 140.73 48 255.83 48 356.21 48 440 117.54 459.58 209.85a199 199 0 014.42 41.64c0 112.41-89.49 204.93-204.59 204.93-18.3 0-43-4.6-56.47-8.37s-26.92-8.77-30.39-10.11a31.09 31.09 0 00-11.12-2.07 30.71 30.71 0 00-12.09 2.43l-67.83 24.48a16 16 0 01-4.67 1.22 9.6 9.6 0 01-9.57-9.74 15.85 15.85 0 01.6-3.29z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/></svg>
                            <span className='hidden lg:flex'>Messages</span>
                        </Link>
                    </li>
                    <li className='md:w-full rounded-md py-2 px-2'>
                        <Link className='flex justify-start items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg"  width={20} height={20} class="ionicon" viewBox="0 0 512 512"><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
                            <span className='hidden lg:flex'>Notifications</span>
                        </Link>
                    </li>
                    <li className='md:w-full rounded-md py-2 px-2'>
                        <Link className='flex justify-start items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} class="ionicon" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 176v160M336 256H176"/></svg>
                            <span className='hidden lg:flex'>Create</span>
                        </Link>
                    </li>
                    <li className='md:w-full rounded-md py-2 px-2'>
                        <Link className='flex justify-start items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} class="ionicon" viewBox="0 0 512 512"><path d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z"/><path d="M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z"/></svg>
                            <span className='hidden lg:flex'>Profile</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;