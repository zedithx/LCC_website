import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import Image from "next/image";
import styles from "../pages/lcc.module.css";
import { styled } from '@mui/material/styles';
import React, {useEffect, useState} from "react";
import food from "../../public/images/posters/pubs/food.jpg"
import ImageWithSpinner from "@/components/ImageWithSpinner";


const ModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  border: 4px solid #4B5563;
  border-radius: 25px;
  box-shadow: 24px;
  overflow: hidden
`;

const ModalBoxMobile = styled(Box)`
  @media (max-width: 600px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    border: 4px solid #4B5563;
    border-radius: 25px;
    box-shadow: 24px;
    overflow: hidden
  }
`;

export default function FoodModal(props) {
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
     FoodModal.defaultProps = {
      photo: false
    }
    return (
        <>
        <div className='flex items-center hover:cursor-pointer border-8 border-[#757575] hover:bg-[#5FFF6F]
            drop-shadow-md bg-[#E63B3B] py-3 px-8' onClick={handleOpen}>
            <a className='mt-1'>Food</a>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
              {isMobile ? (
          <div className={`opacity-0 ${show ? styles.fadeModalMobile : ""}`}>
              <ModalBoxMobile>
                  <ImageWithSpinner src={food} layout='responsive'/>
              </ModalBoxMobile>
          </div>
          ) : (
          <div className={`opacity-0 ${show ? styles.fadeModal: ""}`}>
            <ModalBox>
                <Image src={food} layout='responsive'/>
            </ModalBox>
          </div>
                  )}
        </Modal>
     </>
    )
}
