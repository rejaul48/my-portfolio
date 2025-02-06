
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const ContactWithMe = () => {
    const form = useRef();

    // Send mail function
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_8p04wg2', 'template_wz54rff', form.current, {
            publicKey: 'ezMM8EA7HMYCpweLx',
        }).then(
            () => {
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Your Message was sent to Rejaul Islam",
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
            }
        );
    };

    return (
        <motion.section
            className='p-4 md:p-12'
            initial={{ opacity: 0, y: 50 }}  // Start invisible & lower
            whileInView={{ opacity: 1, y: 0 }}  // Animate to visible & up
            viewport={{ once: false, amount: 0.2 }} // Triggers every time it's in view
            transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
        >
            <div className='max-w-6xl mx-auto'>
                <div className='md:flex md:gap-6 justify-between bg-[#05345C] bg-opacity-70 text-white p-6 md:p-12 rounded-xl'>

                    {/* Contact Info */}
                    <motion.div 
                        className="contact_path"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: false }}
                    >
                        <p className='uppercase text-sm font-light'>Write an email</p>
                        <h3 className='text-lg font-semibold mb-3'>rejaulislammr25@gmail.com</h3>
                        <p className='uppercase text-sm font-light'>Call me</p>
                        <h3 className='text-lg font-bold '>01569164500</h3>

                        {/* Social Links */}
                        <ul className='flex items-center gap-2 mt-14'>
                            <li className='bg-[#0788FF] w-fit p-2 rounded-full border-2 border-white'>
                                <Link to={'https://facebook.com/rejaulislam48'} target='_blank'>
                                    <FaFacebookF className='text-2xl text-white'></FaFacebookF>
                                </Link>
                            </li>
                            <li className='bg-pink-400 w-fit p-2 rounded-full border-2 border-white'>
                                <Link to={'https://github.com/rejaul48'} target='_blank'>
                                    <FaGithub className='text-2xl text-white'></FaGithub>
                                </Link>
                            </li>
                            <li className='bg-[#0788FF] w-fit p-2 rounded-full border-2 border-white'>
                                <Link to={'https://www.linkedin.com/in/rejaulislam48'} target='_blank'>
                                    <FaLinkedinIn className='text-2xl text-white'></FaLinkedinIn>
                                </Link>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div 
                        className="contact_from mt-8 md:mt-0"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: false }}
                    >
                        <h2 className='lg:text-4xl font-bold'>Let's Discuss Your Project</h2>
                        <p className='text-sm md:w-8/12 my-3'>Always available for freelancing if the right project comes along. Feel free to contact me.</p>

                        {/* Contact Form */}
                        <div className='mt-12'>
                            <form ref={form} onSubmit={sendEmail}>
                                {/* Name & Email */}
                                <div className='md:flex items-center gap-4'>
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text uppercase text-white">Your Full Name*</span>
                                        </div>
                                        <input required
                                            name='name' type="text"
                                            className="input input-bordered w-full bg-blue-100 bg-opacity-25 border-[1px] border-green-50"
                                        />
                                    </label>

                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text uppercase text-white">Your Email*</span>
                                        </div>
                                        <input required
                                            name='email' type="email"
                                            className="input input-bordered w-full bg-blue-100 bg-opacity-25 border-[1px] border-green-50"
                                        />
                                    </label>
                                </div>

                                {/* Subject */}
                                <div>
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text uppercase text-white">Subject*</span>
                                        </div>
                                        <input required
                                            name='subject' type="text"
                                            className="input input-bordered w-full bg-blue-100 bg-opacity-25 border-[1px] border-green-50"
                                        />
                                    </label>

                                    {/* Message */}
                                    <div>
                                        <label className="form-control w-full">
                                            <div className="label">
                                                <span className="label-text text-white">Description*</span>
                                            </div>
                                            <textarea required
                                                placeholder="Your message"
                                                name='description'
                                                className="textarea textarea-bordered w-full mt-2 bg-blue-100 bg-opacity-25 border-[1px] border-green-50"
                                                rows="4"
                                            ></textarea>
                                        </label>
                                    </div>

                                    {/* Submit Button */}
                                    <div>
                                        <motion.button 
                                            type='submit'
                                            className='mt-5 gap-4 text-lg font-semibold uppercase 
                                                bg-[#0788FF] py-3 w-full rounded-full
                                                text-white hover:delay-100 hover:bg-black 
                                                hover:bg-opacity-60 transition-colors duration-200'
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Send Message
                                        </motion.button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </motion.div>

                </div>
            </div>
        </motion.section>
    );
}

export default ContactWithMe;
