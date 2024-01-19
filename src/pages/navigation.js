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
import {fifth_rows, urop, overseas_opp, spring_internship, summer_internship} from "@/static/booth"
import general_level1 from "../../public/images/maps/level1/level1_general.png"
import MapCarousel from "@/components/MapCarousel";

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
              <div className='absolute left-1/2 top-2/3 -translate-x-1/2 w-full'>
                <Image layout='responsive' src={home_background1}/>
              </div>
              <section id='navigation-map'>
                  <h1 className='pl-8 pt-10 font-ron text-[5vw] text-[#B57BFF] relative z-20'>Navigation</h1>
              {/*    Insert Image of map here: carousel*/}
                  <MapCarousel/>
                  <h1 className='w-10/12 mx-auto font-gotham md:text-[1.5vw] text-[4vw] text-white text-center mt-14'>
                      Numbers on the map indicates booth number correlated to the number on each card below
                  </h1>
              </section>
              <section id='directory' className='pt-10 pb-8'>
              {/*    Accordion UROP*/}
                  <Accordion title="Undergraduate Research Opportunities Programme (U1-U4)" booth={urop}/>
              {/*    Accordion overseas Op*/}
                  <Accordion title="Overseas Opportunities (O1-O25)" booth={overseas_opp}/>
              {/*    Accordion Fifth Row*/}
                  <Accordion title="Fifth Row (F1-F11)" booth={fifth_rows}/>
              {/*    Accordion Internships*/}
                  <Accordion title="Spring Internship @ 2-4 (Level 2)" booth={spring_internship} />
                  <Accordion title="Summer Internship @ 4-6 (Level 2)" booth={summer_internship} />
              </section>
            </div>
      </>
  )}