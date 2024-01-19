import {Component, useState} from "react";
import Image from "next/image";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import general_level1 from "../../public/images/maps/level1/level1_general.png"
import level1_overseas_block from "../../public/images/maps/level1/blocks/level1_overseas_block.png"
import level1_fifthrow_block from "../../public/images/maps/level1/blocks/level1_fifthrow_block.png"
import level1_urop_block from "../../public/images/maps/level1/blocks/level1_urop_block.png"
import level1_fifthrow from "../../public/images/maps/level1/level1_fifthrow.png"
import level1_urop from "../../public/images/maps/level1/level1_urop.png"
import level1_overseas from "../../public/images/maps/level1/level1_overseas.png"
import level2_spring from "../../public/images/maps/level2/spring/level2_spring.png"
import level2_spring_blue from "../../public/images/maps/level2/spring/level2_spring_blue.png"
import level2_spring_gray from "../../public/images/maps/level2/spring/level2_spring_gray.png"
import level2_spring_green from "../../public/images/maps/level2/spring/level2_spring_green.png"
import level2_spring_orange from "../../public/images/maps/level2/spring/level2_spring_orange.png"
import level2_spring_yellow from "../../public/images/maps/level2/spring/level2_spring_yellow.png"
import level2_spring_blue_block from "../../public/images/maps/level2/spring/blocks/level2_spring_blue_block.png"
import level2_spring_gray_block from "../../public/images/maps/level2/spring/blocks/level2_spring_gray_block.png"
import level2_spring_green_block from "../../public/images/maps/level2/spring/blocks/level2_spring_green_block.png"
import level2_spring_orange_block from "../../public/images/maps/level2/spring/blocks/level2_spring_orange_block.png"
import level2_spring_yellow_block from "../../public/images/maps/level2/spring/blocks/level2_spring_yellow_block.png"
import level2_summer from "../../public/images/maps/level2/summer/lvl2_summer.png"
import level2_summer_blue from "../../public/images/maps/level2/summer/lvl2_summer_blue.png"
import level2_summer_gray from "../../public/images/maps/level2/summer/lvl2_summer_gray.png"
import level2_summer_green from "../../public/images/maps/level2/summer/lvl2_summer_green.png"
import level2_summer_greentop from "../../public/images/maps/level2/summer/lvl2_summer_greentop.png"
import level2_summer_orange from "../../public/images/maps/level2/summer/lvl2_summer_orange.png"
import level2_summer_yellow from "../../public/images/maps/level2/summer/lvl2_summer_yellow.png"
import level2_summer_blue_block from "../../public/images/maps/level2/summer/blocks/level2_summer_blue_block.png"
import level2_summer_gray_block from "../../public/images/maps/level2/summer/blocks/level2_summer_gray_block.png"
import level2_summer_green_block from "../../public/images/maps/level2/summer/blocks/level2_summer_green_block.png"
import level2_summer_greentop_block from "../../public/images/maps/level2/summer/blocks/level2_summer_greentop_block.png"
import level2_summer_orange_block from "../../public/images/maps/level2/summer/blocks/level2_summer_orange_block.png"
import level2_summer_yellow_block from "../../public/images/maps/level2/summer/blocks/level2_summer_yellow_block.png"


import {Link} from "react-scroll";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ImageWithSpinner from "@/components/ImageWithSpinner";
const handleDynamicChanges = () => {
    // Code for dynamically adding or modifying elements

    // After making changes, refresh AOS to apply animations
    AOS.refresh();
  };

export default class MapCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSlide: 0,
            previousSlide: null,
        };
    }

    nextSlide = () => {
      let slidesIndex = [0, 4, 10]
      const currentIndexInArray = slidesIndex.indexOf(this.state.currentSlide);
      let newSlide =
        this.state.currentSlide === slidesIndex[2]
          ? 0
          : slidesIndex[currentIndexInArray + 1];
      this.setState({ currentSlide: newSlide });
    };

    prevSlide = () => {
      let slidesIndex = [0, 4, 10]
      const currentIndexInArray = slidesIndex.indexOf(this.state.currentSlide);
      let newSlide =
        this.state.currentSlide === 0
          ? 10
          : slidesIndex[currentIndexInArray - 1];
      this.setState({ currentSlide: newSlide });
    };

    setCurrentSlide = (index) => {
        this.setState((prevState) => ({
            currentSlide: index,
            previousSlide: prevState.currentSlide
        }));
    };

    render() {
        const slideImages = [
            general_level1, // Image for slide 0
            level1_fifthrow, // Image for slide 1
            level1_urop, // Image for slide 2
            level1_overseas, // Image for slide 3
            level2_spring,  // Image for slide 4
            level2_spring_blue, // Image for slide 5
            level2_spring_gray, // Image for slide 6
            level2_spring_green, // Image for slide 7
            level2_spring_orange, // Image for slide 8
            level2_spring_yellow, // Image for slide 9
            level2_summer, // Image for slide 10
            level2_summer_blue, // Image for slide 11
            level2_summer_gray, // Image for slide 12
            level2_summer_green, // Image for slide 13
            level2_summer_greentop, // Image for slide 14
            level2_summer_orange, // Image for slide 15
            level2_summer_yellow // Image for slide 16
        ]
        return (
            <>
            <div className='bg-[#596461] rounded-2xl w-11/12 relative pb-8 z-20 mx-auto'>
                <div className='flex md:flex-row flex-col py-8 md:mx-8 mx-1 md:gap-8 gap-4'>
                    {/*   Level 1*/}
                    {(this.state.currentSlide === 0) ? (
                        <div className='border-4 border-gray-600 md:w-9/12 w-full relative' data-aos={'flip-up'}
                             data-aos-duration='800'>
                            <ImageWithSpinner src={slideImages[0]}/>
                            <div className='absolute top-[18%] left-[35%] w-4/12 hover:scale-[1.10]'>
                                <Link onClick={() => {this.setCurrentSlide(3)
                          }} smooth={true} style={{cursor: 'pointer'}}>
                                    <Image src={level1_overseas_block}/>
                                </Link>
                            </div>
                            <div className='absolute top-[14%] left-[29%] w-2/12 hover:scale-[1.10]'>
                                <Link onClick={() => {this.setCurrentSlide(1)
                          }} smooth={true} style={{cursor: 'pointer'}}>
                                    <Image src={level1_fifthrow_block}/>
                                </Link>
                            </div>
                            <div className='absolute top-[29%] left-[22%] w-[13%] hover:scale-[1.10]'>
                                <Link onClick={() => {this.setCurrentSlide(2)
                          }} smooth={true} style={{cursor: 'pointer'}}>
                                    <Image src={level1_urop_block}/>
                                </Link>
                            </div>
                        </div>
                    ):null}
                    {(this.state.currentSlide === 1) ? (
                        <div className='border-4 border-gray-600 md:w-9/12 w-full relative' data-aos={'fade-up'} data-aos-duration='500'>
                            <ImageWithSpinner src={slideImages[1]} alt='slide 1'/>
                            <ExitToAppIcon className='absolute rotate-180 text-white top-[1%] right-[1%] hover:scale-[1.10]'
                                           smooth={true} onClick={() => {this.setCurrentSlide(0)}}
                                           style={{cursor: 'pointer', fontSize: 50}}/>
                        </div>
                    ):null}
                    {(this.state.currentSlide === 2) ? (
                        <div className='border-4 border-gray-600 md:w-9/12 w-full relative' data-aos={'fade-up'} data-aos-duration='500'>
                            <ImageWithSpinner src={slideImages[2]} alt='slide 2'/>
                            <ExitToAppIcon className='absolute rotate-180 text-white top-[1%] right-[1%] hover:scale-[1.10]'
                                           smooth={true} onClick={() => {this.setCurrentSlide(0)}}
                                           style={{cursor: 'pointer', fontSize: 50}}/>
                        </div>
                    ):null}
                    {(this.state.currentSlide === 3) ? (
                        <div className='border-4 border-gray-600 md:w-9/12 w-full relative' data-aos={'fade-up'} data-aos-duration='500'>
                            <ImageWithSpinner src={slideImages[3]}/>
                            <ExitToAppIcon className='absolute rotate-180 text-white top-[1%] right-[1%] hover:scale-[1.10]'
                                           smooth={true} onClick={() => {this.setCurrentSlide(0)}}
                                           style={{cursor: 'pointer', fontSize: 50}}/>
                        </div>
                    ):null}
                    {/*Level 2 Spring*/}
                    {(this.state.currentSlide === 4) ? (
                        <div className='border-4 border-gray-600 md:w-9/12 w-full relative' data-aos={'flip-up'}
                             data-aos-duration='800'>
                            <ImageWithSpinner src={slideImages[4]}/>
                            <div className='absolute bottom-[5%] left-[24%] w-4/12 hover:scale-[1.10]'>
                                <Link onClick={() => {this.setCurrentSlide(9)
                                }} smooth={true} style={{cursor: 'pointer'}}>
                                    <Image src={level2_spring_yellow_block}/>
                                </Link>
                            </div>
                            <div className='absolute top-[10%] left-[28%] w-5/12 hover:scale-[1.10]'>
                                <Link onClick={() => {this.setCurrentSlide(8)
                                }} smooth={true} style={{cursor: 'pointer'}}>
                                    <Image src={level2_spring_orange_block}/>
                                </Link>
                            </div>
                            <div className='absolute bottom-[15%] left-[28%] w-[44%] hover:scale-[1.10]'>
                                <Link onClick={() => {this.setCurrentSlide(7)
                                }} smooth={true} style={{cursor: 'pointer'}}>
                                    <Image src={level2_spring_green_block}/>
                                </Link>
                            </div>
                            <div className='absolute top-[34%] right-[12%] w-[38%] hover:scale-[1.10]'>
                                <Link onClick={() => {this.setCurrentSlide(6)
                                }} smooth={true} style={{cursor: 'pointer'}}>
                                    <Image src={level2_spring_gray_block}/>
                                </Link>
                            </div>
                            <div className='absolute top-[34%] left-[16%] w-[38%] hover:scale-[1.10]'>
                                <Link onClick={() => {this.setCurrentSlide(5)
                                }} smooth={true} style={{cursor: 'pointer'}}>
                                    <Image src={level2_spring_blue_block}/>
                                </Link>
                            </div>
                        </div>
                    ):null}
                    {(this.state.currentSlide === 5) ? (
                        <div className='border-4 border-gray-600 md:w-9/12 w-full relative' data-aos={'fade-up'} data-aos-duration='500'>
                            <ImageWithSpinner src={slideImages[5]} alt='slide 5'/>
                            <ExitToAppIcon className='absolute rotate-180 text-white top-[1%] right-[1%] hover:scale-[1.10]'
                                           smooth={true} onClick={() => {this.setCurrentSlide(4)}}
                                           style={{cursor: 'pointer', fontSize: 50}}/>
                        </div>
                    ):null}
                    {(this.state.currentSlide === 6) ? (
                        <div className='border-4 border-gray-600 md:w-9/12 w-full relative' data-aos={'fade-up'} data-aos-duration='500'>
                            <ImageWithSpinner src={slideImages[6]}/>
                            <ExitToAppIcon className='absolute rotate-180 text-white top-[1%] right-[1%] hover:scale-[1.10]'
                                           smooth={true} onClick={() => {this.setCurrentSlide(4)}}
                                           style={{cursor: 'pointer', fontSize: 50}}/>
                        </div>
                    ):null}
                    {(this.state.currentSlide === 7) ? (
                        <div className='border-4 border-gray-600 md:w-9/12 w-full relative' data-aos={'fade-up'} data-aos-duration='500'>
                            <ImageWithSpinner src={slideImages[7]}/>
                            <ExitToAppIcon className='absolute rotate-180 text-white top-[1%] right-[1%] hover:scale-[1.10]'
                                           smooth={true} onClick={() => {this.setCurrentSlide(4)}}
                                           style={{cursor: 'pointer', fontSize: 50}}/>
                        </div>
                    ):null}
                    {(this.state.currentSlide === 8) ? (
                        <div className='border-4 border-gray-600 md:w-9/12 w-full relative' data-aos={'fade-up'} data-aos-duration='500'>
                            <ImageWithSpinner src={slideImages[8]}/>
                            <ExitToAppIcon className='absolute rotate-180 text-white top-[1%] right-[1%] hover:scale-[1.10]'
                                           smooth={true} onClick={() => {this.setCurrentSlide(4)}}
                                           style={{cursor: 'pointer', fontSize: 50}}/>
                        </div>
                    ):null}
                    {(this.state.currentSlide === 9) ? (
                        <div className='border-4 border-gray-600 md:w-9/12 w-full relative' data-aos={'fade-up'} data-aos-duration='500'>
                            <ImageWithSpinner src={slideImages[9]}/>
                            <ExitToAppIcon className='absolute rotate-180 text-white top-[1%] right-[1%] hover:scale-[1.10]'
                                           smooth={true} onClick={() => {this.setCurrentSlide(4)}}
                                           style={{cursor: 'pointer', fontSize: 50}}/>
                        </div>
                    ):null}
                    {/*Level 2 Summer*/}
                    {(this.state.currentSlide === 10) ? (
                        <div className='border-4 border-gray-600 md:w-9/12 w-full relative'
                             data-aos={'flip-up'} data-aos-duration='800'>
                            <ImageWithSpinner src={slideImages[10]}/>
                            <div className='absolute top-[33%] right-[18%] w-[40%] hover:scale-[1.10]'>
                                <Link onClick={() => {this.setCurrentSlide(11)
                                }} smooth={true} style={{cursor: 'pointer'}}>
                                    <Image src={level2_summer_blue_block}/>
                                </Link>
                            </div>
                            <div className='absolute top-[10%] right-[30%] w-[25%] hover:scale-[1.10]'>
                                <Link onClick={() => {this.setCurrentSlide(12)
                                }} smooth={true} style={{cursor: 'pointer'}}>
                                    <Image src={level2_summer_gray_block}/>
                                </Link>
                            </div>
                            <div className='absolute bottom-[15%] right-[29%] w-[44%] hover:scale-[1.10]'>
                                <Link onClick={() => {this.setCurrentSlide(13)
                                }} smooth={true} style={{cursor: 'pointer'}}>
                                    <Image src={level2_summer_green_block}/>
                                </Link>
                            </div>
                            <div className='absolute top-[30%] left-[20%] w-[23%] hover:scale-[1.10]'>
                                <Link onClick={() => {this.setCurrentSlide(14)
                                }} smooth={true} style={{cursor: 'pointer'}}>
                                    <Image src={level2_summer_greentop_block}/>
                                </Link>
                            </div>
                            <div className='absolute top-[12%] left-[22%] w-[22%] hover:scale-[1.10]'>
                                <Link onClick={() => {this.setCurrentSlide(15)
                                }} smooth={true} style={{cursor: 'pointer'}}>
                                    <Image src={level2_summer_orange_block}/>
                                </Link>
                            </div>
                             <div className='absolute bottom-[5%] left-[24%] w-[32%] hover:scale-[1.10]'>
                                <Link onClick={() => {this.setCurrentSlide(16)
                                }} smooth={true} style={{cursor: 'pointer'}}>
                                    <Image src={level2_summer_yellow_block}/>
                                </Link>
                            </div>
                        </div>
                    ):null}
                    {(this.state.currentSlide === 11) ? (
                        <div className='border-4 border-gray-600 md:w-9/12 w-full relative' data-aos={'fade-up'} data-aos-duration='500'>
                            <ImageWithSpinner src={slideImages[11]}/>
                            <ExitToAppIcon className='absolute rotate-180 text-white top-[1%] right-[1%] hover:scale-[1.10]'
                                           smooth={true} onClick={() => {this.setCurrentSlide(10)}}
                                           style={{cursor: 'pointer', fontSize: 50}}/>
                        </div>
                    ):null}
                    {(this.state.currentSlide === 12) ? (
                        <div className='border-4 border-gray-600 md:w-9/12 w-full relative' data-aos={'fade-up'} data-aos-duration='500'>
                            <ImageWithSpinner src={slideImages[12]}/>
                            <ExitToAppIcon className='absolute rotate-180 text-white top-[1%] right-[1%] hover:scale-[1.10]'
                                           smooth={true} onClick={() => {this.setCurrentSlide(10)}}
                                           style={{cursor: 'pointer', fontSize: 50}}/>
                        </div>
                    ):null}
                    {(this.state.currentSlide === 13) ? (
                        <div className='border-4 border-gray-600 md:w-9/12 w-full relative' data-aos={'fade-up'} data-aos-duration='500'>
                            <ImageWithSpinner src={slideImages[13]}/>
                            <ExitToAppIcon className='absolute rotate-180 text-white top-[1%] right-[1%] hover:scale-[1.10]'
                                           smooth={true} onClick={() => {this.setCurrentSlide(10)}}
                                           style={{cursor: 'pointer', fontSize: 50}}/>
                        </div>
                    ):null}
                    {(this.state.currentSlide === 14) ? (
                        <div className='border-4 border-gray-600 md:w-9/12 w-full relative' data-aos={'fade-up'} data-aos-duration='500'>
                            <ImageWithSpinner src={slideImages[14]}/>
                            <ExitToAppIcon className='absolute rotate-180 text-white top-[1%] right-[1%] hover:scale-[1.10]'
                                           smooth={true} onClick={() => {this.setCurrentSlide(10)}}
                                           style={{cursor: 'pointer', fontSize: 50}}/>
                        </div>
                    ):null}
                    {(this.state.currentSlide === 15) ? (
                        <div className='border-4 border-gray-600 md:w-9/12 w-full relative' data-aos={'fade-up'} data-aos-duration='500'>
                            <ImageWithSpinner src={slideImages[15]}/>
                            <ExitToAppIcon className='absolute rotate-180 text-white top-[1%] right-[1%] hover:scale-[1.10]'
                                           smooth={true} onClick={() => {this.setCurrentSlide(10)}}
                                           style={{cursor: 'pointer', fontSize: 50}}/>
                        </div>
                    ):null}
                    {(this.state.currentSlide === 16) ? (
                        <div className='border-4 border-gray-600 md:w-9/12 w-full relative' data-aos={'zoom-out-up'} data-aos-duration='500'>
                            <ImageWithSpinner src={slideImages[16]}/>
                            <ExitToAppIcon className='absolute rotate-180 text-white top-[1%] right-[1%] hover:scale-[1.1]'
                                           smooth={true} onClick={() => {this.setCurrentSlide(10)}}
                                           style={{cursor: 'pointer', fontSize: 50}}/>
                        </div>
                    ):null}
                    <div className='hidden md:flex flex-col justify-evenly'>
                        {[
                    ['Level 1', [0, 1, 2, 3]],
                    ['Level 2 - Spring', [4, 5, 6, 7, 8, 9]],
                    ['Level 2 - Summer', [10, 11, 12, 13, 14, 15, 16]]
                  ].map(([title, index]) => (
                      // eslint-disable-next-line react/jsx-key
                    <Link className={`border-8 border-[#757575] rounded-full hover:bg-[#680000] hover:text-white 
                    drop-shadow-md py-3 px-12 text-center font-gotham text-[1.1vw]
                    ${index.includes(this.state.currentSlide) ? 'bg-[#680000] text-white' : 'bg-[#E63B3B]'}`}
                          onClick={() => {this.setCurrentSlide(index[0]);
                          }} smooth={true} style={{cursor: 'pointer'}} data-aos='fade-left' data-aos-duration='500'>{title}</Link>
                  ))}

                    </div>
                    <nav className="md:hidden flex flex-row justify-evenly mt-6 font-gotham text-black text-[4vw]"
                         data-aos='fade-right' data-aos-delay='300' data-aos-duration='500'>
                         <ArrowBackIosIcon className='text-white self-center' onClick={() => {
                                this.prevSlide();
                              }} smooth={true} style={{cursor: 'pointer', fontSize: 40}}/>
                         {[
                         ['Level 1', [0, 1, 2, 3]],
                         ['Level 2 - Spring', [4, 5, 6, 7, 8, 9]],
                         ['Level 2 - Summer', [10, 11, 12, 13, 14, 15, 16]]
                         ].map(([title, index]) => (
                          // eslint-disable-next-line react/jsx-key
                         <Link className={`border-8 border-[#757575] rounded-full w-6/12 text-center bg-[#E63B3B] hover:text-white drop-shadow-md py-3 
                         ${index.includes(this.state.currentSlide) ? '' : 'hidden'}`}
                              onClick={() => {
                                this.setCurrentSlide(index[0]);
                              }} smooth={true} style={{cursor: 'pointer'}} data-aos='fade-left' data-aos-duration='500'>{title}</Link>
                         ))}
                         <ArrowForwardIosIcon className='text-white self-center' onClick={() => {
                                this.nextSlide();
                              }} smooth={true} style={{cursor: 'pointer', fontSize: 40}}/>
                    </nav>
                </div>
                <h1 className='font-ron text-center mx-auto text-white md:text-[2.5vw] text-[3.5vw] md:w-2/3 7/12'>Click on the coloured blocks to get a more detailed view of the layout!</h1>
            </div>

            </>
        )}}