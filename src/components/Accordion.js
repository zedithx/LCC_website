import {Component, useState} from "react";
import Image from "next/image";
import rocket from '../../public/images/rocket/rocket_arrow.png'
import { Link } from "react-scroll"
import ImageWithSpinner from "@/components/ImageWithSpinner";

const transitionStyles = {
  entering: { opacity: 0, maxHeight: 0 },
  entered: { opacity: 1, maxHeight: '40000px' }, // Adjust the maxHeight value as needed
  exiting: { opacity: 0, maxHeight: 0 },
  exited: { opacity: 0, maxHeight: 0 },
};

export default function Accordion(props){
    const [accordionOpen, setAccordionOpen] = useState(false);
    const handleAccordion = () => {
        setAccordionOpen(!accordionOpen)
    }
    const booths = props.booth
    return (
        <div id='top' className='bg-[#596461] rounded-2xl w-11/12 mx-auto mb-4' data-aos='fade-up' data-aos-duration='800'>
            <div className='md:space-x-20 space-x-6 items-center py-4 flex flex-row'>
                <div className='bg-[#191970] md:ml-10 ml-4 text-[#0BFFE6] font-ron md:w-9/12 w-7/12 border-4 border-gray-600'>
                    <h1 className='md:ml-10 ml-4 py-4 md:text-[1.4vw] text-[3vw]'>
                        {props.title}
                    </h1>
                </div>
                <button onClick={handleAccordion}
                        className='md:border-8 border-8 border-[#2C2C2C] md:w-[4vw] md:h-[4vw] w-[16vw] h-[16vw] bg-[#B20202] hover:bg-[#5FFF6F]'>
                </button>
             </div>
            <div className={`flex flex-wrap gap-4 justify-around transition-all duration-500 ease-in-out 
            ${accordionOpen ? 'opacity-100 pb-4' : 'opacity-0'}`} style={transitionStyles[accordionOpen ? 'entered' : 'exited']}>
            {accordionOpen &&
            booths.map((booth) => {
                const getInternshipClass = () => {
                  switch (booth.number[0]) {
                    case 'A':
                      return 'bg-[#ffde59]';
                    case 'B':
                      return 'bg-[#00bf63]';
                    case 'C':
                      return 'bg-[#5ce1e6]';
                    case 'D':
                      return 'bg-[#C0C0C0]';
                    case 'E':
                      return 'bg-[#ff914d]';
                    default:
                      return 'bg-[#420059]';
                  }
                };
                const getInternshipClassText = () => {
                  switch (booth.number[0]) {
                    case 'A':
                      return 'text-[#597AFF]';
                    case 'B':
                      return 'text-[#BF005C]';
                    case 'C':
                      return 'text-[#E6615C]';
                    case 'D':
                      return 'text-black';
                    case 'E':
                      return 'text-[#4DFFD8]';
                    default:
                      return 'text-[#D587FA]';
                  }
                };
                return(
                    <>
                        <div className={`border-4 px-4 pt-4 mx-auto md:mx-0 pb-10 border-gray-600 md:w-5/12 w-11/12
                        ${getInternshipClass()}`} data-aos='fade-up' data-aos-duration='500'>
                            {booth.poster && (
                            <ImageWithSpinner layout='responsive' loading='lazy' src={booth.poster}/>
                            )}
                            <div className={`font-gotham pt-2 md:text-[1.8vw] text-[5vw] ${getInternshipClassText()}`}>
                                <h1>{booth.number}</h1>
                                <h1>{booth.title}</h1>
                            </div>
                            {booth.description && (
                            <div className='font-gotham text-white md:text-[1.3vw] text-[4vw] pt-2 inline-block'>
                                <h1>{booth.description}</h1>
                            </div>
                                )}
                        </div>
                    </>
                )
            })}
            </div>
            {accordionOpen && (
            <>
                <div className='flex items-center relative md:py-14 py-8'>
                    <h1 className='font-gotham text-center mx-auto md:mx-0 text-white md:text-[3.5vw] text-[5vw] md:w-full w-3/5'>Press the rocket to go back up!</h1>
                    <div className='absolute right-4 md:w-[10vw] w-[15vw]'>
                        <Link to='top' smooth={true} style={{cursor: 'pointer'}}>
                            <Image alt='rocket' src={rocket}/>
                        </Link>
                        {/*<RocketIcon className='mr-10 mb-10 text-white' style={{cursor: 'pointer', fontSize: 100}}/>*/}
                    </div>
                </div>
            </>
                    )}
        </div>

    )
}
