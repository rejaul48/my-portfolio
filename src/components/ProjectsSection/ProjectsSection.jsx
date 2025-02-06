
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

// this is project description data
const projects = [
    {
        id: 1,
        title: "TutorTrack Solution",
        image: "https://i.imgur.com/jAGRbYW.png/300x200",
        demoLink: "https://tutortrack-48.web.app",
        repoLink: "https://github.com/rejaul48/TutorTrack-client-side",
        description: `TutorTrack Solution is an online platform designed to simplify the process of finding and booking tutors for various subjects and languages. The application allows users to search tutors, view their profiles, and filter results based on different criteria such as language and price. Tutors can add, update, and manage their profiles, while students can book and inquire about available sessions. The platform leverages React for a dynamic user experience, with Vite for fast builds and TailwindCSS for styling. Firebase handles authentication, and Axios is used for API requests to a backend server.`,
        technologies: ['React', 'TailwindCSS', 'Firebase', 'Vite', 'Axios', 'Swiper', 'Lottie-react'],
        challenges: ['Integrating Firebase for real-time data management.', 'Handling cross-browser compatibility with TailwindCSS and React.',
            'Optimizing the performance for large-scale data fetching using Axios.'],
        improvements: ['Implementing more robust authentication and authorization systems with Firebase.', 'Adding additional features like video conferencing integration for online tutoring sessions.', 'Improving the UI/UX design with a more user-friendly interface.']
    },
    {
        id: 5,
        title: "TeamFlow Website",
        image: "https://i.imgur.com/QhEwLIR.png/300x200",
        demoLink: "https://team-flow-48.web.app",
        repoLink: "https://github.com/rejaul48/TeamFlow-client-side",

        description: "This employee management web application enables seamless task submissions by employees while allowing HR to monitor workflows and request payments for specific employees. Employees can be marked as verified or unverified, and their detailed information can be accessed.Admins have robust controls, including revoking HR roles, firing employees, and processing payments via Stripe. Additionally, the admin can view detailed profiles for specific employees to ensure informed decision-making. This application enhances workplace efficiency, transparency, and payroll management.",

        technologies: ["React", "TailwindCSS", "Firebase", "Vite", "Axios", "Swiper", "Lottie-react", "React Hook Form", "React Router DOM", "TanStack Query", "Stripe Payment", "SweetAlert2", "Chart.js", "Headless UI"],

        challenges: ["Integrating Firebase for real-time data management.", "Handling cross-browser compatibility with TailwindCSS and React.", "Optimizing performance for large-scale data fetching using Axios.", "Managing complex state efficiently using TanStack Query.", "Implementing secure online payments using Stripe.", "Creating responsive UI components with Headless UI."],

        improvements: ["Implementing more robust authentication and authorization systems with Firebase.", "Adding additional features like video conferencing integration for online tutoring sessions.", "Improving the UI/UX design with a more user-friendly interface.", "Enhancing form validation and data handling using React Hook Form.", "Adding real-time data visualization using Chart.js.", "Refactoring code to improve maintainability and scalability."],

    },
    {
        id: 3,
        title: "Career Campus",
        image: "https://i.imgur.com/qBbx8bt.png/300x200",
        demoLink: "https://career-campus-48.web.app",
        repoLink: "https://github.com/rejaul48/Career-Campus",
        description: "Career Campus is an online platform designed to provide professional career support through expert guidance and personalized services. Offering one-on-one career counseling, resume reviews, job search strategies, interview preparation, and cover letter feedback, Career Campus helps individuals enhance their career prospects.The platform also provides LinkedIn profile optimization, career assessments, and freelance consulting to help users strengthen their professional presence. Whether you are exploring new career paths, seeking job opportunities, or preparing for interviews, Career Campus offers tailored solutions to meet your needs. With Firebase Authentication, users can easily log in with Google accounts and securely update profiles. Career Campus empowers individuals to achieve career success with expert support and resources.",

        technologies: ["React", "TailwindCSS", "Firebase", "Vite", "Axios", "Swiper", "Lottie-react", "React-Hook-Form", "React-Router-DOM", "TanStack-Query", "Stripe-Payment", "SweetAlert2", " Chart.js", "Headless-UI"],

        challenges: ["Integrating Firebase for real-time data management.", " Handling cross-browser compatibility with TailwindCSS and React.", "Optimizing performance for large-scale data fetching using Axios.", "Managing complex state efficiently using TanStack Query.", "Implementing secure online payments using Stripe.", " Creating responsive UI components with Headless UI."],

        improvements: ["Implementing more robust authentication and authorization systems with Firebase.", "Adding additional features like video conferencing integration for online tutoring sessions.", "I mproving the UI/UX design with a more user-friendly interface.", "Enhancing form validation and data handling using React Hook Form.", "Adding real-time data visualization using Chart.js.", "Refactoring code to improve maintainability and scalability."]


    },
    {
        id: 4,
        title: "Portfolio Website",
        image: "https://i.imgur.com/YZ2yrnR.png/300x200",
        demoLink: "https://rejaul-islam-48.web.app",
        repoLink: "https://github.com/rejaul48/my-portfolio",
        description: "My portfolio website is a modern, responsive, and dynamic web application designed to showcase my skills, projects, and professional journey as a Frontend Web Developer. Built using cutting-edge technologies like React, TailwindCSS, Firebase, and Vite, the website provides a seamless user experience with an intuitive interface.",
        technologies: [
            "React",
            "TailwindCSS",
            "Firebase",
            "Vite",
            "Axios",
            "Swiper",
            "Lottie-react",
            "React-Hook-Form",
            "React-Router-DOM",
            "TanStack-Query",
            "Stripe-Payment",
            "SweetAlert2",
            "Chart.js",
            "Headless-UI"
        ],
        challenges: [
            "Integrating Firebase for real-time data management.",
            "Handling cross-browser compatibility with TailwindCSS and React.",
            "Optimizing performance for large-scale data fetching using Axios.",
            "Managing complex state efficiently using TanStack Query.",
            "Implementing secure online payments using Stripe.",
            "Creating responsive UI components with Headless UI."
        ],
        improvements: [
            "Implementing more robust authentication and authorization systems with Firebase.",
            "Adding additional features like video conferencing integration for online tutoring sessions.",
            "Improving the UI/UX design with a more user-friendly interface.",
            "Enhancing form validation and data handling using React Hook Form.",
            "Adding real-time data visualization using Chart.js.",
            "Refactoring code to improve maintainability and scalability."
        ]
    },
    {
        id: 2,
        title: "ProGear Sports",
        image: "https://i.imgur.com/c5sqvSw.png/300x200",
        demoLink: "https://progearsports-48.web.app",
        repoLink: "https://github.com/rejaul48/progear-client-side",
        description: "ProGear is a dynamic e-commerce platform designed for sports enthusiasts, offering a seamless shopping experience for premium gear and equipment. Built using React and Tailwind CSS, the website delivers a sleek, responsive design optimized for all devices. With Firebase as the authentication backbone, users can securely log in using Google or register via email. MongoDB ensures robust and reliable data management for user and product records. ProGear empowers users to manage their inventory with ease, allowing them to add, update, or delete products. Engaging features like Lottie animations enhance the visual appeal, while React Tooltip ensures intuitive navigation. With a commitment to performance and user satisfaction, ProGear integrates state-of-the-art tools for smooth operation and a delightful experience.",
        technologies: [
            "React",
            "TailwindCSS",
            "Firebase",
            "Vite",
            "Axios",
            "Swiper",
            "Lottie-react",
            "React-Hook-Form",
            "React-Router-DOM",
            "TanStack-Query",
            "Stripe-Payment",
            "SweetAlert2",
            "Chart.js",
            "Headless-UI"
        ],
        challenges: [
            "Integrating Firebase for real-time data management.",
            "Handling cross-browser compatibility with TailwindCSS and React.",
            "Optimizing performance for large-scale data fetching using Axios.",
            "Managing complex state efficiently using TanStack Query.",
            "Implementing secure online payments using Stripe.",
            "Creating responsive UI components with Headless UI."
        ],
        improvements: [
            "Implementing more robust authentication and authorization systems with Firebase.",
            "Adding additional features like video conferencing integration for online tutoring sessions.",
            "Improving the UI/UX design with a more user-friendly interface.",
            "Enhancing form validation and data handling using React Hook Form.",
            "Adding real-time data visualization using Chart.js.",
            "Refactoring code to improve maintainability and scalability."
        ]

    }
];

const ProjectCard = ({ project, openModal }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="relative group w-full max-w-sm h-[340px] border-2 rounded-lg shadow-md overflow-hidden flex flex-col"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="h-64 overflow-hidden relative flex-shrink-0">
                <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full p-4 h-full rounded-md transform transition-transform duration-1500 ${hovered ? 'delay-150 group-hover:scale-105' : ''}`}
                />
                {hovered && (
                    <div className="absolute inset-0 backdrop-blur-lg bg-opacity-50 flex items-center justify-center text-white text-xl font-bold">
                        <Link to={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn w-9/12 text-2xl h-20">
                            Live Demo
                        </Link>
                    </div>
                )}
            </div>

            <div className="p-4 flex items-center justify-between mb-5">
                <h3 className="text-lg font-bold text-white text-opacity-75">{project.title}</h3>
                <div className="mt-auto">
                    <button
                        onClick={() => openModal(project)}
                        className="flex items-center gap-4 text-sm font-semibold uppercase bg-[#0788FF] py-2 px-4 rounded-full text-white hover:delay-100 hover:bg-black hover:bg-opacity-60 transition-colors duration-200"
                    >
                        Details
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

const ProjectsSection = () => {
    const [selectedProject, setSelectedProject] = useState(null);


    // Inside the ProjectsSection component
    useEffect(() => {
        // Disable scroll when modal is open
        if (selectedProject) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        // Cleanup when component is unmounted or modal is closed
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [selectedProject]);

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

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
                <h2 className="text-3xl font-bold text-white my-5 uppercase text-opacity-85">
                    Recent Projects
                </h2>

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
                    >
                        {projects.map((project) => (
                            <SwiperSlide key={project.id}>
                                <ProjectCard project={project} openModal={openModal} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {selectedProject && (
                <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-md flex justify-center items-center z-50 pointer-events-auto px-4 xl:px-0 overflow-y-scroll  
                 min-h-screen  
                ">
                    <div className="bg-white p-6 rounded-sm max-w-4xl w-full absolute z-60 top-4 
                  px-8 xl:px-0
                    ">
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-gray-700 hover:text-red-500 text-lg"
                        >
                            <FaTimes />
                        </button>

                        {/* Modal Content */}
                        <h2 className="text-xl font-bold mb-3">{selectedProject.title}</h2>
                        <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-40 md:h-80 object-cover rounded-md mb-3" />

                        <div className="mt-7">
                            <h2 class="text-2xl font-semibold mb-2"><i class="fas fa-info-circle"></i> Brief Description</h2>
                            <p>{selectedProject?.description}</p>
                        </div>

                        <div className="mt-7">
                            <h2 className="text-2xl font-semibold mb-2">
                                <i className="fas fa-cogs"></i> Main Technology Stack Used
                            </h2>
                            <ul className="list-inside list-disc">
                                {
                                    selectedProject?.technologies?.map((tech, ind) => (
                                        <li key={ind}>
                                            <i className="fas fa-arrow-right"></i> {tech}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>


                        <div className="mt-7">
                            <h2 class="text-2xl font-semibold mb-2"><i class="fas fa-exclamation-circle"></i> Challenges Faced While Developing the Project</h2>
                            <ul class="list-inside list-disc">
                                {
                                    selectedProject?.challenges?.map((che, ind) => (
                                        <li key={ind}>
                                            {che}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className="mt-7 pb-7">
                            <h2 class="text-2xl font-semibold mb-2"><i class="fas fa-lightbulb"></i> Potential Improvements and Future Plans</h2>
                            <ul class="list-inside list-disc">
                                {
                                    selectedProject?.improvements?.map((improve, ind) => (
                                        <li key={ind}>
                                            {
                                                improve
                                            }
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>


                        <div className="flex gap-4">
                            <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer" className="bg-[#0788FF] text-white px-4 py-2 rounded-md">Live Demo</a>
                            <a href={selectedProject.repoLink} target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-4 py-2 rounded-md">GitHub Repo</a>
                        </div>
                    </div>
                </div>
            )}


        </motion.section>
    );
};

export default ProjectsSection;
