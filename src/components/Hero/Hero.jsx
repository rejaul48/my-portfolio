import React from 'react'
import devImg from '../../assets/my-banner-img.png'
import { FaArrowRight, FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'
import Swal from 'sweetalert2'
const Hero = () => {


    // download cv button
    const handleDownloadCv = () =>{
        Swal.fire({
            title: "I'm Working on it",
            icon: "info",
            draggable: true
          });
    }

    return (
        <>

            <section className=' overflow-hidden'>
                <div className='max-w-6xl lg:h-[570px] mx-auto px-4 md:px-12 lg:px-4 xl:px-0 py-6'>

                    <div className='md:flex md:gap-3  
                  
                    '> 
                        <div className="md:w-7/12 information_side pt-10 md:pt-20">
                            <h3 className='
                            tracking-widest
                            bg-[#063560] w-fit text-white uppercase px-2 py-1 rounded-sm text-lg font-semibold'>REJAUL ISLAM</h3>
                            <h1 className='text-3xl lg:text-6xl uppercase
                            font-bold my-3 text-white text-opacity-80
                            '>hey! i'm Rejaul</h1>
                            <h1 className='text-3xl lg:text-6xl font-bold uppercase my-7 text-blue-600'>I'm a

                                <span className='px-5'>
                                    <TypeAnimation
                                        sequence={[
                                            'DESIGNER',
                                            1000,
                                            'DEVELOPER',
                                            1000,

                                        ]}
                                        wrapper="span"
                                        speed={50}
                                        className='nd:text-6xl'
                                        style={{ display: 'inline-block' }}
                                        repeat={Infinity}
                                    />
                                </span>
                            </h1>

                            <p className='text-white text-opacity-70 
                            md:w-9/12 text-xl
                            '>
                                Creative front-end developer crafting engaging, user-friendly web experiences with modern designs and clean, efficient code.
                            </p>

                            {/* social media links section */}
                            <div className='mt-5 md:flex items-center gap-5'>
                                <button onClick={() => {handleDownloadCv()}} className='flex items-center
                                 gap-4 text-sm md:text-lg font-semibold uppercase 
                                 bg-[#0788FF] py-3 px-5 rounded-full
                                    text-white hover:delay-100
                                    hover:bg-black hover:bg-opacity-60  
                                    transition-colors duration-200
                                 '>Download CV <FaArrowRight ></FaArrowRight></button>

                                {/* social links */}
                                <ul className='flex items-center gap-2 mt-4 md:mt-0'>
                                    <li className='bg-[#0788FF] w-fit p-2 rounded-full border-2 border-white'>
                                        <Link to={'https://facebook.com/rejaulislam48'} target='_blank'>
                                            <FaFacebookF className='text-2xl text-white'></FaFacebookF>
                                        </Link>
                                    </li>
                                    <li className='bg-pink-400 w-fit p-2 rounded-full border-2 border-white'>
                                        <Link to={'https://github.com/rejaul48'}  target='_blank'><FaGithub className='text-2xl text-white'></FaGithub> </Link>
                                    </li>
                                    <li className='bg-[#0788FF] w-fit p-2 rounded-full border-2 border-white'>
                                        <Link to={'https://www.linkedin.com/in/rejaulislam48'} target='_blank'><FaLinkedinIn className='text-2xl text-white'></FaLinkedinIn></Link>
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="md:w-5/12 dev_image_side pt-16 md:pt-12 px-12 md:px-0">
                            <img className='scale-125 w-full h-full'  src={devImg} alt="developer image" />
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default Hero
