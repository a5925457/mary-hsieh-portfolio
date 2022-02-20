import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './works.css';

// import required modules
import { Pagination, Navigation } from 'swiper';

export default function Works() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="overflow-hidden w-full h-[200px] rounded-lg relative bg-slate-100">
                        <img
                            className="w-full h-full object-top blur-sm opacity-60"
                            src="assets/images/frontend/taiwan-tour-guide_tai-walk.png"
                            alt=""
                        />
                        <p className="absolute top-1/2 w-full text-sm -translate-y-2/4 font-medium text-theme-brown">
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
                        </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="overflow-hidden w-full h-[200px] rounded-lg relative bg-slate-100">
                        <img
                            className="w-full h-full object-top blur-sm opacity-60"
                            src="assets/images/frontend/mary-blog-project.png"
                            alt=""
                        />
                        <p className="absolute top-1/2 w-full text-sm -translate-y-2/4 font-medium text-theme-brown">
                            MERN Stack App
                            <br />
                            "Mary's blog"
                            <br />
                            with React &amp; Tailwind CSS
                            <br />
                            <div className="inline-flex rounded-lg shadow-sm mt-3" role="group">
                                <a href="https://mary-blog-project.netlify.app/" target="_blank" rel="noreferrer">
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
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
