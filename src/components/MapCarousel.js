import {Component} from "react";
import Image from "next/image";
import AOS from "aos";
import general_level1 from "../../public/images/maps/level1/level1_general.png"
import level1_fifthrow from "../../public/images/maps/level1/level1_fifthrow.png"
import level1_urop from "../../public/images/maps/level1/level1_urop.png"
import level1_overseas from "../../public/images/maps/level1/level1_overseas.png"
import level2_spring from "../../public/images/maps/level2/spring/level2_spring.png"
import level2_spring_blue from "../../public/images/maps/level2/spring/level2_spring_blue.png"
import level2_spring_gray from "../../public/images/maps/level2/spring/level2_spring_gray.png"
import level2_spring_green from "../../public/images/maps/level2/spring/level2_spring_green.png"
import level2_spring_orange from "../../public/images/maps/level2/spring/level2_spring_orange.png"
import level2_spring_yellow from "../../public/images/maps/level2/spring/level2_spring_yellow.png"
import level2_summer from "../../public/images/maps/level2/summer/lvl2_summer.png"
import level2_summer_blue from "../../public/images/maps/level2/summer/lvl2_summer_blue.png"
import level2_summer_gray from "../../public/images/maps/level2/summer/lvl2_summer_gray.png"
import level2_summer_green from "../../public/images/maps/level2/summer/lvl2_summer_green.png"
import level2_summer_greentop from "../../public/images/maps/level2/summer/lvl2_summer_greentop.png"
import level2_summer_orange from "../../public/images/maps/level2/summer/lvl2_summer_orange.png"
import level2_summer_yellow from "../../public/images/maps/level2/summer/lvl2_summer_yellow.png"


import {Link} from "react-scroll";
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
                <div className='flex flex-row py-8 mx-8 gap-8'>
                    {/*   Level 1*/}
                    {(this.state.currentSlide === 0) ? (
                        <div className='border-4 border-gray-600 w-9/12 relative' data-aos={'zoom-out-up'}>
                            <Image src={slideImages[0]}/>
                        </div>
                    ):null}
                    {(this.state.currentSlide === 1) ? (
                        <div className='border-4 border-gray-600 w-9/12 relative' data-aos={'zoom-out-up'}>
                            <Image src={slideImages[1]}/>
                        </div>
                    ):null}
                    {(this.state.currentSlide === 2) ? (
                        <div className='border-4 border-gray-600 w-9/12 relative' data-aos={'zoom-out-up'}>
                            <Image src={slideImages[2]}/>
                        </div>
                    ):null}
                    {(this.state.currentSlide === 3) ? (
                        <div className='border-4 border-gray-600 w-9/12 relative' data-aos={'zoom-out-up'}>
                            <Image src={slideImages[3]}/>
                        </div>
                    ):null}
                    {/*Level 1 Spring*/}
                    {(this.state.currentSlide === 4) ? (
                        <div className='border-4 border-gray-600 w-9/12 relative' data-aos={'zoom-out-up'}>
                            <Image src={slideImages[4]}/>
                        </div>
                    ):null}
                    {(this.state.currentSlide === 5) ? (
                        <div className='border-4 border-gray-600 w-9/12 relative' data-aos={'zoom-out-up'}>
                            <Image src={slideImages[5]}/>
                        </div>
                    ):null}
                    {(this.state.currentSlide === 6) ? (
                        <div className='border-4 border-gray-600 w-9/12 relative' data-aos={'zoom-out-up'}>
                            <Image src={slideImages[6]}/>
                        </div>
                    ):null}
                    {(this.state.currentSlide === 7) ? (
                        <div className='border-4 border-gray-600 w-9/12 relative' data-aos={'zoom-out-up'}>
                            <Image src={slideImages[7]}/>
                        </div>
                    ):null}
                    {(this.state.currentSlide === 8) ? (
                        <div className='border-4 border-gray-600 w-9/12 relative' data-aos={'zoom-out-up'}>
                            <Image src={slideImages[8]}/>
                        </div>
                    ):null}
                    {(this.state.currentSlide === 9) ? (
                        <div className='border-4 border-gray-600 w-9/12 relative' data-aos={'zoom-out-up'}>
                            <Image src={slideImages[9]}/>
                        </div>
                    ):null}
                    {/*Level 2 Summer*/}
                    {(this.state.currentSlide === 10) ? (
                        <div className='border-4 border-gray-600 w-9/12 relative' data-aos={'zoom-out-up'}>
                            <Image src={slideImages[10]}/>
                        </div>
                    ):null}
                    {(this.state.currentSlide === 11) ? (
                        <div className='border-4 border-gray-600 w-9/12 relative' data-aos={'zoom-out-up'}>
                            <Image src={slideImages[11]}/>
                        </div>
                    ):null}
                    {(this.state.currentSlide === 12) ? (
                        <div className='border-4 border-gray-600 w-9/12 relative' data-aos={'zoom-out-up'}>
                            <Image src={slideImages[12]}/>
                        </div>
                    ):null}
                    {(this.state.currentSlide === 13) ? (
                        <div className='border-4 border-gray-600 w-9/12 relative' data-aos={'zoom-out-up'}>
                            <Image src={slideImages[13]}/>
                        </div>
                    ):null}
                    {(this.state.currentSlide === 14) ? (
                        <div className='border-4 border-gray-600 w-9/12 relative' data-aos={'zoom-out-up'}>
                            <Image src={slideImages[14]}/>
                        </div>
                    ):null}
                    {(this.state.currentSlide === 15) ? (
                        <div className='border-4 border-gray-600 w-9/12 relative' data-aos={'zoom-out-up'}>
                            <Image src={slideImages[15]}/>
                        </div>
                    ):null}
                    {(this.state.currentSlide === 16) ? (
                        <div className='border-4 border-gray-600 w-9/12 relative' data-aos={'zoom-out-up'}>
                            <Image src={slideImages[16]}/>
                        </div>
                    ):null}
                    <div className='flex flex-col justify-evenly'>
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
                          }} smooth={true} style={{cursor: 'pointer'}}>{title}</Link>
                  ))}

                    </div>
                </div>
                <h1 className='font-ron text-center mx-auto text-white text-[2.5vw] w-2/3'>Click on the coloured blocks to get a more detailed view!</h1>
            </div>

            </>
        )}}