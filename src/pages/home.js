import Image from 'next/image'
import Head from 'next/head'
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";

import NaviBar from '../components/NaviBar'
import home_background1 from '../../public/images/background/home_background1.png'
import cuteasyraf from '../../public/images/LCCImages/cuteasyraf.png'
import bloom2 from '../../public/images/background/bloom2.png'
import bloom3 from '../../public/images/background/bloom3.png'
import bloom4 from '../../public/images/background/bloom4.png'
import pink_divider from '../../public/images/background/pink_divider.png'
import social from '../../public/images/logo/social.png'
import entertainment from '../../public/images/logo/entertainment.png'
import red_dots from '../../public/images/background/red_dots.png'
import red_dot from '../../public/images/background/red_dot.png'
import timeline from '../../public/images/posters/pubs/timeline.jpg'
import {LuckyDrawTimer} from "@/components/LuckyDrawTimer";
import Carousel from "@/components/Carousel";

const LUCKYDRAW_TIMING = new Date("2024-01-27 18:00")
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
      <div className='bg-[#1C1C1C] bg-cover -z-20 h-auto w-full'>
          <div className='absolute left-1/2 -translate-x-1/2 w-full z-10'>
              <Image layout='responsive' src={home_background1}/>
          </div>
          {/* Navibar + logo */}
          <section id='top bar' className='relative'>
            <NaviBar/>
          </section>
          {/*Countdown Alert For Luckydraw*/}
          <section id='luckydraw-countdown' className= 'pl-20 pt-32'>
              <LuckyDrawTimer targetTime={LUCKYDRAW_TIMING} suppressHydrationWarning={true}/>
          </section>
          {/* Top Header */}
          <section id='top-header' className='font-ron pl-20 flex flex-row text-left'>
              <div className='pt-10'>
                <h1 className='text-[#25F3FF] text-[3.5vw]' data-aos='fade-left' data-aos-delay='500'>27 Sept 2-6pm</h1>
                <h1 className='text-white text-[4.5vw] leading-none' data-aos='fade-left' data-aos-delay='700'>
                    LEARNING
                </h1>
                <br></br>
                <h1 className='text-white text-[4.5vw] leading-none' data-aos='fade-left' data-aos-delay='900'>
                    CELEBRATION
                </h1>
                <br></br>
                <h1 className='text-white text-[4.5vw] leading-none' data-aos='fade-left' data-aos-delay='1100'>
                    CARNIVAL
                </h1>
                <h1 className='text-[#B57BFF] text-[3vw] pt-4' data-aos='fade-right' data-aos-delay='1300'>@ Campus Centre & <br></br>Auditorium</h1>
         </div>
          <div className='pl-20 w-[45vw] z-10' data-aos='fade-left' data-aos-delay='1700'>
              <Image layout='responsive' src={cuteasyraf}/>
          </div>
          </section>
          {/* Event explanation */}
          <section id='event-explanation'>
              <div className='absolute left-1/2 -translate-x-1/2 -translate-y-1/4 top-1/2 w-3/4'>
                 <Image layout='responsive' src={bloom2}/>
              </div>
              <div className='absolute left-1/2 -translate-x-1/2 w-full z-10'>
                <Image layout='responsive' src={home_background1}/>
             </div>
              <h1 className='pl-20 pt-40 font-ron text-[3vw] text-[#B57BFF]'>What is this event</h1>
              <div className='w-11/12 inline-block pl-14 mt-4'>
                  <Image layout='responsive' src={pink_divider}/>
              </div>
              <div className='flex flex-row pt-10 justify-center gap-20'>
                  <div className='bg-[#596461] w-5/12 rounded-2xl pb-4 text-center z-10'>
                      <div className='w-[8vw] inline-block'>
                        <Image layout='responsive' src={social}/>
                      </div>
                      <div className='bg-[#191970] w-10/12 mx-auto border-4 pb-10 border-gray-600 relative text-[#0BFFE6] font-gotham-light'>
                           <h1 className='text-[.5vw] absolute top-1 left-3'>
                               Log: #30194
                           </h1>
                          <h1 className='text-[.5vw] absolute top-1 right-3'>
                               Date 27092023
                           </h1>
                          <h1 className='text-[2vw] font-ron pt-6'>
                          Projects
                          </h1>
                          <hr className='w-11/12 mx-auto border-[#5FFF6F]'/>
                          <div className='pl-8 w-10/12 pt-4 text-[1.2vw] text-left'>
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
                      <div className='pl-10 pt-4 w-[8vw]'>
                        <Image src={red_dots}/>
                      </div>
                  </div>
                  <div className='bg-[#596461] w-5/12 rounded-2xl text-center z-10'>
                      <div className='w-[4vw] inline-block pt-6'>
                        <Image layout='responsive' src={entertainment}/>
                      </div>
                       <div className='bg-[#191970] w-10/12 mx-auto border-4 text-[#0BFFE6] border-gray-600 font-gotham-light mt-6 pb-10 relative'>
                           <h1 className='text-[.5vw] absolute top-1 left-3'>
                               Log: #30195
                           </h1>
                          <h1 className='text-[.5vw] absolute top-1 right-3'>
                               Date 27092023
                           </h1>
                          <h1 className='text-[2vw] font-ron pt-6'>
                          Entertainment
                          </h1>
                           <hr className='w-11/12 mx-auto border-[#5FFF6F]'/>
                           <div className='pl-8 w-10/12 pt-4 text-[1.2vw] text-left'>
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
                      <div className='flex flex-row justify-around pt-20 font-gotham-light text-black text-[1vw] font-bold'>
                        <div className='relative'>
                            <Link href='/luckydraw' className='border-8 border-[#757575] hover:bg-[#5FFF6F] drop-shadow-md bg-[#E63B3B] py-1 px-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                Lucky Draw
                            </Link>
                        </div>
                        <div className='relative'>
                            <Link href='/food' className='border-8 border-[#757575] hover:bg-[#5FFF6F] drop-shadow-md bg-[#E63B3B] py-3 px-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                    Food
                            </Link>
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
            <h1 className='pl-20 pt-20 font-ron text-[2.5vw] text-[#B57BFF]'>Featuring</h1>
          {/*    Insert Carousel here */}
              <div className='bg-[#596461] rounded-2xl mt-12 w-11/12 mx-auto pt-4 relative pb-[40vw] z-10'>
                  <div className='absolute right-14 top-10'>
                    <Image src={red_dot}/>
                  </div>
              {/*    Insert Carousel   */}
                <Carousel/>
              </div>
          </section>
          <section id='timeline'>
              <h1 className='pl-20 pt-40 font-ron text-[3vw] text-[#B57BFF]'>Where and When?</h1>
              <div className='w-11/12 inline-block pl-14 mt-4'>
                  <Image layout='responsive' src={pink_divider}/>
              </div>
              <div className='w-1/2 mt-4 mx-auto'>
                  <Image layout='responsive' src={timeline}/>
              </div>
          </section>
          <section id='map'>
          {/*    Insert Map here   */}
          </section>
          <section id='navigation-button' className='pb-20 mt-20'>
            <div className='bg-[#596461] rounded-2xl w-11/12 mx-auto space-x-10'>
                <div className='bg-[#191970] ml-10 my-4 md:text-[1.3vw] text-[1vw] text-[#0BFFE6] font-gotham inline-block rounded-3xl w-9/12 mx-auto border-4 border-blue-950'>
                    <h1 className='my-4 ml-6'>
                    For better navigation experience, please proceed to navigation page
                    </h1>
                </div>
                <div className='inline-block w-1/6'>
                  <Link href='/navigation' className='md:text-[1.2vw] text-[1vw] font-gotham border-8 border-[#757575] hover:bg-[#5FFF6F] drop-shadow-md bg-[#E63B3B] py-3 px-8 inline-block'>
                      Navigation
                    </Link>
                </div>
            </div>
          </section>
      </div>
      </>
  )}
