import React, { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image";
import sutd_logo from "../../public/images/logo/sutd_logo.png";

export default function NaviBar() {
    const [navState, setNavState] = useState(false)
    return (
    <>
        <div className='absolute z-20 left-8 top-8 md:w-[10vw] w-[18vw]'>
            <a href='https://www.sutd.edu.sg/' target='_blank' rel="noopener noreferrer"><Image alt='sutdlogo' src={sutd_logo}/></a>
        </div>
        <button
            className="absolute right-2 top-8 text-white cursor-pointer py-3 px-3 z-30"
            onClick={() => setNavState(!navState)}
          >
            {navState ? (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8h16M4 16h16"
                ></path>
              </svg>
            )}
          </button>
        {navState && (
            <div className="w-full w-0 h-0 overflow-hidden">
                <br></br>
                <ul className="absolute z-20 top-8 right-0 pl-4 pt-14 pb-2 bg-gradient-to-r from-[#313866] to-sky-800 rounded-2xl text-right" data-aos='fade-left' data-aos-duration='700'>
                    {[
                    ['Countdown', '/'],
                    ['Home', '/home'],
                    ['Navigation', '/navigation'],
                  ].map(([title, url]) => (
                        // eslint-disable-next-line react/jsx-key
                    <li className='pb-2'>
                        <Link onClick={() => setNavState(!navState)} href={url} smooth={true} className="pl-2 mr-6 md:text-[2vw] text-[3vw] text-white font-semibold font-ron">{title}</Link>
                    </li>
                    ))}
                </ul>
            </div>
        )}
        </>
    )}