
import React, { useEffect, useState } from 'react';
import skillsImg from '../../assets/giphy.webp'
import { FaBootstrap, FaCode, FaCss3, FaDatabase, FaHtml5, FaJs, FaNode, FaPython, FaReact, FaTablet } from 'react-icons/fa';

const SkillProgressBar = ({ skill, level }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let timer;
        if (progress < level) {
            timer = setTimeout(() => setProgress(progress + 1), 50);  
        }
        return () => clearTimeout(timer);  
    }, [progress, level]);

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
                        className={`w-full h-2 rounded-full ${index < dotsToFill ? 'bg-teal-600' : 'bg-gray-300'
                            } transition-all duration-200`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

const SkillsSection = () => {
    return (
        <>
            <section className='py-20'>
                <div className='max-w-6xl mx-auto'>

                    <div className='pb-9'>
                        <h2 className='text-center text-4xl font-bold text-white'>MY SK<span className='text-blue-400 border-b-4'>ILLS</span></h2>
                    </div>

                    <div className='md:flex gap-12 px-4 xl:px-0'>
                        <div className='md:w-7/12'>
                            <div className="py-16">

                                {/* Skills Progress Bars */}
                                <div className='md:flex items-center gap-12 w-full'>
                                    <div className='flex items-center gap-3 w-full'>
                                        <FaHtml5 className='text-4xl text-blue-700 text-opacity-80'></FaHtml5>
                                        <SkillProgressBar skill="HTML5" level={97} />
                                    </div>
                                    <div className='flex items-center gap-3 w-full'>
                                        <FaCss3 className='text-4xl text-blue-500 text-opacity-80'></FaCss3>
                                        <SkillProgressBar skill="CSS3" level={90} />
                                    </div>
                                </div>

                                <div className='md:flex items-center gap-12 w-full'>
                                    <div className='flex items-center gap-3 w-full'>
                                        <FaTablet className='text-4xl text-blue-500 text-opacity-80'></FaTablet>
                                        <SkillProgressBar skill="Tailwind" level={95} />
                                    </div>
                                    <div className='flex items-center gap-3 w-full'>
                                        <FaBootstrap className='text-4xl text-blue-500 text-opacity-80'></FaBootstrap>
                                        <SkillProgressBar skill="Bootstrap" level={80} />
                                    </div>

                                </div>
                                <div className='md:flex items-center gap-12 w-full'>
                                    <div className='flex items-center gap-3 w-full'>
                                        <FaJs className='text-4xl text-blue-500 text-opacity-80'></FaJs>
                                        <SkillProgressBar skill="JavaScript" level={85} />
                                    </div>
                                    <div className='flex items-center gap-3 w-full'>
                                        <FaReact className='text-4xl text-blue-500 text-opacity-80'></FaReact>
                                        <SkillProgressBar skill="React" level={80} />
                                    </div>
                                </div>
                                <div className='md:flex items-center gap-12 w-full'>
                                    <div className='flex items-center gap-3 w-full'>
                                        <FaNode className='text-4xl text-blue-500 text-opacity-80'></FaNode>
                                        <SkillProgressBar skill="Node.js" level={90} />
                                    </div>
                                    <div className='flex items-center gap-3 w-full'>
                                        <FaDatabase className='text-4xl text-blue-500 text-opacity-80'></FaDatabase>
                                        <SkillProgressBar skill="MongoDB" level={50} />
                                    </div>
                                </div>
                                <div className='md:flex items-center gap-12 w-full'>
                                    <div className='flex items-center gap-3 w-full'>
                                        <FaCode className='text-4xl text-blue-500 text-opacity-80'></FaCode>
                                        <SkillProgressBar skill="Express JS" level={50} />
                                    </div>
                                    <div className='flex items-center gap-3 w-full'>
                                        <FaPython className='text-4xl text-blue-500 text-opacity-80'></FaPython>
                                        <SkillProgressBar skill="Python" level={60} />
                                    </div>
                                </div>




                            </div>
                        </div>
                        <div className='md:w-5/12 flex items-center justify-center 
                        bg-white p-4 rounded-xl md:mr-3
                        '>
                            <img src={skillsImg} alt="skills image" className='md:h-[450px] rounded-lg' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SkillsSection;
