import {Link} from "react-scroll";
import {Component, useEffect} from "react";
import asi from "../../public/images/logo/asi.png"
import overseas_feature from "../../public/images/LCCImages/overseas_feature.png"
import fifthrow_feature from "../../public/images/LCCImages/fifthrow_feature.png"
import Image from "next/image";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSlide: 0,
            previousSlide: null,
        };
    }

    nextSlide = () => {
        let newSlide =
            this.state.currentSlide === 2
                ? 0
                : this.state.currentSlide + 1;
        this.setState({currentSlide: newSlide});
    };

    prevSlide = () => {
        let newSlide =
            this.state.currentSlide === 0
                ? 2
                : this.state.currentSlide - 1;
        this.setState({currentSlide: newSlide});
    };

    setCurrentSlide = (index) => {
        this.setState((prevState) => ({
            currentSlide: index,
            previousSlide: prevState.currentSlide
        }));
    };
    render() {
        return (
            <>
                <nav className="hidden md:block w-full md:space-x-10 pt-4 pl-8 font-gotham text-black text-[1vw]" data-aos='fade-right' data-aos-delay='300' data-aos-duration='800'>
                  {[
                    ['UROP', [0]],
                    ['Overseas', [1]],
                    ['Fifth Row', [2]]
                  ].map(([title, index]) => (
                      // eslint-disable-next-line react/jsx-key
                    <Link className={`border-8 border-[#757575] rounded-full hover:bg-[#680000] hover:text-white drop-shadow-md py-3 px-12 
                    ${index.includes(this.state.currentSlide) ? 'bg-[#680000] text-white' : 'bg-[#E63B3B]'}`}
                          onClick={() => {
                            this.setCurrentSlide(index[0]);
                          }} smooth={true} style={{cursor: 'pointer'}}>{title}</Link>
                  ))}
                </nav>
                {(this.state.currentSlide === 0) ? (
                    <>
                        <div className='bg-[#191970] w-11/12 mx-auto border-4 text-[#0BFFE6] rounded-2xl md:rounded-none border-gray-600 font-ron
                        md:pl-10 md:mt-14 md:pb-24 pb-4 md:text-left text-center' data-aos='fade-right' data-aos-duration='800'>
                            <h1 className='md:mt-10 mt-4 md:mx-0 mx-auto md:text-[2.5vw] text-[5vw] md:w-10/12 w-11/12'>
                                Towards Air Cargo Demand Forecasting for Southeast Asia
                            </h1>
                            <div className='flex md:flex-row flex-col-reverse items-center mx-auto mt-4 gap-6 md:gap-10'>
                                <h1 className='font-gotham-light text-white md:text-[1.2vw] text-[4vw] md:w-6/12 w-10/12 text-left'>
                                    In this undergraduate research program, students analyze air cargo demand for Southeast Asia, utilizing IATA&apos;s CargoIS and macroeconomic datasets. They engage in data analysis, econometric testing, and visualizations using R and Python, examining trade policies and economic factors in ASEAN countries. This program offers a comprehensive research experience, ideal for students keen on exploring complex economic trends and their impact on regional trade dynamics.
                                </h1>
                                <div className='md:w-4/12 w-11/12'>
                                    <Image src={asi} layout='responsive'/>
                                </div>
                            </div>
                        </div>
                    </>
                ): null}
                {(this.state.currentSlide === 1) ? (
                    <>
                        <div className='bg-[#191970] w-11/12 mx-auto border-4 text-[#0BFFE6] rounded-2xl md:rounded-none
                        border-gray-600 font-ron
                         md:pl-10 md:mt-14 md:pb-24 pb-4 md:text-left text-center'
                         data-aos={`${(this.state.previousSlide > 1) ? 'fade-right' : "fade-left"}`} data-aos-duration='800'>
                            <h1 className='md:mt-10 mt-4 md:mx-0 mx-auto md:text-[2.5vw] text-[5vw] md:w-10/12 w-11/12'>
                                Overseas Opportunity @ Berkeley
                            </h1>
                            <div className='flex md:flex-row flex-col-reverse items-center mx-auto mt-4 md:gap-10 gap-6'>
                                <h1 className='font-gotham-light text-white md:text-[1.5vw] text-[4vw] md:w-6/12 w-10/12 text-left md:mt-10'>
                                    Embark on an exhilarating journey at UC Berkeley&apos;s Global Experience, where you'll delve into environmental science, game theory, and neurodiversity. Capture life through digital photography, explore nature's wonders, and immerse yourself in the vibrant culture and history of San Francisco, all while embracing the dynamic Berkeley lifestyle.
                                </h1>
                                <div className='md:w-4/12 w-8/12'>
                                    <Image src={overseas_feature} layout='responsive'/>
                                </div>
                            </div>
                        </div>
                    </>
                ): null}
                {(this.state.currentSlide === 2) ? (
                    <>
                        <div className='bg-[#191970] w-11/12 mx-auto border-4 text-[#0BFFE6] rounded-2xl md:rounded-none
                        border-gray-600 font-ron md:pl-10 md:mt-14 md:pb-12 pb-2 md:text-left text-center'
                        data-aos="fade-left" data-aos-duration='800'>
                            <h1 className='md:mt-10 mt-4 md:mx-0 mx-auto md:text-[2.5vw] text-[5.5vw] md:w-10/12 w-11/12'>
                                Students for the Exploration and <br></br>Development of Space
                            </h1>
                            <div className='flex md:flex-row flex-col-reverse items-center mx-auto mt-6 md:gap-10 gap-6'>
                                <h1 className='font-gotham-light text-white md:text-[1.4vw] text-[4vw] md:w-7/12 w-10/12 text-left'>
                                    Join the thrill of space exploration with SEDS-SUTD! This student club is your gateway to rocketry,
                                    where you'll design and build rockets like the Mynah-1. Embrace the challenge of Project Sunbird,
                                    pushing the boundaries of aerospace engineering. It&apos;s a hub for space enthusiasts to innovate,
                                    collaborate, and dream big about rockets, satellites, and beyond. Get ready to ignite your passion for
                                    the stars and be a part of shaping the future of space technology!
                                </h1>
                                <div className='md:w-3/12 w-8/12'>
                                    <Image src={fifthrow_feature} layout='responsive'/>
                                </div>
                            </div>
                        </div>
                    </>
                ): null}
                 <nav className="md:hidden flex flex-row justify-evenly mt-6 font-gotham text-black text-[4vw]"
                      data-aos='fade-right' data-aos-delay='300' data-aos-duration='500'>
                    <ArrowBackIosIcon className='text-white self-center' onClick={() => {
                            this.prevSlide();
                          }} smooth={true} style={{cursor: 'pointer', fontSize: 40}}/>
                  {[
                    ['UROP', [0]],
                    ['Overseas', [1]],
                    ['Fifth Row', [2]]
                  ].map(([title, index]) => (
                      // eslint-disable-next-line react/jsx-key
                    <Link className={`border-8 border-[#757575] rounded-full w-6/12 text-center bg-[#E63B3B] hover:text-white drop-shadow-md py-3 
                    ${index.includes(this.state.currentSlide) ? '' : 'hidden'}`}
                          onClick={() => {
                            this.setCurrentSlide(index[0]);
                          }} smooth={true} style={{cursor: 'pointer'}}>{title}</Link>
                  ))}
                     <ArrowForwardIosIcon className='text-white self-center' onClick={() => {
                            this.nextSlide();
                          }} smooth={true} style={{cursor: 'pointer', fontSize: 40}}/>
                </nav>
            </>
        )
    }
}