import React from 'react';

const Navbar = ({ fullpageApi }) => {
    return (
        <div className="absolute z-10 top-0 text-white flex justify-between w-full p-2">
            <h1>Mary Hsieh</h1>
            <ul className="font-light flex">
                <li
                    className="px-1 cursor-pointer"
                    onClick={() => {
                        fullpageApi.moveTo(2);
                    }}
                >
                    ABOUT
                </li>
                <li
                    className="px-1 cursor-pointer"
                    onClick={() => {
                        fullpageApi.moveTo(3);
                    }}
                >
                    PORTFOLIO
                </li>
                <li
                    className="px-1 cursor-pointer"
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
