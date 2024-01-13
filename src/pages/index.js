import Image from 'next/image'
import Head from 'next/head'
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';

import sutd_logo from "../../public/images/logo/sutd_logo.png"
import {CountdownTimer} from "@/components/CountDownTimer";
import background_icons from "../../public/images/background/Frame 2.png"
import top_remote_dots from "../../public/images/remote/top_remote_dots.png"
import bottom_remote_dots from "../../public/images/remote/bottom_remote_dots.png"
import top_left from "../../public/images/remote/top_left.png"
import bottom_left from "../../public/images/remote/bottom_left.png"
import top_left2 from "../../public/images/remote/top_left2.png"
import button_squares from "../../public/images/remote/button_squares.png"
import right from "../../public/images/remote/right.png"
import bottom_left2 from "../../public/images/remote/bottom_left2.png"
import gps from "../../public/images/remote/gps.png"
import bloom from "../../public/images/background/bloom.png"
import bloompurp from "../../public/images/background/bloompurp.png"
import right_mobile from "../../public/images/remote/right_mobile.png"
import {useEffect, useState} from "react";



const LCC_DATE = new Date("2024-01-24")

export default function Countdown() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
            AOS.init();
      }, [])
    useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 600px)');
    setIsMobile(mediaQuery.matches);

    const handleChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addListener(handleChange);

    return () => {
      mediaQuery.removeListener(handleChange);
    };
  }, []);
  return (
  <>
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width; initial-scale=1.0"/>
            <title>LCC2023</title>
            <link rel="icon" href="../../public/favicon.ico" />
            <link rel="canonical" href="http://lcc.sutd.edu.sg"/>
        </Head>
      <div className='bg-[#1D1C20] bg-cover md:h-auto h-full h-auto text-center'>
          <section id='sutd logo'>
                <div className='absolute z-10 left-8 top-8 md:w-[10vw] w-[24vw]'>
                    <a href='https://www.sutd.edu.sg/' target='_blank' rel="noopener noreferrer"><Image alt='sutdlogo' src={sutd_logo}/></a>
                </div>
          </section>
          <section id='background' className='w-full overflow-hidden'>
              <div className='absolute top-0 left-0 w-7/12'>
                <Image layout='responsive' src={bloom}/>
              </div>
              <div className='absolute w-full'>
                <Image layout='responsive' src={background_icons}/>
              </div>
          </section>
            <section id='header' className='pt-32 font-ron mx-auto inline-block text-left'>
                <h1 className='text-[#25F3FF] text-[4vw]' data-aos='fade-down' data-aos-duration='800' data-aos-delay='500'>24 Jan 2-6pm</h1>
                <h1 className='text-white md:text-[5vw] text-[7vw] md:leading-none' data-aos='fade-down' data-aos-duration='800' data-aos-delay='700'>
                    LEARNING
                </h1>
                <h1 className='text-white md:text-[5vw] text-[7vw] md:leading-none' data-aos='fade-down' data-aos-duration='800' data-aos-delay='900'>
                    CELEBRATION
                </h1>
                <h1 className='text-white md:text-[5vw] text-[7vw] md:leading-none' data-aos='fade-down' data-aos-duration='800' data-aos-delay='1100'>
                    CARNIVAL
                </h1>
                <h1 className='text-[#B57BFF] md:text-[4vw] text-[6vw]' data-aos='fade-down' data-aos-duration='800' data-aos-delay='1300'>@ Campus Centre<br></br> & Auditorium</h1>
            </section>
          <section id='counter' className='relative md:pb-20 pb-10'>
              <CountdownTimer targetDate={LCC_DATE} suppressHydrationWarning={true}/>
              <div className='absolute bottom-0 right-0 w-full'>
                  <Image layout='responsive' src={bloompurp}/>
              </div>
          </section>
          {isMobile? (
          <section className='bg-[#596461] relative h-auto pt-4 pb-6' id='remote'>
              <div className='flex flex-col gap-[8vw]'>
                  <div className='flex flex-row justify-around items-center'>
                      <div className='w-[30vw] inline-block' data-aos='flip-up' data-aos-duration='800' data-aos-delay='300'>
                          <Image layout='responsive' src={bottom_left}/>
                      </div>
                      <div className='mt-auto w-[30vw]' data-aos='flip-up' data-aos-duration='800' data-aos-delay='500'>
                          <Image layout='responsive' src={top_left}/>
                      </div>
                  </div>
                  <div className='w-[80vw] mx-auto' data-aos='flip-up' data-aos-duration='800' data-aos-delay='300'>
                      <Image layout='responsive' src={bottom_left2}/>
                  </div>
                   <div className='relative font-ron text-[#74F8FF] mx-auto lg:leading-5 md:leading-4 w-[80vw]' data-aos='flip-up' data-aos-duration='800' data-aos-delay='300'>
                       <Image layout='responsive' src={top_left2}/>
                       <h1 className='absolute -translate-x-1/2 left-1/2 top-4 text-[2.5vw] md:top-2 lg:top-4 w-[70vw]'>
                          Free food, get a chance to win airpods pro, learn about many enriching programmes/activities your seniors experienced!
                          <br></br><br></br>(to proceed press THE button)
                       </h1>
                  </div>
                  <div className='flex flex-row justify-around items-center'>
                      <div className='w-[30vw]' data-aos='flip-up' data-aos-duration='800' data-aos-delay='300'>
                          <Image layout='responsive' src={gps}/>
                      </div>
                      <div className='relative' data-aos='flip-up' data-aos-duration='800' data-aos-delay='500'>
                          <div className='rounded-full w-[30vw] h-[30vw] bg-black opacity-10 mx-auto'></div>
                          <Link href='/home'>
                              <button className='absolute -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2 w-[24vw]
                              h-[24vw] bg-[#E63B3B] text-[3.5vw] rounded-full font-gotham hover:bg-[#5FFF6F]'>
                              Press Me
                              </button>
                          </Link>
                      </div>
                  </div>
                  <div className='mx-auto w-[60vw]' data-aos='flip-up' data-aos-duration='800' data-aos-delay='300'>
                      <Image layout='responsive' src={right_mobile}/>
                  </div>
              </div>
          </section>
          ) : (
          <section className='bg-[#596461] relative bg-auto h-auto pt-4' id='remote'>
              <div className='absolute w-[97vw] left-2'>
                  <Image layout='responsive' src={top_remote_dots}/>
              </div>
              <div className='flex flex-row lg:gap-[3vw] gap-[3.5vw] pt-[1vw]' data-aos='flip-up' data-aos-duration='800' data-aos-delay='500'>
                  <div className='flex flex-col pl-[6vw] w-fit'>
                      <div className='w-[14vw] inline-block'>
                          <Image layout='responsive' src={top_left}/>
                      </div>
                      <div className='mt-auto w-[14vw]'>
                          <Image layout='responsive' src={bottom_left}/>
                      </div>
                  </div>
                  <div className='flex flex-col w-fit' data-aos='flip-up' data-aos-duration='800' data-aos-delay='700'>
                      <div className='relative font-ron text-[#74F8FF] mx-auto lg:leading-5 md:leading-4 sm:text-[0.8vw]
                      md:text-[0.9vw] lg:text-[1vw] w-[34vw]'>
                          <Image layout='responsive' src={top_left2}/>
                          <h1 className='absolute -translate-x-1/2 left-1/2 lg:text-[1vw] text-[0.8vw] top-4 md:top-2 lg:top-4 w-[28vw]'>
                              Free food, get a chance to win airpods pro, learn about many enriching programmes/activities your seniors experienced!
                              <br></br><br></br>(to proceed press THE button)
                          </h1>
                      </div>
                      <div className='w-[34vw] pt-4 relative'>
                          <Image layout='responsive' src={bottom_left2}/>
                      </div>
                  </div>
                  <div className='flex flex-col w-fit' data-aos='flip-up' data-aos-duration='800' data-aos-delay='900'>
                      {/*Add hover effect*/}
                      <div className='relative'>
                          <div className='rounded-full w-[12vw] h-[12vw] bg-black opacity-10 mx-auto'></div>
                          <Link href='/home'>
                              <button className='absolute -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2 w-[10vw]
                              h-[10vw] bg-[#E63B3B] text-[1.5vw] rounded-full font-gotham hover:bg-[#5FFF6F]'>
                              Press Me
                              </button>
                          </Link>
                      </div>
                      <div className='w-[13vw]'>
                          <Image layout='responsive' src={button_squares}/>
                      </div>
                      <div className='w-[12vw] pt-2'>
                          <Image layout='responsive' src={gps}/>
                      </div>
                  </div>
                  <div className='flex flex-col w-fit'>
                      <div className='lg:w-[16vw] md:w-[18vw] w-[20vw] my-auto' data-aos='flip-up' data-aos-duration='800' data-aos-delay='1300'>
                        <Image layout='responsive' src={right}/>
                      </div>
                  </div>
                  <div className='absolute w-[97vw] md:left-2 bottom-2 left-2'>
                      <Image layout='responsive' src={bottom_remote_dots}/>
                  </div>
              </div>
          </section>
          )}
      </div>
    </>
  )
}
