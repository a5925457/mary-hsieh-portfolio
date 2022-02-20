import React, { useRef } from 'react';

const Banner = () => {
    const ref = useRef();

    const transformText = ref.current?.innerText.split('').map((char, i) => {
        return (
            <span
                key={i}
                className="absolute left-1/2 text-theme-deep-orange origin-top-left-0-145 lg:origin-top-left-0-190"
                style={{ transform: `rotate(${i * 7}deg)` }}
            >
                {char}
            </span>
        );
    });

    return (
        <div className="banner bg-theme-yellow m-auto relative w-[290px] h-[290px] lg:w-[380px] lg:h-[380px] rounded-full flex justify-center items-center">
            <div className="bg-theme-orange absolute w-[330px] h-[330px]  lg:w-[420px] lg:h-[420px] rounded-full"></div>
            <div className="bg-theme-yellow absolute w-[300px] h-[300px] lg:w-[380px] lg:h-[380px] rounded-full"></div>
            <div className="bg-theme-orange absolute w-[230px] h-[230px] lg:w-[300px] lg:h-[300px] rounded-full"></div>
            <div
                style={{ backgroundImage: `url(${'assets/images/icon.svg'})` }}
                className="logo absolute w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] bg-cover"
            ></div>
            <div className="text absolute w-full h-full animate-spin-slow">
                <div ref={ref} className="hidden">
                    Hi, I'm Mary. I'm a front-end developer.
                </div>
                <p className="text-[18px] lg:text-[24px] font-medium select-none">{transformText}</p>
            </div>
        </div>
    );
};

export default Banner;
