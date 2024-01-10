import {Link} from "react-scroll";
import {Component} from "react";


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
                <nav className="w-full md:space-x-10 pt-4 pl-8 font-gotham text-black text-[1vw]">
                  {[
                    ['UROP', [0]],
                    ['overseas', [1,2,3,4]],
                    ['Fifth Row', [5, 6]]
                  ].map(([title, index]) => (
                      // eslint-disable-next-line react/jsx-key
                    <Link className={`border-8 border-[#757575] rounded-full hover:bg-[#680000] hover:text-white drop-shadow-md bg-[#E63B3B] py-3 px-12 
                    ${index.includes(this.state.currentSlide) ? 'text-white bg-[#680000]' : 'bg-[#E63B3B]'}`}
                          onClick={() => {
                            this.setCurrentSlide(index[0]);
                          }} smooth={true} style={{cursor: 'pointer'}}>{title}</Link>
                  ))}
                </nav>
                {/*<div className='font-gotham text-black text-[1vw] inline-block pt-4 pl-8'>*/}

                {/*    <div className='relative'>*/}
                {/*        <Link*/}
                {/*              className='border-8 border-[#757575] rounded-full hover:bg-[#680000] hover:text-white drop-shadow-md bg-[#E63B3B] py-3 px-12'>*/}
                {/*            UROP*/}
                {/*        </Link>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className='font-gotham text-black text-[1vw] inline-block pl-12'>*/}
                {/*    <div className='relative'>*/}
                {/*        <Link href='/luckydraw'*/}
                {/*              className='border-8 border-[#757575] rounded-full hover:bg-[#680000] hover:text-white drop-shadow-md bg-[#E63B3B] py-3 px-12'>*/}
                {/*            overseas*/}
                {/*        </Link>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className='font-gotham text-black text-[1vw] inline-block pl-12'>*/}
                {/*    <div className='relative'>*/}
                {/*        <Link href='/luckydraw'*/}
                {/*              className='border-8 border-[#757575] rounded-full hover:bg-[#680000] hover:text-white drop-shadow-md bg-[#E63B3B] py-3 px-12'>*/}
                {/*            Fifth Row*/}
                {/*        </Link>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </>
        )
    }
}