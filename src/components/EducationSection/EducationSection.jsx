import React from "react";

const EducationSection = () => {
    const education = [
        {
            degree: "Diploma in Engineering",
            sbject: "Computer Science and Technology",
            institution: "Dinajpur Polytechniq Institute",
            year: "2021 - 2025",
            description: "Focused on web development, Networking, and Cyber Security.",
        }
    ];

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto">
                <div className="flex gap-12">

                    <div className="w-full   ">
                        <h2 className="text-3xl font-bold text-gray-800  mb-8">
                            Education
                        </h2>
                        <div className="relative border-l-4 border-teal-500">
                            {education.map((item, index) => (
                                <div
                                    key={index}
                                    className="mb-8 pl-8 relative flex items-start"
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute left-[-12px] top-2 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center">
                                        <div className="w-3 h-3 rounded-full bg-white"></div>
                                    </div>

                                    {/* Content */}
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-700">
                                            {item.degree}
                                        </h3>
                                        <p className="text-sm  font-light">{item.sbject}</p>
                                        <span className="text-sm text-teal-600">{item.year}</span>
                                        <p className="text-gray-500 mt-2">{item.description}</p>
                                        <span className="text-sm text-gray-500 italic block mt-1">
                                            {item.institution}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="w-full  ">
                        <h2 className="text-3xl font-bold text-gray-800  mb-8">
                            Experience
                        </h2>

                        <div className="relative border-l-4 border-teal-500">
                    
                                <div
                                   
                                    className="mb-8 pl-8 relative flex items-start"
                                >

                                    <div className="absolute left-[-12px] top-2 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center">
                                        <div className="w-3 h-3 rounded-full bg-white"></div>
                                    </div>


                                    <div>
                                        <p>I am still Learning...</p>
                                    </div>
                                </div>
                          
                        </div>

                        {/* when experience is aviable then 
                        experience section design be like
                        */}
                        {/* <div className="relative border-l-4 border-teal-500">
                            {education.map((item, index) => (
                                <div
                                    key={index}
                                    className="mb-8 pl-8 relative flex items-start"
                                >
                                  
                                    <div className="absolute left-[-12px] top-2 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center">
                                        <div className="w-3 h-3 rounded-full bg-white"></div>
                                    </div>

                                    
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-700">
                                            {item.degree}
                                        </h3>
                                        <p className="text-sm  font-light">{item.sbject}</p>
                                        <span className="text-sm text-teal-600">{item.year}</span>
                                        <p className="text-gray-500 mt-2">{item.description}</p>
                                        <span className="text-sm text-gray-500 italic block mt-1">
                                            {item.institution}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div> */}


                    </div>

                </div>
            </div>
        </section>
    );
};

export default EducationSection;
