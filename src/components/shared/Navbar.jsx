import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import User from '@/assets/user.png';
import NavLink from './NavLink.jsx'

const Navbar = () => {
    return (
        <div>
          
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost md:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {" "}
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />{" "}
                            </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                        >
                            <li>
                                <NavLink href={"/"}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink href={"/about"}>About</NavLink>
                            </li>
                            <li>
                                <NavLink href={"/career"}>Career</NavLink>
                            </li>
                        </ul>
                    </div>
                    {/*<a className="btn btn-ghost text-xl">Dragon News</a>*/}
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <NavLink href={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink href={"/about"}>About</NavLink>
                        </li>
                        <li>
                            <NavLink href={"/career"}>Career</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end pr-4 flex gap-2">
                  <Image src={User} alt="User Avatar" width={30} height={30}/>
                    <Link href={"/login"} className="btn bg-gray-700 text-white">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
