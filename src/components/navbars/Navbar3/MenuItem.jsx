import { useState } from "react";
import { Link } from "react-router-dom";

const MenuItem = () => {
    const [currentItem, setCurrentItem] = useState('');
    const [currentCat, setCurrentCat] = useState('');

    const menuItems = [
        {
            id: 1,
            name: 'Gents',
            submenu: true,
            subCats: [
                {
                    subCatHead: 'Cloths',
                    subItems: [
                        { itemName: 'T-shirt', itemLink: '/' },
                        { itemName: 'Full shirt', itemLink: '/' },
                        { itemName: 'Pant', itemLink: '/' },
                        { itemName: 'Shorts', itemLink: '/' },
                    ]
                },
                {
                    subCatHead: 'Accesories',
                    subItems: [
                        { itemName: 'Hat', itemLink: '/' },
                        { itemName: 'Ring', itemLink: '/' },
                        { itemName: 'Watch', itemLink: '/' },
                        { itemName: 'Shoes', itemLink: '/' },
                        { itemName: 'Perfume', itemLink: '/' },
                    ]
                },
                {
                    subCatHead: 'Traditionals',
                    subItems: [
                        { itemName: 'Panjabi', itemLink: '/' },
                        { itemName: 'Lungi', itemLink: '/' },
                    ]
                },
            ]
        },
        {
            id: 2,
            name: 'Ladies',
            submenu: true,
            subCats: [
                {
                    subCatHead: 'Cloths',
                    subItems: [
                        { itemName: 'T-shirt', itemLink: '/' },
                        { itemName: 'Kurti', itemLink: '/' },
                        { itemName: 'Pant', itemLink: '/' },
                        { itemName: 'Shorts', itemLink: '/' },
                    ]
                },
                {
                    subCatHead: 'Accesories',
                    subItems: [
                        { itemName: 'Mirror', itemLink: '/' },
                        { itemName: 'shoes', itemLink: '/' },
                        { itemName: 'bag', itemLink: '/' },
                    ]
                },
                {
                    subCatHead: 'Traditionals',
                    subItems: [
                        { itemName: 'Sharee', itemLink: '/' },
                    ]
                },
                {
                    subCatHead: 'Cosmetics',
                    subItems: [
                        { itemName: 'Lipstick', itemLink: '/' },
                        { itemName: 'Eye liner', itemLink: '/' },
                        { itemName: 'Brush', itemLink: '/' },
                        { itemName: 'Nail polish', itemLink: '/' },
                    ]
                },
            ]
        },
        {
            id: 3,
            name: 'KiDs',
            submenu: true,
            subCats: [
                {
                    subCatHead: 'Cloths',
                    subItems: [
                        { itemName: 'T-shirt', itemLink: '/' },
                        { itemName: 'Full shirt', itemLink: '/' },
                        { itemName: 'Pant', itemLink: '/' },
                        { itemName: 'Winter wears', itemLink: '/' },
                    ]
                },
                {
                    subCatHead: 'Toys',
                    subItems: [
                        { itemName: 'Car', itemLink: '/' },
                        { itemName: 'Knowledge', itemLink: '/' },
                        { itemName: 'Pool', itemLink: '/' },
                        { itemName: 'Under 3', itemLink: '/' },
                    ]
                },
                {
                    subCatHead: 'Accesories',
                    subItems: [
                        { itemName: 'Stand', itemLink: '/' },
                        { itemName: 'Hanger belt', itemLink: '/' },
                        { itemName: 'Baby carier', itemLink: '/' },
                        { itemName: 'Shoes', itemLink: '/' },
                    ]
                },
            ]
        },

    ]

    return (
        <>
            {
                menuItems.map(item => (
                    <div className="w-full" key={item.id}>
                        <div className="group">
                            <li className="p-5 cursor-pointer text-slate-300 hover:text-white flex items-center justify-between group"
                                onClick={() => { currentItem !== item.name ? setCurrentItem(item.name) : setCurrentItem(''); setCurrentCat(''); }}
                            >{item.name}

                                <span className={`md:mr-0 mr-5 md:ml-2 md:hidden ${currentItem == item.name ? "rotate-[60deg]" : ""} transition`}>
                                    ▼
                                </span>
                                <span className="md:ml-2 md:block hidden group-hover:rotate-[60deg] transition text-[12px]">
                                    ▼
                                </span>

                            </li>
                            {/* dropped mega menu */}
                            {item.submenu &&
                                <div className="absolute w-full left-0 bg-slate-900 hidden group-hover:md:block hover:md:block">
                                    <div className="px-5 md:px-10 py-5 grid grid-cols-5 max-w-7xl mx-auto">
                                        {item.subCats.map(scat => (
                                            <div className="">
                                                <h2 className="text-slate-300 text-xl mb-5">{scat.subCatHead}</h2>

                                                {scat.subItems.map(item =>
                                                    <Link to={item.itemLink}>
                                                        <li className="text-slate-300 font-normal hover:underline">{item.itemName}</li>
                                                    </Link>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>}
                        </div>
                        {/* mobile mega menu items */}
                        <div className={`${currentItem == item.name ? 'md:hidden' : 'hidden'} border-t-[1px]`}>
                            {item.subCats.map(scat =>
                                <div className="w-full pl-10">

                                    <div>
                                        <h1 className="font-semibold my-5 text-slate-300 flex items-center justify-between"
                                            onClick={() => { currentCat !== scat.subCatHead ? setCurrentCat(scat.subCatHead) : setCurrentCat('') }}
                                        >{scat.subCatHead}

                                            <span className={`mr-5 md:hidden ${currentCat == scat.subCatHead ? "rotate-[60deg]" : ""} transition`}>
                                                ▼
                                            </span>

                                        </h1>
                                    </div>
                                    <div className={`${currentCat == scat.subCatHead ? 'md:hidden' : 'hidden'} pl-5`}>
                                        {scat.subItems.map(item =>
                                            <li className="my-3 font-normal text-slate-300">{item.itemName}</li>
                                        )}
                                    </div>

                                </div>
                            )}
                        </div>
                    </div>
                ))
            }
        </>
    );
};

export default MenuItem;