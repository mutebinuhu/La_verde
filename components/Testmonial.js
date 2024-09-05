"use client"
import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Testimonial = () => {
    const reviews = [
        {
            "name":"Walid Turki",
            "info":"The company has very good service, Joy was very co-operative and provided all required support to make the deal done.",
            "img":"https://avatar.iran.liara.run/public/boy",
            "rating":5
        },
        {
            "name":"SeekTruth",
            "info":"Quick and professional assistance from Joy @ La Verde. Even after signing the rent contract, she was providing assistance regarding my moving in. Two thumbs up",
            "img":"https://avatar.iran.liara.run/public/boy",
            "rating":5
        },
        {
            "name":"Zeyad Albakeri",
            "info":"Gentle dealing and Professional. Thanks",
            "img":"https://avatar.iran.liara.run/public/boy",
            "rating":5
        },
        {
            "name":"Mona Nasr",
            "info":"Thank you for your efforts and good treatment, and I wish you success",
            "img":"https://avatar.iran.liara.run/public/girl",
            "rating":5

        },
        {
            "name":"Ricardo Thompson",
            "info":"Mary joy was very professional and gave me frequent update on the apartment, wonderful customer service",
            "img":"https://avatar.iran.liara.run/public/boy",
            "rating":5
        },
        {
            "name":"JO",
            "info":"Absolutely wonderful experience working with La Verde! They made the process of buying our first home in Reem Island so smooth and stress-free. Their attention to detail and customer service are unmatched. Highly recommend 😊",
            "img":"https://avatar.iran.liara.run/public/boy",
            "rating":5

        }
    ]
    let start = 1000;
    return (
        <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
            <div className="container px-6 py-12 mx-auto">
                <div className="">
                <h2 className="text-xl  font-bold text-[#FFA72A]">
          Testimonials
        </h2>
        <p className="text-gray-600 text-3xl font-bold">What Customers are saying</p>

                   

                    <div className="relative mt-10 md:mt-24 md:order-2">
                        <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                            <div className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"
                                style={{
                                    background: 'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)'
                                }} />
                        </div>

                        <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
                            {reviews.map((_, index) => {
                                   

                                   return(
                                    <Fade  delay={300} damping={4} key={index} className="flex flex-col overflow-hidden shadow-xl">
                             
                                    <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                                        <div className="flex-1">
                                            <div className="flex items-center">
                                                {[...Array(_.rating)].map((_, i) => (
                                                    <svg key={i} className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                ))}
                                            </div>

                                            <blockquote className="flex-1 mt-8">
                                                <p className="text-lg leading-relaxed text-gray-900 font-pj">{`“${_.info}”`}</p>
                                            </blockquote>
                                        </div>

                                        <div className="flex items-center mt-8">
                                            <img className="flex-shrink-0 object-cover rounded-full w-11 h-11" src={`${_.img}`} alt="" title='The images used here are for Demonstration purposes, real images can be found on our business profile on google' />
                                            <div className="ml-4">
                                                <p className="text-base font-bold text-gray-900 font-pj">Name: {_.name}</p>
                                            </div>
                                        </div>
                                    </div>
                     
                                </Fade>
                                   )
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
