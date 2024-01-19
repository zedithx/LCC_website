import {Component} from "react";
import Image from "next/image";
import general_level1 from "../../public/images/maps/general_level1.png";

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
        return (
            <>
            <div className='bg-[#596461] rounded-2xl w-11/12 relative z-20 mx-auto'>
                <div className='flex flex-row py-8 mx-8'>
                {/*Wrap in blue*/}
                    <div className='border-4 border-gray-600 w-9/12 relative'>
                        <Image src={general_level1}/>
                    </div>
                    <div className='flex flex-col'>

                    </div>
                </div>
            </div>

            </>
        )}}