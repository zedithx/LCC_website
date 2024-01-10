import {Component, useState} from "react";
import Image from "next/image";


export default function Accordion(props){
    const [accordionOpen, setAccordionOpen] = useState(false);
    const handleAccordion = () => {
        setAccordionOpen(!accordionOpen)
    }
    const booths = props.booth
    return (
        <div className='bg-[#596461] rounded-2xl w-11/12 mx-auto mb-4'>
            <div className='space-x-20 py-4 flex flex-wrap'>
                <div className='bg-[#191970] ml-10 md:text-[1.3vw] text-[1vw]
                 text-[#0BFFE6] font-ron inline-block w-9/12 border-4 border-gray-600'>
                    <h1 className='ml-10 py-4 text-[1.4vw]'>
                        {props.title}
                    </h1>
                </div>
                <button onClick={handleAccordion}
                        className='inline-block border-8 border-[#2C2C2C] mt-2 w-[4vw] h-[4vw] bg-[#B20202] hover:bg-[#5FFF6F]'>
                </button>
             </div>
            <div className={`flex flex-wrap gap-4 justify-around transition-all duration-500 ease-in-out ${accordionOpen ? 'opacity-100 pb-4' : 'opacity-0'}`}>
            {accordionOpen &&
            booths.map((booth) => {
                return(
                    <>
                        <div className='bg-[#420059] border-4 px-4 pt-4 pb-10 border-gray-600 w-5/12'>
                            {/*Put Image instead of pink square here*/}
                            <Image layout='responsive' loading='lazy' src={booth.poster}/>
                            {/*<div className='bg-[#D587FA] h-40'>*/}
                            {/*</div>*/}
                            <div className='font-gotham text-[#D587FA] pt-2 text-[1.8vw]'>
                                <h1>{booth.number}</h1>
                                <h1>{booth.title}</h1>
                            </div>
                            {booth.description && (
                            <div className='font-gotham text-white pt-2 inline-block'>
                                <h1>{booth.description}</h1>
                            </div>
                                )}
                        </div>
                    </>
                )
            })}
            </div>
        </div>

    )
}
