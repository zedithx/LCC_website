import Image from 'next/image'
import Head from 'next/head'
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";

import NaviBar from '../components/NaviBar'
import home_background1 from '../../public/images/background/home_background1.png'
import lcclogo from '../../public/images/LCCImages/lcclogo.png'
import bloom2 from '../../public/images/background/bloom2.png'
import bloom3 from '../../public/images/background/bloom3.png'
import bloom4 from '../../public/images/background/bloom4.png'
import bloom6 from '../../public/images/background/bloom6.png'
import pink_divider from '../../public/images/background/pink_divider.png'
import social from '../../public/images/logo/social.png'
import entertainment from '../../public/images/logo/entertainment.png'
import red_dots from '../../public/images/background/red_dots.png'
import red_dot from '../../public/images/background/red_dot.png'
import timeline from '../../public/images/posters/pubs/timeline.jpg'
import {LuckyDrawTimer} from "@/components/LuckyDrawTimer";
import Carousel from "@/components/Carousel";
import LuckyDrawModal from "@/components/LuckyDrawModal";
import FoodModal from "@/components/FoodModal";

const LUCKYDRAW_TIMING = new Date("2024-01-24 18:00")
export default function Home() {
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
      <div className='bg-[#1D1C20] bg-cover -z-20 h-auto w-full overflow-hidden'>
          <div className='absolute left-1/2 -translate-x-1/2 w-full z-10'>
              <Image layout='responsive' src={home_background1}/>
          </div>
          {/* Navibar + logo */}
          <section id='top bar' className='relative'>
            <NaviBar/>
          </section>
          {/*Countdown Alert For Luckydraw*/}
          <section id='luckydraw-countdown' className= 'pl-6 md:pl-20 md:mt-28 mt-20'>
              <LuckyDrawTimer targetTime={LUCKYDRAW_TIMING} suppressHydrationWarning={true}/>
          </section>
          {/* Top Header */}
          <section id='top-header' className='relative font-ron md:pl-20 pl-8 pt-4 md:pt-0 md:mt-10 flex flex-row items-center md:gap-6 text-left'>
              <div className='md:-space-y-4 text-white text-[4.5vw] w-1/2'>
                <h1 className='text-[#25F3FF] text-[3.5vw]' data-aos='fade-left' data-aos-delay='500'>24 Jan 2-6pm</h1>
                <h1 data-aos='fade-left' data-aos-delay='700'>
                    LEARNING
                </h1>
                <h1 data-aos='fade-left' data-aos-delay='900'>
                    CELEBRATION
                </h1>
                <h1 data-aos='fade-left' data-aos-delay='1100'>
                    CARNIVAL
                </h1>
                <h1 className='text-[#B57BFF] text-[3vw]' data-aos='fade-left' data-aos-delay='1300'>
                    @ Campus Centre & Auditorium
                </h1>
              </div>
              <div className='md:w-[30vw] w-[34vw] z-10 rounded-full' data-aos='fade-left' data-aos-delay='1700'>
                  <Image layout='responsive' src={lcclogo}/>
              </div>
              <div className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 w-3/4'>
                 <Image layout='responsive' src={bloom2}/>
              </div>
          </section>
          {/* Event explanation */}
          <section id='event-explanation'>
              <div className='absolute left-1/2 -translate-x-1/2 w-full'>
                <Image layout='responsive' src={home_background1}/>
              </div>
              <div className=''>
                  <h1 className='md:ml-24 md:pt-40 pt-20 md:text-left text-center font-ron md:text-[3vw] text-[6vw] text-[#B57BFF]'
                      data-aos='fade-up' data-aos-delay='300' data-aos-duration='800'>What is this event</h1>
                  <div className='mx-auto w-[90vw] flex z-10'>
                      <Image layout='responsive' src={pink_divider}/>
                  </div>
              </div>
              <div className='flex md:flex-row flex-col pt-10 justify-center gap-20'>
                  <div className='bg-[#596461] md:w-5/12 w-11/12 rounded-2xl mx-auto md:mx-0 pb-4 text-center z-10' data-aos='fade-right' data-aos-delay='300' data-aos-duration='800'>
                      <div className='md:w-[8vw] w-[20vw] inline-block'>
                        <Image layout='responsive' src={social}/>
                      </div>
                      <div className='bg-[#191970] w-10/12 mx-auto border-4 pb-10 border-gray-600 relative text-[#0BFFE6] font-gotham-light'>
                          <h1 className='md:text-[.5vw] text-[1.5vw] absolute top-1 md:left-3 left-2'>
                               Log: #30194
                          </h1>
                          <h1 className='md:text-[.5vw] text-[1.5vw] absolute top-1 md:right-3 right-2'>
                               Date 27092023
                          </h1>
                          <h1 className='md:text-[2vw] text-[5vw] font-ron pt-6'>
                              Projects
                          </h1>
                          <hr className='w-11/12 mx-auto border-[#5FFF6F]'/>
                          <div className='pl-8 w-10/12 pt-4 md:text-[1.2vw] text-[3.5vw] text-left'>
                            <h1 className='font-bold'>Undergraduate Research Opportunity Programme (UROP)</h1>
                              <h1 className='text-white'>
                                  Undergraduates can take part and initiate research projects while supervised by a member of faculty.
                              </h1>
                              <br></br>
                              <h1 className='font-bold'>Overseas Opportunity</h1>
                              <h1 className='text-white'>
                                  Undergraduates can go overseas for summer programmes, Global Exchange and FACT (for freshmores)
                              </h1>
                              <br></br>
                              <h1 className='font-bold'>Fifth Rows</h1>
                              <h1 className='text-white'>
                                  Undergraduates can join/create co-curricular activities to pursue their own interests
                              </h1>
                          </div>
                        </div>
                      <div className='pl-10 pt-4 md:w-[8vw] w-[28vw]'>
                        <Image src={red_dots}/>
                      </div>
                  </div>
                  <div className='bg-[#596461] md:w-5/12 w-11/12 pb-16 md:pb-0 mx-auto md:mx-0 rounded-2xl text-center z-10' data-aos='fade-left' data-aos-delay='300' data-aos-duration='800'>
                      {/*TO do carousel*/}
                      <div className='md:w-[4vw] w-[10vw] inline-block pt-6'>
                        <Image layout='responsive' src={entertainment}/>
                      </div>
                       <div className='bg-[#191970] w-10/12 mx-auto border-4 text-[#0BFFE6] border-gray-600 font-gotham-light mt-6 pb-10 relative'>
                           <h1 className='md:text-[.5vw] text-[1.5vw] absolute top-1 left-3'>
                               Log: #30195
                           </h1>
                          <h1 className='md:text-[.5vw] text-[1.5vw] absolute top-1 right-3'>
                               Date 27092023
                           </h1>
                          <h1 className='md:text-[2vw] text-[5vw] font-ron pt-6'>
                          Entertainment
                          </h1>
                           <hr className='w-11/12 mx-auto border-[#5FFF6F]'/>
                           <div className='pl-8 w-10/12 pt-4 md:text-[1.2vw] text-[3.5vw] text-left'>
                            <h1 className='font-bold'>Lucky Draw</h1>
                              <h1 className='text-white'>
                                  Stand a chance to win AirPods Pro 2nd Gen, PRISM 28-inch monitor W280, Bose SoundLink Mini II, Phillips Airfryer, WeWatch V50 Projector
                              </h1>
                              <br></br>
                              <h1 className='font-bold'>Food Stamps</h1>
                              <h1 className='text-white'>
                                  Simply collect your food stamps and redeem your ice-cream and churros!
                              </h1>
                           </div>
                        </div>
                      <div className='flex flex-row justify-around md:pt-20 pt-12 font-gotham-light text-black md:text-[1vw] text-[3vw] font-bold'>
                        {/* Modals */}
                        <div className='relative'>
                            <LuckyDrawModal/>
                        </div>
                        <div className='relative'>
                            <FoodModal/>
                        </div>
                  </div>
                  </div>
              </div>
          </section>
          <div className='absolute left-1/2 -translate-x-1/2 w-full z-10'>
              <Image layout='responsive' src={home_background1}/>
          </div>
          {/*Features*/}
          <section id='features'>
              <div className='absolute left-1/2 -translate-x-1/2 -translate-y-1/3 w-full'>
                 <Image layout='responsive' src={bloom3}/>
              </div>
              <div className='absolute left-1/2 -translate-x-1/2 -translate-y-1/3 w-full'>
                 <Image layout='responsive' src={bloom4}/>
              </div>
              <h1 className='md:ml-24 pt-28 md:text-left text-center font-ron md:text-[2.5vw] text-[7vw] text-[#B57BFF]'
                data-aos='fade-up' data-aos-delay='300' data-aos-duration='800'>
                Featuring
              </h1>
              <div className='mx-auto w-[90vw] flex z-10'>
                      <Image layout='responsive' src={pink_divider}/>
              </div>
              <div className='bg-[#596461] rounded-2xl mt-6 w-11/12 mx-auto md:pt-4 pt-8 relative pb-10 z-10'>
                  <div className='absolute md:right-14 md:top-10 right-4 top-2'>
                    <Image src={red_dot}/>
                  </div>
                <Carousel/>
              </div>
          </section>
          <section id='timeline' className='relative'>
              <h1 className='md:pl-20 md:pt-40 pt-20 font-ron md:text-[3vw] text-[7vw] text-[#B57BFF] md:text-left text-center' data-aos='fade-up' data-aos-delay='300' data-aos-duration='800'>Where and When?</h1>
              <div className='mx-auto w-[90vw] flex z-10'>
                  <Image layout='responsive' src={pink_divider}/>
              </div>
              <div className='md:w-1/2 w-10/12 mt-4 mx-auto z-20 overflow-hidden
               relative border border-4 border-[#4B5563] rounded-2xl' data-aos='flip-up' data-aos-delay='300' data-aos-duration='1200'>
                  <Image layout='responsive' src={timeline}/>
              </div>
              <div className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 w-full'>
                <Image src={bloom6} layout='responsive'/>
              </div>
          </section>
          {/* For desktop*/}
          <section id='navigation-button' className='hidden md:block pb-20 mt-20'>
            <div className='bg-[#596461] flex flex-row items-center rounded-2xl w-11/12 mx-auto gap-4' data-aos='fade-up' data-aos-duration='800'>
                <div className='bg-[#191970] ml-10 my-4 md:text-[1.3vw] text-[#0BFFE6] font-gotham
                inline-block rounded-3xl w-9/12 mx-auto border-4 border-blue-950'>
                    <h1 className='my-4 ml-6'>
                    For better navigation experience, please proceed to navigation page
                    </h1>
                </div>
                <div className='w-1/6'>
                    <Link href='/navigation' className='md:text-[1.2vw] text-[1vw] font-gotham
                     border-8 border-[#757575] hover:bg-[#5FFF6F] drop-shadow-md bg-[#E63B3B] py-3 lg:px-8 px-4 inline-block'>Navigation
                    </Link>
                </div>
            </div>
          </section>
          {/*  For mobile */}
          <section className='md:hidden'>
              <h1 className='md:hidden font-ron text-white text-center text-[5vw] mt-8 w-11/12 mx-auto'>
                  Click the button below to head to the Navigation page
              </h1>
              <div className='mx-auto text-center py-6'>
                  <Link href='/navigation' className='rounded-full text-[4vw] sm:text-[3.5vw] font-gotham sm:border-8 border-4 border-[#757575]
                  hover:bg-[#5FFF6F] drop-shadow-md bg-[#E63B3B] py-3 px-8 inline-block'>Navigation
                  </Link>
              </div>
          </section>
      </div>
      </>
  )}
