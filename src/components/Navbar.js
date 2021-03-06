import React from 'react';

const Navbar = ({ fullpageApi }) => {
    return (
        <div className="absolute top-0 z-10 text-white flex justify-between w-full p-3 md:p-4 md:text-[18px]">
            <h1 className="cursor-pointer">Mary Hsieh</h1>
            <ul className="font-light flex">
                <li
                    className="px-1 cursor-pointer hover:text-theme-yellow"
                    onClick={() => {
                        fullpageApi.moveTo(2);
                    }}
                >
                    ABOUT
                </li>
                <li
                    className="px-1 cursor-pointer hover:text-theme-yellow"
                    onClick={() => {
                        fullpageApi.moveTo(3);
                    }}
                >
                    PORTFOLIO
                </li>
                <li
                    className="px-1 cursor-pointer hover:text-theme-yellow"
                    onClick={() => {
                        fullpageApi.moveTo(4);
                    }}
                >
                    CONTACT
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
