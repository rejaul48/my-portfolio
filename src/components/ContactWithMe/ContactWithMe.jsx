import React, { useRef } from 'react'
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const ContactWithMe = () => {

    const form = useRef();

    // send mail to me

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_8p04wg2', 'template_wz54rff', form.current, {
                publicKey: 'ezMM8EA7HMYCpweLx',
            })
            .then(
                () => {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Your Message send to Rejaul Islam",
                        showConfirmButton: false,
                        timer: 1500
                    });
                },
                (error) => {
                    Swal.fire({
                        position: "top-center",
                        icon: "error",
                        title: "Something went wrong!!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                },
            );
    };


    return (
        <>

            <section className='p-4 md:p-12'>

                <div className='max-w-6xl mx-auto'>
                    <div className='md:flex md:gap-6 justify-between bg-[#05345C] bg-opacity-70 text-white p-6 md:p-12 rounded-xl'>

                        <div className="contact_path">
                            <p className='uppercase text-sm font-light'>write an email</p>
                            <h3 className='text-lg font-semibold mb-3'>rejaulislammr25@gmail.com</h3>
                            <p className='uppercase text-sm font-light'>call me</p>
                            <h3 className='text-lg font-bold '>01569164500</h3>
                            {/* social links */}

                            <ul className='flex items-center gap-2 mt-14'>
                                <li className='bg-[#0788FF] w-fit p-2 rounded-full border-2 border-white'>
                                    <Link to={'https://facebook.com/rejaulislam48'} target='_blank'>
                                        <FaFacebookF className='text-2xl text-white'></FaFacebookF>
                                    </Link>
                                </li>
                                <li className='bg-pink-400 w-fit p-2 rounded-full border-2 border-white'>
                                    <Link to={'https://github.com/rejaul48'} target='_blank'><FaGithub className='text-2xl text-white'></FaGithub> </Link>
                                </li>
                                <li className='bg-[#0788FF] w-fit p-2 rounded-full border-2 border-white'>
                                    <Link to={'https://www.linkedin.com/in/rejaulislam48'} target='_blank'><FaLinkedinIn className='text-2xl text-white'></FaLinkedinIn></Link>
                                </li>
                            </ul>
                        </div>

                        <div className="contact_from mt-8 md:mt-0">

                            <div>
                                <h2 className='lg:text-4xl font-bold'>Let's Discuss Your Project</h2>
                                <p className='text-sm md:w-8/12 my-3'>Always aviable for freelancing if the right project comes along, Feel free to contact me.</p>
                            </div>

                            {/* contact from */}


                            <div className='mt-12 '>
                                <form ref={form} onSubmit={sendEmail}>
                                    {/* name and email */}
                                    <div className='md:flex items-center gap-4'>

                                        <label className="form-control w-full">
                                            <div className="label">
                                                <span className="label-text uppercase text-white">Your Full Name*</span>
                                            </div>
                                            <input required
                                                name='name' type="text" className="input input-bordered w-full bg-blue-100 bg-opacity-25   border-[1px] border-green-50" />

                                        </label>

                                        <label className="form-control w-full">
                                            <div className="label">
                                                <span className="label-text uppercase text-white">Your Email*</span>
                                            </div>
                                            <input
                                                required
                                                name='email' type="email" className="input input-bordered w-full  bg-blue-100 bg-opacity-25   border-[1px] border-green-50" />

                                        </label>
                                    </div>
                                    {/* subjuect */}
                                    <div>
                                        <label className="form-control w-full">
                                            <div className="label">
                                                <span className="label-text uppercase text-white">subject*</span>
                                            </div>
                                            <input required
                                                name='subject' type="text" className="input input-bordered w-full  bg-blue-100 bg-opacity-25   border-[1px] border-green-50" />

                                        </label>

                                        {/* project description with some message */}
                                        <div>
                                            <label className="form-control w-full">
                                                <div className="label">
                                                    <span className="label-text text-white">Description*</span>
                                                </div>
                                                {/* Text Area */}
                                                <textarea required
                                                    placeholder="your message"
                                                    name='description'
                                                    className="textarea textarea-bordered w-full mt-2 bg-blue-100 bg-opacity-25   border-[1px] border-green-50"
                                                    rows="4"
                                                ></textarea>
                                            </label>
                                        </div>

                                        {/* submite button */}
                                        <div>

                                            <button type='submit' className='mt-5 gap-4 text-lg font-semibold uppercase 
                                             bg-[#0788FF] py-3 w-full rounded-full
                                                 text-white hover:delay-100
                                             hover:bg-black hover:bg-opacity-60  
                                             transition-colors duration-200 
                                             '>send message</button>

                                        </div>

                                    </div>
                                </form>
                            </div>


                        </div>

                    </div>

                </div>
            </section>


        </>
    )
}

export default ContactWithMe
