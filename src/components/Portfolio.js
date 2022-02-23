import React, { useState } from 'react';
import Works from './Works';
import Loading from './Loading';

const illustration = [
    'assets/images/illustration/1.png',
    'assets/images/illustration/2.png',
    'assets/images/illustration/3.png',
    'assets/images/illustration/4.png',
    'assets/images/illustration/5.png',
    'assets/images/illustration/6.png',
    'assets/images/illustration/7.png',
    'assets/images/illustration/8.png',
    'assets/images/illustration/9.png',
];

const Portfolio = () => {
    const [cat, setCat] = useState('frontend');
    const [isLoading, setIsLoading] = useState(true);
    const [modal, setModal] = useState(false);
    const [tempimgSrc, setTempimgSrc] = useState('');

    const getImg = (imgSrc) => {
        setTempimgSrc(imgSrc);
        setModal(true);
    };
    let imagesLoaded = 0;
    const renderIllustration = illustration.map((image, i) => {
        return (
            <React.Fragment key={i}>
                <div
                    onClick={() => {
                        setModal(false);
                    }}
                    style={{ top: '200vh' }}
                    className={
                        modal
                            ? 'w-screen h-screen fixed left-0 flex justify-center items-center bg-black visible opacity-100 scale-100 overflow-hidden z-50 transition-all duration-300'
                            : 'w-screen h-screen fixed left-0 flex justify-center items-center bg-black invisible opacity-0 scale-0 overflow-hidden z-50 transition-all duration-300'
                    }
                >
                    <img
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                        style={{ maxWidth: '100%', maxHeight: '100%', lineHeight: '0' }}
                        className="w-auto h-auto block py-2 m-auto"
                        src={tempimgSrc}
                        alt=""
                    />
                    <i
                        onClick={() => {
                            setModal(false);
                        }}
                        className="fa-solid fa-xmark fixed top-5 right-5 p-2 text-white cursor-pointer text-lg hover:text-gray-400"
                    ></i>
                </div>
                <div
                    onClick={() => getImg(image)}
                    className={`transition-all duration-500 hover:opacity-70 cursor-pointer w-1/3 h-[100px] p-1 sm:h-[140px] sm:p-2 ${
                        isLoading && 'hidden'
                    }`}
                >
                    <img
                        onLoad={() => {
                            imagesLoaded++;
                            if (imagesLoaded === illustration.length) {
                                setIsLoading(false);
                            }
                        }}
                        className="rounded-full object-cover w-full h-full"
                        src={image}
                        alt=""
                    />
                </div>
            </React.Fragment>
        );
    });
    return (
        <div className="flex justify-center">
            <img
                className="absolute right-0 top-4 w-[120px] h-[120px] sm:w-[200px] sm:h-[200px]"
                src="assets/images/pink-ball.svg"
                alt=""
            />
            <h2 className="w-[105px] absolute right-16 top-16 text-white text-3xl sm:right-32 sm:top-28">
                POR<span className="text-theme-deep-orange">TFOLIO</span>
            </h2>
            <img
                className="z-10 absolute -left-10 top-36 w-[200px] sm:w-[250px] sm:-left-20 animate-floating-sm lg:animate-floating-lg"
                src="assets/images/yellow-bar.svg"
                alt=""
            />
            <img
                className=" absolute right-0 top-56 w-[200px] sm:w-[320px] sm:left-1/2 animate-floating-sm lg:animate-floating-lg"
                src="assets/images/orange-bar.svg"
                alt=""
            />
            <img
                className="z-10 pointer-events-none absolute -left-8 bottom-32 w-[200px] sm:w-[350px] sm:-left-40 animate-floating-sm lg:animate-floating-lg"
                src="assets/images/pink-bar.svg"
                alt=""
            />
            <img
                className="z-10 absolute -left-20 bottom-28 w-[200px] sm:w-[320px] sm:left-2/3 animate-floating-sm lg:animate-floating-lg"
                src="assets/images/yellow-bar.svg"
                alt=""
            />
            <img
                className="z-10 absolute -right-20 bottom-20 w-[200px] sm:w-[350px] sm:-right-10 animate-floating-sm lg:animate-floating-lg"
                src="assets/images/orange-bar.svg"
                alt=""
            />
            <div className="mt-20 shrink-0 rounded-full w-[450px] h-[450px] sm:w-[600px] sm:h-[600px] sm:mr-[300px] lg:mr-[500px] bg-white flex justify-center items-center relative">
                <div className="absolute top-8 text-sm">
                    <button
                        className={`transition text-theme-deep-orange hover:text-theme-pink focus:outline-none px-3 py-2 rounded-2xl ${
                            cat === 'frontend' ? 'bg-theme-yellow text-theme-pink' : ''
                        }`}
                        onClick={() => {
                            setCat('frontend');
                        }}
                    >
                        Front-end project
                    </button>
                    <button
                        className={`transition text-theme-deep-orange hover:text-theme-pink focus:outline-none px-3 py-2 rounded-2xl ${
                            cat === 'illustration' ? 'bg-theme-yellow text-theme-pink' : ''
                        }`}
                        onClick={() => {
                            setCat('illustration');
                        }}
                    >
                        Illustration
                    </button>
                </div>
                <div className="p-20 -m-2 sm:m-2 flex flex-wrap">
                    {cat === 'frontend' ? (
                        <>
                            <Works />
                            <div className="hidden md:flex md:gap-6">
                                <div className="overflow-hidden w-[250px] h-[150px] rounded-lg relative bg-slate-100 group">
                                    <img
                                        style={{ transitionDuration: '5s' }}
                                        className="w-full object-top blur-sm opacity-60 object-cover group-hover:-translate-y-2/4 transition-all"
                                        src="assets/images/frontend/taiwan-tour-guide_tai-walk.png"
                                        alt=""
                                    />
                                    <div className="select-none text-center absolute top-20 w-full text-sm -translate-y-2/4 font-medium text-theme-brown">
                                        Responsive Web Design
                                        <br />
                                        "Tai Walk"
                                        <br />
                                        with JavaScript / SCSS / Fetch API
                                        <br />
                                        <div className="inline-flex rounded-lg shadow-sm mt-3" role="group">
                                            <a
                                                href="https://a5925457.github.io/taiwan-tour-guide_tai-walk/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center py-2 px-4 text-sm font-medium bg-white rounded-l-2xl border-r border-theme-orange hover:bg-[#fffbf9] text-theme-deep-orange hover:text-theme-orange focus:z-10 focus:ring-2 focus:ring-theme-orange focus:text-theme-orange"
                                                >
                                                    <i className="fa-solid fa-desktop mr-2"></i>
                                                    Demo
                                                </button>
                                            </a>
                                            <a
                                                href="https://github.com/a5925457/taiwan-tour-guide_tai-walk"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center py-2 px-4 text-sm font-medium bg-white rounded-r-2xl border-l border-theme-orange hover:bg-[#fffbf9]  text-theme-deep-orange hover:text-theme-orange focus:z-10 focus:ring-2 focus:ring-theme-orange focus:text-theme-orange"
                                                >
                                                    <i className="fa-solid fa-code mr-2"></i>
                                                    Code
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="overflow-hidden w-[250px] h-[150px] rounded-lg relative bg-slate-100 group">
                                    <img
                                        style={{ transitionDuration: '5s' }}
                                        className="w-full object-top blur-sm opacity-60 object-cover group-hover:-translate-y-2/4 transition-all"
                                        src="assets/images/frontend/mary-blog-project.png"
                                        alt=""
                                    />
                                    <div className="select-none text-center absolute top-20 w-full text-sm -translate-y-2/4 font-medium text-theme-brown">
                                        MERN Stack App
                                        <br />
                                        "Mary's blog"
                                        <br />
                                        with React &amp; Tailwind CSS
                                        <br />
                                        <div className="inline-flex rounded-lg shadow-sm mt-3" role="group">
                                            <a
                                                href="https://mary-blog-project.netlify.app/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center py-2 px-4 text-sm font-medium bg-white rounded-l-2xl border-r border-theme-orange hover:bg-[#fffbf9] text-theme-deep-orange hover:text-theme-orange focus:z-10 focus:ring-2 focus:ring-theme-orange focus:text-theme-orange"
                                                >
                                                    <i className="fa-solid fa-desktop mr-2"></i>
                                                    Demo
                                                </button>
                                            </a>
                                            <a
                                                href="https://github.com/a5925457/mary-blog-project"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center py-2 px-4 text-sm font-medium bg-white rounded-r-2xl border-l border-theme-orange hover:bg-[#fffbf9]  text-theme-deep-orange hover:text-theme-orange focus:z-10 focus:ring-2 focus:ring-theme-orange focus:text-theme-orange"
                                                >
                                                    <i className="fa-solid fa-code mr-2"></i>
                                                    Code
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            {isLoading ? <Loading /> : null}
                            {renderIllustration}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
