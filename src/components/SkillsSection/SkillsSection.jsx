
import React, { useEffect, useState, useRef } from 'react';
import skillsImg from '../../assets/giphy.webp';
import { FaBootstrap, FaCode, FaCss3, FaDatabase, FaHtml5, FaJs, FaNode, FaPython, FaReact, FaTablet } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';
import { RiNextjsLine } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";

const SkillProgressBar = ({ skill, level, inView }) => {
    const [progress, setProgress] = useState(0);

    // Dynamically update the progress when the section comes into view
    useEffect(() => {
        if (inView) {
            let currentProgress = 0;
            const interval = setInterval(() => {
                if (currentProgress < level) {
                    currentProgress += 1;
                    setProgress(currentProgress);
                } else {
                    clearInterval(interval);
                }
            }, 10); // Adjust speed here
            return () => clearInterval(interval);
        }
    }, [inView, level]);

    const numberOfDots = 10;
    const dotsToFill = Math.floor((progress / 100) * numberOfDots);

    return (
        <div className="my-4 w-full max-w-lg">
            <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-lg text-white text-opacity-85">{skill}</h3>
                <span className="text-sm font-semibold text-white text-opacity-85">{progress}%</span>
            </div>

            {/* Dotted Progress Bar */}
            <div className="w-full flex space-x-1 justify-start items-center">
                {Array.from({ length: numberOfDots }).map((_, index) => (
                    <div
                        key={index}
                        className={`w-full h-2 rounded-full ${index < dotsToFill ? 'bg-teal-600' : 'bg-gray-300'} transition-all duration-200`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

const SkillsSection = () => {
    // Refs for sections to trigger animations
    const progressBarRef = useRef(null);
    const imageRef = useRef(null);
    const isProgressInView = useInView(progressBarRef, { once: false, amount: 0.3 });
    const isImageInView = useInView(imageRef, { once: false, amount: 0.3 });

    return (
        <>
            <section className="py-20 overflow-hidden">
                <div className="container mx-auto">
                    <div className="pb-9">
                        <h2 className="text-center text-4xl font-bold text-white">
                            MY SK<span className="text-blue-400 border-b-4">ILLS</span>
                        </h2>
                    </div>

                    <div className="md:flex gap-12 px-4 xl:px-0">
                        {/* Left Side (Skills Progress Bars) */}
                        <motion.div
                            ref={progressBarRef}
                            initial={{ opacity: 0, x: -100 }}
                            animate={isProgressInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className="md:w-7/12"
                        >
                            <div className="py-16">
                                {/* Skills Progress Bars */}
                                <div className="md:flex items-center gap-12 w-full">
                                    <div className="flex items-center gap-3 w-full">
                                        <FaHtml5 className="text-4xl text-blue-700 text-opacity-80" />
                                        <SkillProgressBar skill="HTML5" level={97} inView={isProgressInView} />
                                    </div>
                                    <div className="flex items-center gap-3 w-full">
                                        <FaCss3 className="text-4xl text-blue-500 text-opacity-80" />
                                        <SkillProgressBar skill="CSS3" level={90} inView={isProgressInView} />
                                    </div>
                                </div>

                                <div className="md:flex items-center gap-12 w-full">
                                    <div className="flex items-center gap-3 w-full">
                                        <FaTablet className="text-4xl text-blue-500 text-opacity-80" />
                                        <SkillProgressBar skill="Tailwind" level={95} inView={isProgressInView} />
                                    </div>
                                    <div className="flex items-center gap-3 w-full">
                                        <FaBootstrap className="text-4xl text-blue-500 text-opacity-80" />
                                        <SkillProgressBar skill="Bootstrap" level={80} inView={isProgressInView} />
                                    </div>
                                </div>
                                <div className="md:flex items-center gap-12 w-full">
                                    <div className="flex items-center gap-3 w-full">
                                        <FaJs className="text-4xl text-blue-500 text-opacity-80" />
                                        <SkillProgressBar skill="JavaScript" level={85} inView={isProgressInView} />
                                    </div>
                                    <div className="flex items-center gap-3 w-full">
                                        <FaReact className="text-4xl text-blue-500 text-opacity-80" />
                                        <SkillProgressBar skill="React" level={80} inView={isProgressInView} />
                                    </div>
                                </div>
                                <div className="md:flex items-center gap-12 w-full">
                                    <div className="flex items-center gap-3 w-full">
                                        <FaNode className="text-4xl text-blue-500 text-opacity-80" />
                                        <SkillProgressBar skill="Node.js" level={80} inView={isProgressInView} />
                                    </div>
                                    <div className="flex items-center gap-3 w-full">
                                        <FaPython className="text-4xl text-blue-500 text-opacity-80" />
                                        <SkillProgressBar skill="Python" level={40} inView={isProgressInView} />
                                    </div>

                                </div>
                                <div className="md:flex items-center gap-12 w-full">
                                    <div className="flex items-center gap-3 w-full">
                                        <FaCode className="text-4xl text-blue-500 text-opacity-80" />
                                        <SkillProgressBar skill="Express JS" level={50} inView={isProgressInView} />
                                    </div>
                                    <div className="flex items-center gap-3 w-full">
                                        <FaDatabase className="text-4xl text-blue-500 text-opacity-80" />
                                        <SkillProgressBar skill="MongoDB" level={50} inView={isProgressInView} />
                                    </div>
                                </div>

                                {/* firabase and next.js */}

                                <div className="md:flex items-center gap-12 w-full">
                                    <div className="flex items-center gap-3 w-full">
                                        <RiNextjsLine className="text-4xl text-blue-500 text-opacity-80"/>
                                        <SkillProgressBar skill="Next JS" level={40} inView={isProgressInView} />
                                    </div>
                                    <div className="flex items-center gap-3 w-full">
                                        <IoLogoFirebase className="text-4xl text-blue-500 text-opacity-80" />
                                        <SkillProgressBar skill="Firebase" level={70} inView={isProgressInView} />
                                    </div>
                                </div>

                            </div>
                        </motion.div>

                        {/* Right Side (Image) */}
                        <motion.div
                            ref={imageRef}
                            initial={{ opacity: 0, x: 100 }}
                            animate={isImageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className="md:w-5/12 flex items-center justify-center bg-white  p-4 rounded-xl md:mr-3 overflow-hidden"
                        >
                            <img src={skillsImg} alt="skills image" className="md:h-[450px] lg:h-full rounded-lg" />
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SkillsSection;
