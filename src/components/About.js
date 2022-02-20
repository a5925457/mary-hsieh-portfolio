import React from 'react';
import { Animated } from 'react-animated-css';

const About = () => {
    return (
        <div className="flex justify-center">
            <Animated animationIn="fadeIn" animationInDuration={1500} animationInDelay={1200} isVisible={true}>
                <img
                    className="absolute left-0 top-4 w-[120px] h-[120px] sm:w-[200px] sm:h-[200px]"
                    src="assets/images/yellow-ball.svg"
                    alt=""
                />
                <h2 className="w-[105px] absolute left-2 top-28 text-theme-deep-orange text-3xl rotate-90 sm:left-4 sm:top-44">
                    ABO<span className="text-white">UT</span>
                </h2>
            </Animated>
            <img
                className="z-10 absolute -right-10 top-36 w-[180px] sm:w-[230px] animate-floating-sm lg:animate-floating-lg"
                src="assets/images/yellow-bar.svg"
                alt=""
            />
            <img
                className="z-10 absolute left-0 top-64 w-[200px] sm:w-[250px] sm:left-1/3 animate-floating-sm lg:animate-floating-lg"
                src="assets/images/pink-bar.svg"
                alt=""
            />
            <img
                className="z-10 absolute -right-8 bottom-36 w-[300px] sm:w-[350px] animate-floating-sm lg:animate-floating-lg"
                src="assets/images/pink-bar.svg"
                alt=""
            />
            <img
                className="z-10 absolute -left-20 bottom-20 w-[200px] sm:w-[320px] sm:-left-10 animate-floating-sm lg:animate-floating-lg"
                src="assets/images/orange-bar.svg"
                alt=""
            />
            <Animated animationIn="fadeIn" animationInDuration={1500} animationInDelay={1500} isVisible={true}>
                <div className="mt-20 shrink-0 rounded-full w-[450px] h-[450px] sm:w-[600px] sm:h-[600px] sm:ml-[300px] lg:ml-[500px] bg-white flex justify-center items-center">
                    <p className="p-12 text-theme-brown text-base sm:text-lg">
                        您好，我是謝慕恩，2021年畢業於國立臺灣師範大學的科技應用與人力資源發展學系設計與科技組，目前在資策會的前端工程師養成班進修，朝著成為前端工程師的路邁進。
                    </p>
                </div>
            </Animated>
        </div>
    );
};

export default About;
