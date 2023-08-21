import Image from 'next/image'
import Head from 'next/head'
import AOS from 'aos';
import 'aos/dist/aos.css';

import sutd_logo from "../../public/images/logo/sutd_logo.png"
import {CountdownTimer} from "@/components/CountDownTimer";
import background_icons from "../../public/images/background/Frame 2.png"
import remote_dots from "../../public/images/remote/remote_dots.png"
import top_left from "../../public/images/remote/top_left.png"
import bottom_left from "../../public/images/remote/bottom_left.png"


const LCC_DATE = new Date("2023-09-27")

export default function Countdown() {
  return (
  <>
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width; initial-scale=1.0"/>
            <title>LCC2023</title>
            <link rel="icon" href="../../public/favicon.ico" />
            <link rel="canonical" href="http://lcc.sutd.edu.sg"/>
        </Head>
      <div className='bg-[#1C1C1C] bg-auto h-auto text-center'>
          <div className='absolute w-screen'>
            <Image src={background_icons}/>
          </div>
          <section id='sutd logo'>
                <div className='absolute left-8 top-8 md:w-[10vw] w-[24vw]'>
                    <a href='https://www.sutd.edu.sg/' target='_blank' rel="noopener noreferrer"><Image alt='sutdlogo' src={sutd_logo}/></a>
                </div>
          </section>
            <section id='header' className='pt-32 font-ron mx-auto inline-block text-left'>
                <h1 className='text-[#00FF66] text-6xl'>27 Sept 2-6pm</h1>
                <h1 className='text-white text-7xl'>LEARNING<br></br>CELEBRATION<br></br>CARNIVAL</h1>
                <h1 className='text-[#FD8FFF] text-5xl'>@ Campus Centre</h1>
            </section>
          <section id='counter'>
              <CountdownTimer targetDate={LCC_DATE} suppressHydrationWarning={true}/>
          </section>
          <section className='bg-[#596461] bg-auto h-auto mt-20' id='remote'>
              <div className='absolute'>
                  <Image src={remote_dots}/>
              </div>
              <div className='grid grid-rows-3 grid-flow-col pt-10 pl-32'>
                <div className='row-span-2 w-[12vw]'>
                    <Image src={top_left}/>
                </div>
                <div className='row-span-1 pt-2'>
                    <Image src={bottom_left}/>
                </div>
              </div>
          </section>
      </div>
    </>
  )
}