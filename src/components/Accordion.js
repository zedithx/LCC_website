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
            <div className='md:space-x-20 space-x-6 items-center py-4 flex flex-row'>
                <div className='bg-[#191970] md:ml-10 ml-4 md:text-[1.3vw] text-[1vw]
                 text-[#0BFFE6] font-ron md:w-9/12 w-7/12 border-4 border-gray-600'>
                    <h1 className='md:ml-10 ml-4 py-4 md:text-[1.4vw] text-[3vw]'>
                        {props.title}
                    </h1>
                </div>
                <button onClick={handleAccordion}
                        className='md:border-8 border-8 border-[#2C2C2C] md:w-[4vw] md:h-[4vw] w-[16vw] h-[16vw] bg-[#B20202] hover:bg-[#5FFF6F]'>
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
