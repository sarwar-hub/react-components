import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar1 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const collapsMenu = <div className={`${isOpen ? '-right-0' : '-right-[300px]'} md:hidden block fixed top-14 w-[200px] bg-slate-900 duration-200`}>
        <ul className="flex flex-col gap-3 text-center p-5 font-semibold">
            <li className="hover:underline cursor-pointer text-gray-400 hover:text-white">Home</li>
            <li className="hover:underline cursor-pointer text-gray-400 hover:text-white">About</li>
            <li className="hover:underline cursor-pointer text-gray-400 hover:text-white">Contact</li>
            <li className="hover:underline cursor-pointer text-gray-400 hover:text-white">Blog</li>
        </ul>
    </div>

    return (
        <nav className="fixed z-20 top-0 left-0 bg-slate-900 w-full">
            <div className="h-[80px] flex justify-between items-center z-50 text-white lg:py-5 py-3 lg:px-10 px-5">
                {/* logo */}
                <div><span className="text-3xl font-bold">Logo</span></div>

                {/* large menu */}
                <div className="hidden md:flex flex-1 items-center justify-end">
                    <div className="flex-10">
                        <ul className="flex gap-8 font-semibold">
                            <li className="hover:underline cursor-pointer text-gray-400 hover:text-white">Home</li>
                            <li className="hover:underline cursor-pointer text-gray-400 hover:text-white">About</li>
                            <li className="hover:underline cursor-pointer text-gray-400 hover:text-white">Contact</li>
                            <li className="hover:underline cursor-pointer text-gray-400 hover:text-white">Blog</li>
                        </ul>
                    </div>
                </div>

                {/* colllaps menu */}
                <div className="">
                    {collapsMenu}
                </div>

                {/* collaps menu icon */}
                <button className="block md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar1;