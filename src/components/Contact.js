import React from 'react';
import { Animated } from 'react-animated-css';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className="flex justify-center">
            <img
                className="absolute left-0 top-4 w-[120px] h-[120px] sm:w-[200px] sm:h-[200px]"
                src="assets/images/yellow-ball.svg"
                alt=""
            />
            <h2 className="w-[105px] absolute left-2 top-28 text-theme-deep-orange text-3xl rotate-90 sm:left-4 sm:top-44">
                CON<span className="text-white">TACT</span>
            </h2>
            <img
                className="z-10 absolute -right-10 top-20 w-[250px] sm:w-[350px] animate-floating-sm lg:animate-floating-lg"
                src="assets/images/orange-bar.svg"
                alt=""
            />
            <img
                className="absolute -right-4 top-60 w-[180px] sm:w-[400px] sm:right-8 animate-floating-sm-f lg:animate-floating-lg-f"
                src="assets/images/pink-bar.svg"
                alt=""
            />
            <img
                className="absolute left-1/3 top-64 w-[200px] sm:w-[400px] sm:top-72 sm:left-2/3 animate-floating-sm lg:animate-floating-lg"
                src="assets/images/orange-bar.svg"
                alt=""
            />
            <img
                className="z-10 absolute -left-12 bottom-32 w-[150px] sm:w-[250px] sm:-left-8 animate-floating-sm-f lg:animate-floating-lg-f"
                src="assets/images/pink-bar.svg"
                alt=""
            />
            <img
                className="z-10 absolute -right-20 bottom-20 w-[250px] sm:w-[350px] animate-floating-sm lg:animate-floating-lg"
                src="assets/images/yellow-bar.svg"
                alt=""
            />
            <Animated animationIn="fadeIn" animationInDuration={1500} animationInDelay={1500} isVisible={true}>
                <div className="mt-20 flex justify-center items-center flex-col md:flex-row ">
                    <a href="https://github.com/a5925457" target="_blank" rel="noreferrer">
                        <div className="rounded-full w-[150px] h-[150px] md:w-[220px] md:h-[220px] bg-white my-2 flex justify-center items-center hover:bg-[#fff5f1] transition duration-300 md:absolute md:left-1/4 md:bottom-1/4">
                            <i className="fa-brands fa-github text-6xl text-theme-pink sm:text-7xl"></i>
                        </div>
                    </a>
                    <Link
                        to="#"
                        onClick={(e) => {
                            window.location = 'mailto:a5925457@gmail.com';
                            e.preventDefault();
                        }}
                    >
                        <div className="rounded-full w-[150px] h-[150px] md:w-[220px] md:h-[220px] bg-white my-2 flex justify-center items-center hover:bg-[#fff5f1] transition duration-300 md:absolute md:left-2/4 md:top-1/4">
                            <i className="fa-solid fa-envelope text-6xl text-theme-pink sm:text-7xl"></i>
                        </div>
                    </Link>
                    <a href="tel:+886979491520">
                        <div className="rounded-full w-[150px] h-[150px] md:w-[220px] md:h-[220px] bg-white my-2 flex justify-center items-center hover:bg-[#fff5f1] transition duration-300 md:absolute md:left-3/4 md:top-1/2">
                            <i className="fa-solid fa-phone text-6xl text-theme-pink sm:text-7xl"></i>
                        </div>
                    </a>
                </div>
            </Animated>
        </div>
    );
};

export default Contact;
