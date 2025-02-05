import React from 'react'
import aboutMeImg from '../../assets/about-me-img.jpg'
import effectImg from '../../assets/effect-img.svg'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import Swal from 'sweetalert2'
const AboutMe = () => {

    // get in touch button
    const handleGetInTouch = () => {
        Swal.fire({
            title: "I'm Working on it",
            icon: "info",
            draggable: true
        });
    }

    return (
        <>

            <section>
                <div className='max-w-6xl mx-auto py-20'>

                    <div className='pb-12'>
                        <h2 className='text-center text-4xl font-bold text-white'>ABOU<span className='text-blue-300 border-b-4'>T ME</span></h2>
                    </div>

                    <div className='md:flex md:gap-3 px-6'>



                        <div className="md:w-6/12  about_me_description_side mt-3 md:mt-0">
                            <h3 className='
                            tracking-widest
                            bg-[#063560] w-fit text-white uppercase px-2 py-1 rounded-sm text-lg font-semibold'>REJAUL ISLAM</h3>
                            <h2 className='uppercase text-2xl md:text-3xl lg:text-5xl font-bold text-white text-opacity-80'>i am available for</h2>
                            <h2 className='uppercase text-2xl md:text-3xl lg:text-5xl font-bold text-blue-700 my-3'>ui design</h2>
                            <h2 className='uppercase text-2xl md:text-3xl lg:text-5xl font-bold text-white text-opacity-80'>design projects</h2>

                            <p className='text-[16px] my-6 text-white text-opacity-85'>I am a passionate front-end web developer dedicated to crafting responsive, user-friendly websites. With expertise in HTML, CSS, JavaScript, and modern frameworks like React, I create engaging digital experiences. Focused on clean design, performance, and accessibility, I constantly learn and adapt to evolving technologies to deliver exceptional solutions that bring ideas to life. <br /> <Link className='flex items-center gap-3 mt-2 underline text-blue-500'>See more about me <FaArrowRight className='text-xs'></FaArrowRight> </Link></p>

                            {/* some another experience */}
                            <div className='flex gap-3'>
                                <div className='text-center border-[1px] border-[#041A30] rounded-md py-5 px-3 bg-white/5 backdrop-blur-md border-white/50'>
                                    <h2 className='text-4xl lg:text-6xl font-bold text-white text-opacity-75'>8+</h2>
                                    <p className='text-sm text-white mt-2'>Technology Knowledge</p>
                                </div>
                                <div className='text-center border-[1px] border-[#041A30] rounded-md py-5 px-3 bg-white/5 backdrop-blur-md border-white/50'>
                                    <h2 className='text-4xl lg:text-6xl font-bold text-white text-opacity-75'>2+</h2>
                                    <p className='text-sm text-white mt-2'>Years Coding Journy</p>
                                </div>
                            </div>

                            <div className='mt-5'>
                                <button onClick={() => { { handleGetInTouch() } }} className='flex items-center
                                                         gap-4 text-lg font-semibold uppercase 
                                                         bg-[#0788FF] py-3 px-5 rounded-full
                                                            text-white hover:delay-100
                                                            hover:bg-black hover:bg-opacity-60  
                                                            transition-colors duration-200
                                                         '>GET IN TOUCH<FaArrowRight ></FaArrowRight></button>
                            </div>



                        </div>

                        <div className="md:w-6/12  about_me_image_side relative md:-order-1 mt-12 md:mt-0">
                            <div className='h-[400px] md:h-[640px] md:w-10/12 flex md:items-end p-8 md:p-0 '>
                                <img src={effectImg} alt="effect img" className='mt-24 md:mt-0' />
                            </div>

                            <div className='absolute top-0 right-0 mr-8  h-full'>
                                <img src={aboutMeImg} alt="developer image" className='h-[400px] md:h-[550px] rounded-lg' />
                            </div>

                        </div>

                        {/* action button */}



                    </div>

                </div>
            </section>


        </>
    )
}

export default AboutMe
