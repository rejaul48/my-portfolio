
import React, { useRef } from 'react'
import aboutMeImg from '../../assets/about-me-img.jpg'
import effectImg from '../../assets/effect-img.svg'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import { motion, useInView } from 'framer-motion';
// import Swal from 'sweetalert2'

const AboutMe = () => {
    // Ref for the sections
    const descriptionRef = useRef(null);
    const imageRef = useRef(null);
    const isDescriptionInView = useInView(descriptionRef, { once: false, amount: 0.3 });
    const isImageInView = useInView(imageRef, { once: false, amount: 0.3 });

    return (
        <>
            <section className='overflow-hidden'>
                <div className='max-w-6xl mx-auto py-20 overflow-hidden'>
                    <div className='pb-12'>
                        <h2 className='text-center text-4xl font-bold text-white'>ABOU<span className='text-blue-300 border-b-4'>T ME</span></h2>
                    </div>

                    <div className='md:flex md:gap-3 px-6'>

                        {/* About Me Right Side with Text */}
                        <motion.div
                            ref={descriptionRef}
                            initial={{ opacity: 0, x: 100 }}
                            animate={isDescriptionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 90 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className="md:w-6/12 about_me_description_side mt-3 md:mt-0 overflow-hidden"
                        >
                            <h3 className='tracking-widest bg-[#063560] w-fit text-white uppercase px-2 py-1 rounded-sm text-lg font-semibold'>
                                REJAUL ISLAM
                            </h3>
                            <h2 className='uppercase text-2xl md:text-3xl lg:text-5xl font-bold text-white text-opacity-80'>
                                I am available for
                            </h2>
                            <h2 className='uppercase text-2xl md:text-3xl lg:text-5xl font-bold text-blue-700 my-3'>
                                UI Design
                            </h2>
                            <h2 className='uppercase text-2xl md:text-3xl lg:text-5xl font-bold text-white text-opacity-80'>
                                Design Projects
                            </h2>

                            <p className='text-[16px] my-6 text-white text-opacity-85'>
                                I am a passionate front-end web developer dedicated to crafting responsive, user-friendly websites. With expertise in HTML, CSS, JavaScript, and modern frameworks like React, I create engaging digital experiences. Focused on clean design, performance, and accessibility, I constantly learn and adapt to evolving technologies to deliver exceptional solutions that bring ideas to life.
                                <br />
                                <Link to={'/about-me'} className='flex items-center gap-3 mt-2 underline text-blue-500'>
                                    See more about me <FaArrowRight className='text-xs' />
                                </Link>
                            </p>

                            {/* Additional Experience */}
                            <div className='flex gap-3'>
                                <div className='text-center border-[1px] border-[#041A30] rounded-md py-5 px-3 bg-white/5 backdrop-blur-md border-white/50'>
                                    <h2 className='text-4xl lg:text-6xl font-bold text-white text-opacity-75'>8+</h2>
                                    <p className='text-sm text-white mt-2'>Technology Knowledge</p>
                                </div>
                                <div className='text-center border-[1px] border-[#041A30] rounded-md py-5 px-3 bg-white/5 backdrop-blur-md border-white/50'>
                                    <h2 className='text-4xl lg:text-6xl font-bold text-white text-opacity-75'>2+</h2>
                                    <p className='text-sm text-white mt-2'>Years Coding Journey</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* About Me Left Side with Image */}
                        <motion.div
                            ref={imageRef}
                            initial={{ opacity: 0, y: 100 }}
                            animate={isImageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className="md:w-6/12 about_me_image_side relative md:-order-1 mt-12 md:mt-0"
                        >
                            <div className='h-[400px] md:h-[640px] md:w-10/12 flex md:items-end p-8 md:p-0 '>
                                <img src={effectImg} alt="effect img" className='mt-24 md:mt-0' />
                            </div>

                            <div className='absolute top-0 right-0 mr-8 h-full'>
                                <img src={aboutMeImg} alt="developer image" className='h-[400px] md:h-[550px] rounded-lg' />
                            </div>
                        </motion.div>

                    </div>

                </div>
            </section>
        </>
    );
}

export default AboutMe;
