import {Link} from "react-scroll";
import {Component, useEffect} from "react";
import asi from "../../public/images/logo/asi.png"
import overseas_feature from "../../public/images/LCCImages/overseas_feature.png"
import fifthrow_feature from "../../public/images/LCCImages/fifthrow_feature.png"
import Image from "next/image";

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
            this.state.currentSlide === 7
                ? 0
                : this.state.currentSlide + 1;
        this.setState({currentSlide: newSlide});
    };

    prevSlide = () => {
        let newSlide =
            this.state.currentSlide === 0
                ? 7
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
                <nav className="w-full md:space-x-10 pt-4 pl-8 font-gotham text-black text-[1vw]" data-aos='fade-right' data-aos-delay='300' data-aos-duration='800'>
                  {[
                    ['UROP', [0]],
                    ['Overseas', [1]],
                    ['Fifth Row', [2]]
                  ].map(([title, index]) => (
                      // eslint-disable-next-line react/jsx-key
                    <Link className={`border-8 border-[#757575] rounded-full hover:bg-[#680000] hover:text-white drop-shadow-md bg-[#E63B3B] py-3 px-12 
                    ${index.includes(this.state.currentSlide) ? 'text-white bg-[#680000]' : 'bg-[#E63B3B]'}`}
                          onClick={() => {
                            this.setCurrentSlide(index[0]);
                          }} smooth={true} style={{cursor: 'pointer'}}>{title}</Link>
                  ))}
                </nav>
                {(this.state.currentSlide === 0) ? (
                    <>
                        <div className='bg-[#191970] w-11/12 mx-auto border-4 text-[#0BFFE6] border-gray-600 font-ron
                        pl-10 mt-14 pb-24 text-left' data-aos='fade-right' data-aos-duration='800'>
                            <h1 className='mt-10 text-[2.5vw] w-10/12'>
                                Towards Air Cargo Demand Forecasting for Southeast Asia
                            </h1>
                            <div className='flex flex-wrap mt-4 gap-10'>
                                <h1 className='font-gotham-light text-white text-[1.2vw] w-6/12'>
                                    In this undergraduate research program, students analyze air cargo demand for Southeast Asia, utilizing IATA’s CargoIS and macroeconomic datasets. They engage in data analysis, econometric testing, and visualizations using R and Python, examining trade policies and economic factors in ASEAN countries. This program offers a comprehensive research experience, ideal for students keen on exploring complex economic trends and their impact on regional trade dynamics.
                                </h1>
                                <div className='w-4/12'>
                                    <Image src={asi} layout='responsive'/>
                                </div>
                            </div>
                        </div>
                    </>
                ): null}
                {(this.state.currentSlide === 1) ? (
                    <>
                        <div className='bg-[#191970] w-11/12 mx-auto border-4 text-[#0BFFE6] border-gray-600 font-ron
                         pl-10 mt-14 pb-12 text-left' data-aos={`${(this.state.previousSlide > 1) ? 'fade-right' : "fade-left"}`} data-aos-duration='800'>
                            <h1 className='mt-10 text-[2.5vw] w-10/12'>
                                Overseas Opportunity @ Berkeley
                            </h1>
                            <div className='flex flex-wrap mt-4 gap-10 align-middle'>
                                <h1 className='font-gotham-light text-white md:text-[1.5vw] text-[1.7vw] w-6/12 md:mt-10'>
                                    Embark on an exhilarating journey at UC Berkeley's Global Experience, where you'll delve into environmental science, game theory, and neurodiversity. Capture life through digital photography, explore nature's wonders, and immerse yourself in the vibrant culture and history of San Francisco, all while embracing the dynamic Berkeley lifestyle.
                                </h1>
                                <div className='md:w-4/12 w-3/12'>
                                    <Image src={overseas_feature} layout='responsive'/>
                                </div>
                            </div>
                        </div>
                    </>
                ): null}
                {(this.state.currentSlide === 2) ? (
                    <>
                        <div className='bg-[#191970] w-11/12 mx-auto border-4 text-[#0BFFE6] border-gray-600 font-ron pl-10 mt-14 pb-12 text-left'
                        data-aos="fade-left" data-aos-duration='800'>
                            <h1 className='mt-10 text-[2.5vw] w-10/12'>
                                Students for the Exploration and
                            </h1>
                            <h1 className='text-[2.5vw] w-6/12'>
                                Development of space
                            </h1>
                            <div className='flex flex-wrap mt-6 gap-10'>
                                <h1 className='font-gotham-light text-white text-[1.4vw] w-7/12'>
                                    Join the thrill of space exploration with SEDS-SUTD! This student club is your gateway to rocketry, where you'll design and build rockets like the Mynah-1. Embrace the challenge of Project Sunbird, pushing the boundaries of aerospace engineering. It's a hub for space enthusiasts to innovate, collaborate, and dream big about rockets, satellites, and beyond. Get ready to ignite your passion for the stars and be a part of shaping the future of space technology!
                                </h1>
                                <div className='md:w-3/12 w-2/12'>
                                    <Image src={fifthrow_feature} layout='responsive'/>
                                </div>
                            </div>
                        </div>
                    </>
                ): null}
            </>
        )
    }
}