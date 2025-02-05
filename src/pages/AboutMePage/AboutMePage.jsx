import React from 'react'
import { Link } from 'react-router-dom'
import { FaAnglesLeft } from "react-icons/fa6";
import aboutMeImg from '../../assets/about-me-img.jpg'
import { IoNotificationsCircleOutline } from "react-icons/io5";

const AboutMePage = () => {
  return (
    <>

      <main className='w-full bg-gradient-to-r from-[#2f3d49] to-[#0d1e2e] px-4 xl:px-0'>
        <section className='max-w-[1460px] mx-auto'>
          {/* back to home */}
          <div className='pt-4 sticky top-0 left-0 ml-4'>
            <Link to={'/'} className='flex items-center gap-1 py-3 bg-[#50708b] 
            text-white w-fit px-4 rounded-sm animate-pulse delay-200
            '> <FaAnglesLeft /> Back to Home page</Link>
          </div>
          <section className='max-w-4xl mx-auto'>

            {/* introduction about me section */}

            <div>

              {/* about page image| */}
              <div className='flex justify-center mt-4 lg:mt-0'>
                <img className=" h-[300px] md:h-[400px] rounded-3xl" src="https://raw.githubusercontent.com/rejaul48/rejaul48/refs/heads/main/github_banner_image.png" alt="about-me-image" />
              </div>

              {/* hi and name and designation */}
              <div className='text-white mt-14'>
                <h2 className='text-3xl md:text-5xl font-bold'>Hi there 👋, This is Rejaul Islam</h2>
                <p className='text-xl font-semibold tracking-wider mt-3'>(Junior Web Developer)</p>
              </div>
              <div>

              </div>

              {/* about page text */}
              <div className='text-white mt-5'>
                <h2 className='text-4xl font-bold tracking-wider'>🚀 About me: </h2>
                <p className='mt-5 tracking-wide leading-6'></p>
                <p>I'm a passionate and dedicated Frontend Web Developer currently pursuing my diploma in Computer Science and Technology at Dinajpur Polytechnic Institute. My coding journey began in 2021 with HTML, and since then, I've been on a mission to become a skilled and impactful developer.<br /><br />

                  Over the past two years, I've explored various resources and technologies to deepen my understanding of web development. While the journey hasn't always been easy, it has taught me the importance of persistence and continuous learning. Recently, I've been focusing on mastering the MERN stack (MongoDB, Express.js, React, and Node.js) through the Programming Hero platform, which has helped me build a strong foundation in modern web development. <br /><br />

                  My goal is to complete my higher studies in Computer Science and further enhance my skills in cutting-edge technologies. I'm committed to growing as a developer, creating user-friendly and innovative web solutions, and proving myself as a valuable contributor in the tech industry. When I'm not coding, I enjoy exploring new technologies, solving problems, and staying updated with the latest trends in web development.

                </p>
              </div>

              {/* tech Stack and Expertise */}

              <div className='text-white mt-5 '>
                <h2 className='text-2xl md:text-4xl font-bold'>Tech Stack & Expertise:</h2>

                <div className='text-xl md:flex md:gap-6 lg:gap-12 mt-4 w-full'>
                  {/* frond end technology */}
                  <div>
                    <h2 className='md:text-2xl font-semibold mt-2'>Front-End:</h2>
                    <ul className=' pl-4 space-y-1 mt-4'>
                      <li className='flex items-center gap-1 text-lg md:text-xl'><span><IoNotificationsCircleOutline /></span> HTML5</li>
                      <li className='flex items-center gap-1 text-lg md:text-xl'><span><IoNotificationsCircleOutline /></span>CSS3</li>
                      <li className='flex items-center gap-1 text-lg md:text-xl'><span><IoNotificationsCircleOutline /></span>Tailwind</li>
                      <li className='flex items-center gap-1 text-lg md:text-xl'><span><IoNotificationsCircleOutline /></span>Bootstrap</li>
                      <li className='flex items-center gap-1 text-lg md:text-xl'><span><IoNotificationsCircleOutline /></span>Js</li>
                      <li className='flex items-center gap-1 text-lg md:text-xl'><span><IoNotificationsCircleOutline /></span>React</li>
                      <li className='flex items-center gap-1 text-lg md:text-xl'><span><IoNotificationsCircleOutline /></span>Next.js</li>
                    </ul>
                  </div>

                  {/* backend technology */}
                  <div>
                    <h2 className='md:text-2xl font-semibold mt-2'>Back-End:</h2>
                    <ul className='pl-4 space-y-1 mt-4'>
                      <li className='flex items-center gap-1 text-xl'><span><IoNotificationsCircleOutline /></span>Node.js</li>
                      <li className='flex items-center gap-1 text-xl'><span><IoNotificationsCircleOutline /></span>Express.js</li>
                      <li className='flex items-center gap-1 text-xl'><span><IoNotificationsCircleOutline /></span>Firebase</li>
                      <li className='flex items-center gap-1 text-xl'><span><IoNotificationsCircleOutline /></span>MongoDB</li>

                    </ul>
                  </div>
                  {/* version controll */}
                  <div>
                    <h2 className='md:text-2xl font-semibold mt-2'>Version Control:</h2>
                    <ul className='pl-4 space-y-1 mt-4'>
                      <li className='flex items-center gap-1 text-xl'><span><IoNotificationsCircleOutline /></span> Git</li>
                      <li className='flex items-center gap-1 text-xl'><span><IoNotificationsCircleOutline /></span> Github</li>

                    </ul>
                  </div>

                  {/* ui/ux design */}
                  <div>
                    <h2 className='md:text-2xl font-semibold mt-2'>UI/UX:</h2>
                    <ul className='pl-4 space-y-1 mt-4'>
                      <li className='flex items-center gap-1 text-xl'><span><IoNotificationsCircleOutline /></span> Responsive Web Design</li>
                      <li className='flex items-center gap-1 text-xl'><span><IoNotificationsCircleOutline /></span> Figma</li>

                    </ul>
                  </div>


                </div>

                <p className='mt-5'>I am always open to learning new things, collaborating on projects, and connecting with like-minded professionals. Let's build something great together! </p>


              </div>

              {/* what i am doing write now */}

              <div className='text-white mt-12 pb-12'>
                <h2 className='text-2xl md:text-4xl font-bold'>What I'm Working On Now:</h2>
                <h4 className='mt-4'>🚀 <strong>Deep learning in the MERN Stack</strong> - Improving my skills in React.js, Node.js, Express.js, Next.js,and MongoDB.</h4>

                <h4 className='mt-3'>🎓 <strong>Focused Studies & Growth</strong> - Currently in my 7th semester of Diploma in Computer Science and Technology, I am deeply committed to expanding my technical knowledge and skills. I am very keen on pursuing higher studies in Computer Science to further enhance my expertise and contribute meaningfully to the tech industry.</h4>

                <h4 className='mt-3'>💡 <strong>Building Real-World Projects</strong> - Applying my learning by developing dynamic web applications.</h4>
                <h4 className='mt-3'>👨‍💻 <strong>Community & Collaboration</strong> - Engaging with developers, contributing to open-source, and sharing knowledge.</h4>
              </div>


            </div>


          </section>
        </section>
      </main>
    </>
  )
}

export default AboutMePage
