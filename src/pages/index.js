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
import {useEffect} from "react";



const LCC_DATE = new Date("2023-09-27")

export default function Countdown() {
    useEffect(() => {
            AOS.init();
          }, [])
  return (
  <>
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width; initial-scale=1.0"/>
            <title>LCC2023</title>
            <link rel="icon" href="../../public/favicon.ico" />
            <link rel="canonical" href="http://lcc.sutd.edu.sg"/>
        </Head>
      <div className='bg-[#1C1C1C] bg-cover h-auto text-center'>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen'>
            <Image layout='responsive' src={bloom}/>
          </div>
          <div className='absolute w-screen'>
            <Image layout='responsive' src={background_icons}/>
          </div>
          <section id='sutd logo'>
                <div className='absolute left-8 top-8 md:w-[10vw] w-[24vw]'>
                    <a href='https://www.sutd.edu.sg/' target='_blank' rel="noopener noreferrer"><Image alt='sutdlogo' src={sutd_logo}/></a>
                </div>
          </section>
            <section id='header' className='pt-32 font-ron mx-auto inline-block text-left'>
                <h1 className='text-[#25F3FF] text-[4vw]' data-aos='fade-down' data-aos-delay='500'>27 Sept 2-6pm</h1>
                <h1 className='text-white text-[5vw] leading-none' data-aos='fade-down' data-aos-delay='700'>
                    LEARNING
                </h1>
                <br></br>
                <h1 className='text-white text-[5vw] leading-none' data-aos='fade-down' data-aos-delay='900'>
                    CELEBRATION
                </h1>
                <br></br>
                <h1 className='text-white text-[5vw] leading-none' data-aos='fade-down' data-aos-delay='1100'>
                    CARNIVAL
                </h1>
                <h1 className='text-[#FD8FFF] text-[4vw]' data-aos='fade-down' data-aos-delay='1300'>@ Campus Centre</h1>
            </section>
          <section id='counter'>
              <CountdownTimer targetDate={LCC_DATE} suppressHydrationWarning={true}/>
          </section>
          <section className='bg-[#596461] bg-auto h-auto mt-20 pt-4' id='remote'>
              <div className='absolute w-[96vw] left-6'>
                  <Image layout='responsive' src={top_remote_dots}/>
              </div>
              <div className='flex flex-row'>
                <div className='flex flex-wrap w-5/6 pt-4'>
                    <div className='pl-24 lg:w-[20vw] w-[28vw] md:w-[24vw] inline-block' data-aos='flip-up' data-aos-duration='700' data-aos-delay='500'>
                        <Image layout='responsive' src={top_left}/>
                    </div>
                      <div className='pl-6 relative font-ron text-[#5FFF6F] lg:leading-5 md:leading-4 sm:text-[0.8vw] md:text-[0.9vw] lg:text-[1vw]' data-aos='flip-up' data-aos-duration='700' data-aos-delay='700'>
                          <div className='w-[34vw]'>
                            <Image layout='responsive' src={top_left2}/>
                          </div>
                          <h1 className='absolute -translate-x-1/2 left-1/2 top-4 md:top-2 lg:top-4 w-[28vw]'>Free food, get a chance to win airpods pro, learn about many enriching programmes/activities your seniors experienced!
                          <br></br><br></br>(to proceed press THE button)</h1>
                      </div>
                      <div className='ml-16 pt-4'>
                          {/*Add hover effect*/}
                          <div className='relative' data-aos='flip-up' data-aos-duration='700' data-aos-delay='900'>
                              <div className='rounded-full w-36 h-36 bg-black opacity-10 mx-auto'></div>
                              <Link href='/home'><button className='absolute -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2 w-28
                               h-28 bg-[#E63B3B] rounded-full font-gotham hover:bg-[#5FFF6F]'>
                            Press Me
                            </button>
                              </Link>
                          </div>
                          <div className='w-[13vw]'>
                            <Image layout='responsive' src={button_squares}/>
                          </div>
                      </div>
                      <div className='pl-24 pt-20 w-[20vw]' data-aos='flip-up' data-aos-duration='700' data-aos-delay='1300'>
                          <Image layout='responsive' src={bottom_left}/>
                      </div>
                        <div className='pl-6 w-[35vw] pt-4' data-aos='flip-up' data-aos-duration='700' data-aos-delay='1500'>
                            <Image layout='responsive' src={bottom_left2}/>
                        </div>
                        <div className='pl-20 pt-10 w-[18vw]' data-aos='flip-up' data-aos-duration='700' data-aos-delay='1700'>
                            <Image layout='responsive' src={gps}/>
                        </div>
                    </div>
                  <div className='-ml-16 pt-16 lg:w-[16vw] md:w-[12vw]' data-aos='flip-up' data-aos-duration='700' data-aos-delay='1100'>
                      <Image layout='responsive' src={right}/>
                  </div>
              </div>
              <div className='w-[96vw] pl-6 py-2'>
                  <Image layout='responsive' src={bottom_remote_dots}/>
              </div>
          </section>
      </div>
    </>
  )
}