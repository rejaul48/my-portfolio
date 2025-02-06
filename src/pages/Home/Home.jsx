
import React, { useState, useEffect } from 'react';
import { Link, Element } from 'react-scroll';
import logoImg from '../../assets/my-web-logo.png';
import Hero from '../../components/Hero/Hero';
import AboutMe from '../../components/AboutMe/AboutMe';
import SkillsSection from '../../components/SkillsSection/SkillsSection';
import ProjectsSection from '../../components/ProjectsSection/ProjectsSection';
import ContactWithMe from '../../components/ContactWithMe/ContactWithMe';
import Footer from '../../components/Footer/Footer';
import { FaGear } from 'react-icons/fa6';

const links = (activeSection) => <>
  <li>
    <Link
      to="section1"
      smooth={true}
      duration={500}
      className={`btn  lg:text-[16px] bg-transparent border-none hover:bg-transparent hover:underline ${activeSection === 'section1' ? 'text-yellow-400' : 'text-white'
        }`}
    >
      Home
    </Link>
  </li>
  <li>
    <Link
      to="section2"
      smooth={true}
      duration={500}
      className={`btn lg:text-[16px] bg-transparent border-none hover:bg-transparent hover:underline ${activeSection === 'section2' ? 'text-yellow-400' : 'text-white'
        }`}
    >
      About me
    </Link>
  </li>
  <li>
    <Link
      to="section3"
      smooth={true}
      duration={500}
      className={`btn lg:text-[16px] bg-transparent border-none hover:bg-transparent hover:underline ${activeSection === 'section3' ? 'text-yellow-400' : 'text-white'
        }`}
    >
      Skills
    </Link>
  </li>

  <li>
    <Link
      to="section4"
      smooth={true}
      duration={500}
      className={`btn lg:text-[16px] bg-transparent border-none hover:bg-transparent hover:underline ${activeSection === 'section4' ? 'text-yellow-400' : 'text-white'
        }`}
    >
      Projects
    </Link>
  </li>

  <li>
    <Link
      to="section5"
      smooth={true}
      duration={500}
      className={`btn lg:text-[16px] bg-transparent border-none hover:bg-transparent hover:underline ${activeSection === 'section5' ? 'text-yellow-400' : 'text-white'
        }`}
    >
      Contact Me
    </Link>
  </li>
</>;

const Home = () => {
  const [activeSection, setActiveSection] = useState('section1');
  const HEADER_HEIGHT = 44;
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[id^="section"]');
      let currentSection = 'section1';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - HEADER_HEIGHT;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id');
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [isShowMenue, setIsShowMenue] = useState(false)

  const handleMenuClick = () => {
    setIsShowMenue(!isShowMenue)

  }

  return (
    <div>
      {/* Navigation Menu */}
      <section className='w-full bg-gradient-to-r from-[#2f3d49] to-[#0d1e2e] sticky top-0 z-20  '>
        <div className="navbar max-w-6xl mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
                onClick={(e) => {
                  e.currentTarget.focus();

                }}
              >
                <FaGear
                  onClick={handleMenuClick}
                  className={`text-3xl text-white transition-transform duration-500 ${isShowMenue ? 'rotate-180' : 'rotate-0'
                    }`}
                />

              </div>
              <ul
                tabIndex={0}
                className={`menu menu-sm  dropdown-content text-white rounded-box z-50 mt-3 w-52 p-2 
                  shadow bg-gray-800 ${isShowMenue ? 'block' : 'hidden'}`}
              >
                {links(activeSection)}
              </ul>
            </div>

            <Link to='section1' smooth={true}
              duration={500} className="text-xl text-white">
              <img className='w-[165px]' src={logoImg} alt="web logo image" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {links(activeSection)}
            </ul>
          </div>
          <div className="navbar-end">
            <Link to="section5" smooth={true}
              duration={500} className='btn bg-[#3181cc] border-none text-white rounded-sm px-6 hover:bg-[#4785be] hover:rounded-md'>Hire Me</Link>
          </div>
        </div>
      </section>

      {/* Sections */}
      <Element
        name="section1"
        id="section1"
        className='bg-gradient-to-r from-[#2f3d49] to-[#0d1e2e] overflow-hidden'

      >
        <Hero ></Hero>
      </Element>
      <Element
        name="section2"
        id="section2"
        className='bg-gradient-to-r from-[#304150] to-[#040E18] overflow-hidden'

      >
        <AboutMe ></AboutMe>
      </Element>
      <Element
        name="section3"
        id="section3"
        className='bg-gradient-to-r from-[#2f3d49] to-[#0d1e2e] overflow-hidden'

      >
        <SkillsSection ></SkillsSection>
      </Element>

      <Element
        name="section4"
        id="section4"
        className='bg-gradient-to-r from-[#304150] to-[#040E18] overflow-hidden'

      >
        <ProjectsSection ></ProjectsSection>
      </Element>

      <Element
        name="section5"
        id="section5"
        className='bg-gradient-to-r from-[#2f3d49] to-[#0d1e2e] overflow-hidden'

      >
        <ContactWithMe ></ContactWithMe>
      </Element>


      <div className='bg-gradient-to-r from-[#2f3d49] to-[#0d1e2e] overflow-hidden'>

        <Footer ></Footer>
      </div>


    </div>
  );
};

export default Home;

