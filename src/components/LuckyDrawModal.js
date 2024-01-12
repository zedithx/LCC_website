import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import styles from "../pages/lcc.module.css"
import { styled } from '@mui/material/styles';
import React, {useEffect, useState} from "react";
import Image from "next/image";
import bloom6 from "../../public/images/background/bloom6.png"


const ModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  background-color: #191970;
  border: 4px solid #4B5563;
  border-radius: 25px;
  box-shadow: 24px;
  padding: 30px;
`;

const ModalBoxMobile = styled(ModalBox)`
  @media (max-width: 600px) {
    width: 90%;
    padding: 20px;
  }
`;

export default function LuckyDrawModal(props) {
    const [open, setOpen] = useState(false)
    const [show, setShow] = useState(false)
    const [isMobile, setIsMobile] = useState(false);

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 600px)');
    setIsMobile(mediaQuery.matches);

    const handleChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addListener(handleChange);

    return () => {
      mediaQuery.removeListener(handleChange);
    };
  }, []);

    useEffect(() => {
    setShow(true);
  }, []);
     LuckyDrawModal.defaultProps = {
      photo: false
    }
    return (
        <>
        <a className='hover:cursor-pointer border-8 border-[#757575] hover:bg-[#5FFF6F]
        drop-shadow-md bg-[#E63B3B] py-1 px-8 absolute top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2' onClick={handleOpen}>Lucky Draw</a>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
              {isMobile ? (
          <div className={`opacity-0 ${show ? styles.fadeModalMobile : ""}`}>
            <ModalBoxMobile>
                <div className='mx-auto text-[#0BFFE6] font-gotham-light relative'>
                    <h1 className='text-[.5vw] absolute top-1 left-3'>
                       Log: #30196
                    </h1>
                    <h1 className='text-[.5vw] absolute top-1 right-3'>
                       Date 27092023
                    </h1>
                    <h1 className='text-[2vw] text-center font-ron pt-6'>
                  Lucky Draw
                  </h1>
                   <hr className='w-11/12 mx-auto border-[#5FFF6F]'/>
                   <div className='pl-8 w-10/12 pt-4 text-[1.2vw] text-left'>
                    <h1 className='font-bold'>How to participate?</h1>
                      <h1 className='text-white'>
                          1. Go to any booth and scan the QR code in the booth.
                          <br></br>
                          2. Input in the Booth Number to indicate best booth! Voila, you're now in the contest!!
                      </h1>
                      <br></br>
                      <h1 className='font-bold'>When will it be announced?</h1>
                      <h1 className='text-white'>
                          Winners will be announced approx at 6pm. We have a countdown shown at the top of the website as well!
                      </h1>
                    </div>
                </div>
            </ModalBoxMobile>
          </div>
          ) : (
          <div className={`opacity-0 ${show ? styles.fadeModal: ""}`}>
            <ModalBox>
                <div className='mx-auto text-[#0BFFE6] font-gotham-light relative'>
                   <h1 className='text-[.5vw] absolute top-1 left-3'>
                       Log: #30196
                   </h1>
                  <h1 className='text-[.5vw] absolute top-1 right-3'>
                       Date 27092023
                   </h1>
                  <h1 className='text-[2vw] text-center font-ron pt-6'>
                  Lucky Draw
                  </h1>
                   <hr className='w-11/12 mx-auto border-[#5FFF6F]'/>
                   <div className='pl-8 w-10/12 pt-4 text-[1.2vw] text-left'>
                    <h1 className='font-bold'>How to participate?</h1>
                      <h1 className='text-white'>
                          1. Go to any booth and scan the QR code in the booth.
                          <br></br>
                          2. Input in the Booth Number to indicate best booth! Voila, you're now in the contest!!
                      </h1>
                      <br></br>
                      <h1 className='font-bold'>When will it be announced?</h1>
                      <h1 className='text-white'>
                          Winners will be announced approx at 6pm. We have a countdown shown at the top of the website as well!
                      </h1>
                   </div>
                </div>
            </ModalBox>
          </div>
                  )}
        </Modal>
     </>
    )
}
