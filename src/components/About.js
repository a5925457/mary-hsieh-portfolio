import React from 'react';

const About = () => {
    return (
        <div className="flex justify-center">
            <img
                className="absolute left-0 top-4 w-[120px] h-[120px] sm:w-[200px] sm:h-[200px]"
                src="assets/images/yellow-ball.svg"
                alt=""
            />
            <h2 className="w-[105px] absolute left-2 top-28 text-theme-deep-orange text-3xl rotate-90 sm:left-4 sm:top-44">
                ABO<span className="text-white">UT</span>
            </h2>
            <img
                className="z-10 absolute -right-10 top-36 w-[180px] sm:w-[230px] animate-floating-sm lg:animate-floating-lg"
                src="assets/images/yellow-bar.svg"
                alt=""
            />
            <img
                className="z-10 absolute left-0 top-48 w-[200px] sm:w-[250px] sm:left-1/3 animate-floating-sm lg:animate-floating-lg"
                src="assets/images/pink-bar.svg"
                alt=""
            />
            <img
                className="z-10 absolute -right-8 bottom-24 w-[300px] sm:w-[350px] animate-floating-sm lg:animate-floating-lg"
                src="assets/images/pink-bar.svg"
                alt=""
            />
            <img
                className="z-10 absolute -left-20 bottom-20 w-[200px] sm:w-[320px] sm:-left-10 animate-floating-sm lg:animate-floating-lg"
                src="assets/images/orange-bar.svg"
                alt=""
            />
            <div className="mt-20 text-theme-brown tracking-wider shrink-0 rounded-full w-[450px] h-[450px] sm:w-[600px] sm:h-[600px] sm:ml-[300px] lg:ml-[500px] bg-white flex justify-center items-center flex-col">
                <span className="ch-font pb-1 border-b-2 mb-2 border-theme-pink">簡介</span>
                <p className="ch-font px-12 text-base sm:text-lg  text-left mb-2">
                    我是謝慕恩，2021年畢業於國立臺灣師範大學的科技應用與人力資源發展學系，目前在資策會的前端班進修，朝著成為前端工程師的路邁進。
                </p>
                <span className="ch-font pb-1 border-b-2 mb-2 border-theme-pink">技能</span>
                <dl className="flex">
                    <div className="mx-6">
                        <dt>
                            <i className="fa-solid fa-caret-right mr-2"></i>Front-End
                        </dt>
                        <dd>JavaScript ES6</dd>
                        <dd>React.js</dd>
                        <dd>Bootstrap, Tailwind CSS</dd>
                        <dd>SASS / SCSS</dd>
                    </div>
                    <div className="mx-6">
                        <dt>
                            <i className="fa-solid fa-caret-right mr-2"></i>Back-End
                        </dt>
                        <dd>PHP</dd>
                        <dd>Node.js</dd>
                    </div>
                </dl>
            </div>
        </div>
    );
};

export default About;
