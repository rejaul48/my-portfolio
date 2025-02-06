
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
    {
        id: 1,
        title: "TutorTrack Solution",
        image: "https://i.imgur.com/jAGRbYW.png/300x200",
        demoLink: "https://tutortrack-48.web.app",
        repoLink: "https://github.com/rejaul48/TutorTrack-client-side"
    },
    {
        id: 5,
        title: "TeamFlow Website",
        image: "https://i.imgur.com/QhEwLIR.png/300x200",
        demoLink: "https://team-flow-48.web.app",
        repoLink: "https://github.com/rejaul48/TeamFlow-client-side"
    },

    {
        id: 3,
        title: "Carear Campus",
        image: "https://i.imgur.com/qBbx8bt.png/300x200",
        demoLink: "https://career-campus-48.web.app",
        repoLink: "https://github.com/rejaul48/Career-Campus"
    },
    {
        id: 4,
        title: "Portfolio Website",
        image: "https://i.imgur.com/YZ2yrnR.png/300x200",
        demoLink: "https://rejaul-islam-48.web.app",
        repoLink: "https://github.com/rejaul48/my-portfolio"
    },
    {
        id: 2,
        title: "ProGear Sports",
        image: "https://i.imgur.com/c5sqvSw.png/300x200",
        demoLink: "https://progearsports-48.web.app",
        repoLink: "https://github.com/rejaul48/progear-client-side"
    }

];

const ProjectCard = ({ project }) => {
    const [hovered, setHovered] = useState(false); // Manage hover state

    return (
        <div
            className="relative group w-full max-w-sm h-[340px] border-2 rounded-lg shadow-md overflow-hidden flex flex-col"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Image */}
            <div className="h-64 overflow-hidden relative flex-shrink-0">
                <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full p-4 h-full rounded-md transform transition-transform duration-1500 ${hovered ? 'delay-150 group-hover:scale-105' : ''}`}
                />
                {/* Live Demo Link - Only on the image part */}
                {hovered && (
                    <div className="absolute inset-0 backdrop-blur-lg bg-opacity-50 flex items-center justify-center text-white text-xl font-bold">
                        <Link to={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn w-9/12 text-2xl h-20">
                            Live Demo
                        </Link>
                    </div>
                )}
            </div>

            {/* Project Details */}
            <div className="p-4 flex items-center justify-between mb-5">
                <h3 className="text-lg font-bold text-white text-opacity-75">{project.title}</h3>
                {/* Details Button */}
                <div className="mt-auto"> {/* This pushes the button to the bottom */}
                    <Link to={project?.repoLink} target="_blank" className="flex items-center gap-4 text-sm font-semibold uppercase bg-[#0788FF] py-2 px-4 rounded-full text-white hover:delay-100 hover:bg-black hover:bg-opacity-60 transition-colors duration-200">
                        Details
                        <FaArrowRight />
                    </Link>
                </div>
            </div>
        </div>
    );
};

const ProjectsSection = () => {
    return (
        <motion.section
            className="py-12"
            initial={{ opacity: 0, y: 50 }}  
            whileInView={{ opacity: 1, y: 0 }}   
            viewport={{ once: false, amount: 0.2 }}    
            transition={{ duration: 0.8 }}   
        >
            <div className="max-w-6xl mx-auto px-6">
                <h3 className='
                            tracking-widest
                            bg-[#063560] w-fit text-white uppercase px-2 py-1 rounded-sm text-lg font-semibold'>MY WORK</h3>
                <h2 className="text-3xl font-bold text-white  my-5 uppercase text-opacity-85">
                    Recent Projects
                </h2>
                {/* Swiper Slider */}
                <div>
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        spaceBetween={20}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="py-8"
                        onSlideChange={(swiper) => {
                            const pagination = swiper.pagination.el;
                            const activeButton = pagination.querySelector(".swiper-pagination-bullet-active");
                            if (activeButton) {
                                activeButton.classList.add("bg-blue-500");
                            }
                        }}
                    >
                        {projects.map((project) => (
                            <SwiperSlide key={project.id}>
                                <ProjectCard project={project} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </motion.section>
    );
};

export default ProjectsSection;
