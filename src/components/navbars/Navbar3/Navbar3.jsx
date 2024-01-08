import { useState } from "react";
import MenuItem from "./MenuItem";

const Navbar3 = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-slate-900">
            <div className="px-5 md:px-10 flex items-center justify-between max-w-7xl mx-auto">
                <div className="py-2 z-50">
                    <span className='text-white text-3xl my-5 font-bold cursor-pointer'>Logo</span>
                </div>
                {/* large screen menu */}
                <div className="hidden md:block">
                    <ul className="flex items-center font-semibold">
                        <li className="p-5 cursor-pointer text-slate-300 hover:text-white">Home</li>
                        <MenuItem />
                    </ul>
                </div>
                <div className="hidden md:block">
                    <button className="p-3 bg-slate-300 hover:bg-white text-slate-900 font-semibold">Get Started</button>
                </div>
                {/* mobile menu */}
                <div className={`md:hidden absolute top-0 py-20 w-full bg-slate-900 duration-500 ${isOpen ? 'left-0' : '-left-full'}`}>
                    <ul className="flex flex-col items-start font-semibold ">
                        <li className="w-full p-5 cursor-pointer text-slate-300 hover:text-white">Home</li>
                        <MenuItem />
                    </ul>
                </div>
                {/* collaps icon */}
                <div className="block md:hidden cursor-pointer text-slate-300 text-3xl z-50" onClick={() => setIsOpen(!isOpen)}>
                    <span>{isOpen ? '×' : '='}</span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar3;