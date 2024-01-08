import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar2 = () => {
    const [isOpen, setIsOpen] = useState(false);


    useEffect(() => {
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('.navbar');
            const navWraper = document.querySelector('nav');

            if (window.scrollY > 0) {

                nav.classList.remove('md:h-[80px]')
                nav.classList.remove('md:py-5')

            } else {
                nav.classList.add('md:h-[80px]')
                nav.classList.add('md:py-5')
            }
        })
    }, [])

  
    return (
        <nav className="fixed z-20 top-0 left-0 w-full bg-white">
            <div className="navbar flex justify-between items-center z-50 md:px-10 px-5 h-[50px] py-2 md:h-[80px] md:py-5 duration-200 shadow">
                
                {/* logo */}
                <div><span className="text-xl lg:text-3xl font-bold">Logo</span></div>

                {/* large menu */}
                <div className="hidden md:flex flex-1 items-center justify-end">
                    <div className="flex-10">
                        <ul className="flex gap-8 font-semibold">
                            <li className="hover:underline cursor-pointer text-black">Home</li>
                            <li className="hover:underline cursor-pointer text-black">About</li>
                            <li className="hover:underline cursor-pointer text-black">Contact</li>
                            <li className="hover:underline cursor-pointer text-black">Blog</li>
                        </ul>
                    </div>
                </div>

                {/* colllaps menu */}
                <div className={`${isOpen ? '-right-0' : '-right-[100%]'} md:hidden fixed top-12 h-[100vh] w-full flex justify-center items-center bg-white duration-200`}>
                    <ul className="flex flex-col gap-3 text-center p-5 font-semibold">
                        <li className="hover:underline cursor-pointer text-black">Home</li>
                        <li className="hover:underline cursor-pointer text-black">About</li>
                        <li className="hover:underline cursor-pointer text-black">Contact</li>
                        <li className="hover:underline cursor-pointer text-black">Blog</li>
                    </ul>
                </div>

                {/* collaps menu icon */}
                <button className="block md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar2;