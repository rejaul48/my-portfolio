import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logoImg from '../../assets/reja_web_logo.png'

const Header = () => {

    const links = <>

        <li>
            <NavLink
                //    to="section1" smooth={true} duration={500}
                className={'btn lg:text-[16px] bg-transparent text-white border-none hover:bg-transparent hover:underline'}
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                //    to="section1" smooth={true} duration={500}
                className={'btn lg:text-[16px] bg-transparent text-white border-none hover:bg-transparent hover:underline'}
            >
                About me
            </NavLink>
        </li>

        <li>
            <NavLink
                //  to="section1" smooth={true} duration={500}
                className={'btn lg:text-[16px] bg-transparent text-white border-none hover:bg-transparent hover:underline'}
            >
                Projects
            </NavLink>
        </li>
        <li>
            <NavLink
                //    to="section1" smooth={true} duration={500}
                className={'btn lg:text-[16px] bg-transparent text-white border-none hover:bg-transparent hover:underline'}
            >
                services
            </NavLink>
        </li>
        <li>
            <NavLink
                //    to="section1" smooth={true} duration={500}
                className={'btn lg:text-[16px] bg-transparent text-white border-none hover:bg-transparent hover:underline'}
            >
                Contact
            </NavLink>
        </li>



    </>

    return (
        <>

            <section className='w-full bg-blue-500 bg-opacity-45'>
                <div className="navbar container mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {
                                    links
                                }
                            </ul>
                        </div>
                        <Link className="text-xl text-white">
                        <img className='w-[165px]' src={logoImg} alt="web logo image" />
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="btn">Button</a>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Header
