import React from 'react';
import { useNavigate } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";


// import required modules
import { Autoplay } from "swiper";
import useDoctors from '../../hooks/useDoctors';


const HomeSlider = () => {
    const [doctors] = useDoctors();
    const navigate = useNavigate();
    // const Populer = doctors?.filter(data => data?.rating?.total_rating / data?.rating?.total_people > 3.50);
    // console.log(Populer);

    return (
        <div className='container w-full h-full mx-auto py-10'>
            <div className="flex flex-col pb-7 md:flex-row justify-between items-center gap-3 px-5">
                <div className="">
                    <h1 className="text-3xl md:text-6xl font-bold fw-bold capitalize" style={{ fontFamily: "Rajdhani" }}>Our Doctors </h1>
                </div>
            </div>

            <div className="py-10 px-5 w-full mx-auto">
                <>
                    <Swiper
                        loop={true}
                        speed={5000}
                        autoplay={{
                            delay: 2,
                            disableOnInteraction: false,
                        }}
                        slidesPerView={4}
                        spaceBetween={30}
                        modules={[Autoplay]}
                        className={`mySwiper w-full mx-auto`}
                        breakpoints={{
                            320: {
                                // width: 576,
                                slidesPerView: 1,
                            },
                            480: {
                                // width: 576,
                                slidesPerView: 1,
                            },
                            576: {
                                // width: 576,
                                slidesPerView: 2,
                            },
                            768: {
                                // width: 768,
                                slidesPerView: 3,
                            },
                            992: {
                                // width: 768,
                                slidesPerView: 4,
                            },
                        }}

                    >
                        {
                            doctors?.map(data => (
                                <SwiperSlide>
                                    <div className="w-full h-full mx-auto group bg-gray-200 rounded-xl duration-200 overflow-hidden">
                                        <div className="w-full h-[60%] p-5 overflow-hidden">
                                            <img src={(data?.sex === "male" && "https://i.ibb.co/TLqKPLH/1024px-Male-Doctor-Flat-Icon-Vector-svg.png") || (data?.sex === "female" && "https://i.ibb.co/09LdpB6/6620101.png")} alt="" className="w-5/6 mx-auto h-full object-cover group-hover:scale-110 duration-200 " />
                                        </div>
                                        <div className="space-y-2 h-32">
                                            <div className="flex flex-col text-start bg-gray-200 gap-2 pl-2">
                                                <h1 className="font-bold text-md">{data?.name}</h1>
                                                <p className="text-sm font-semibold md:text-md">{data?.title}</p>
                                            </div>
                                            <p className="text-sm mt-2 text-start pl-2">{data?.organization.slice(0,50)}</p>
                                            {/* <p className='flex items-center justify-between gap-2'>
                                                <div className="flex items-center gap-2">
                                                    <div className="rating">
                                                        {

                                                            Math.ceil(data?.rating?.total_rating / data?.rating?.total_people) === 1 &&
                                                            <div className="rating">
                                                                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-yellow-500" checked />
                                                                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
                                                                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
                                                                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
                                                                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
                                                            </div>

                                                        }
                                                        {

                                                            Math.ceil(data?.rating?.total_rating / data?.rating?.total_people) === 2 &&
                                                            <div className="rating">
                                                                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-yellow-500" />
                                                                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-yellow-500" checked />
                                                                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
                                                                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
                                                                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
                                                            </div>

                                                        }
                                                        {

                                                            Math.ceil(data?.rating?.total_rating / data?.rating?.total_people) === 3 &&
                                                            <div className="rating">
                                                                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-yellow-500" />
                                                                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-yellow-500" />
                                                                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-yellow-500" checked />
                                                                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
                                                                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
                                                            </div>

                                                        }
                                                        {

                                                            Math.ceil(data?.rating?.total_rating / data?.rating?.total_people) === 4 &&
                                                            <div className="rating">
                                                                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-yellow-500" />
                                                                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-yellow-500" />
                                                                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-yellow-500" />
                                                                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-yellow-500" checked />
                                                                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
                                                            </div>

                                                        }
                                                        {

                                                            Math.ceil(data?.rating?.total_rating / data?.rating?.total_people) === 5 &&
                                                            <div className="rating">
                                                                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-yellow-500" />
                                                                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-yellow-500" />
                                                                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-yellow-500" />
                                                                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-yellow-500" />
                                                                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-yellow-500" checked />
                                                            </div>

                                                        }
                                                    </div>
                                                </div>

                                            </p> */}
                                        </div>
                                        <div className="">
                                            <button onClick={() => navigate(`/doctor/${data?.id}`)} className='text-xl w-full font-semibold bg-primary px-4 py-2'>Explore More</button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }

                    </Swiper>
                </>
            </div>



        </div>
    );
};

export default HomeSlider;