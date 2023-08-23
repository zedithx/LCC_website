import {useEffect} from "react";
import AOS from "aos";
import Head from "next/head";
import NaviBar from "@/components/NaviBar";

export default function LuckyDraw() {
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
      <div className='bg-[#1C1C1C] bg-cover -z-20 h-auto w-screen'>
          {/* Navibar + logo */}
          <section id='top bar' className='relative'>
            <NaviBar/>
          </section>
          <section id='top-header' className='pt-40 font-ron pl-20 text-left'>
            <h1 className='text-[4vw] text-[#25F3FF]'>Lucky Draw</h1>
          </section>
      </div>
  </>
  )}