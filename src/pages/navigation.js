import {useEffect} from "react";
import AOS from "aos";
import Head from "next/head";
import Image from "next/image";
import home_background1 from "../../public/images/background/home_background1.png";
import NaviBar from "@/components/NaviBar";
import {LuckyDrawTimer} from "@/components/LuckyDrawTimer";
import bloom5 from "../../public/images/background/bloom5.png"
import cat_icon from "../../public/images/background/cat_icon.png"
import Accordion from "@/components/Accordion";
import {fifth_rows, urop, overseas_opp} from "@/static/booth"
import general_map from "../../public/images/LCCImages/general_map.jpg"

const LUCKYDRAW_TIMING = new Date("2024-01-27 18:00")

export default function Navigation() {
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
          <div className='bg-[#1D1C20] bg-cover -z-20 h-auto w-full'>
              <div className='absolute left-1/2 -translate-x-1/2 w-full z-10'>
                  <Image layout='responsive' src={home_background1}/>
              </div>
              {/* Navibar + logo */}
              <section id='top bar' className='relative'>
                <NaviBar/>
              </section>
              {/*Background bloom*/}
              <section id='background-bloom'>
                  <div className='absolute right-1/4 w-1/12 top-1/4 -translate-y-2/3'>
                    <Image layout='responsive' src={cat_icon}/>
                  </div>
                  <div className='absolute right-0 w-2/3'>
                    <Image layout='responsive' src={bloom5}/>
                  </div>
              </section>
              {/*Countdown Alert For Luckydraw*/}
              <section id='luckydraw-countdown' className= 'pl-8 pt-32'>
                  <LuckyDrawTimer targetTime={LUCKYDRAW_TIMING} suppressHydrationWarning={true}/>
              </section>
              <section id='navigation-map'>
                  <h1 className='pl-8 pt-10 font-ron text-[5vw] text-[#B57BFF] relative z-20'>Navigation</h1>
              {/*    Insert Image of map here: carousel*/}
                  <div className='pl-8 w-9/12 z-20 relative'>
                      <Image src={general_map}/>
                  </div>
                  <h1 className='font-gotham text-white text-center mt-14'>
                      Numbers on the map indicates booth number correlated to the number on each card below
                  </h1>
              </section>
              <section id='directory' className='pt-10 pb-8'>
              {/*    Accordion UROP*/}
                  <Accordion title="Undergraduate Research Opportunities Programme (1-4)" booth={urop}/>
              {/*    Accordion overseas Op*/}
                  <Accordion title="Overseas Opportunities (5-29)" booth={overseas_opp}/>
              {/*    Accordion Fifth Row*/}
                  <Accordion title="Fifth Row (30-40)" booth={fifth_rows}/>
              {/*    Accordion Food Booths*/}
              </section>
            </div>
      </>
  )}