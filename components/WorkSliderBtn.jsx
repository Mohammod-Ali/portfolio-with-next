'use client'
import { useSwiper } from "swiper/react";
import {PiCaretLeftBold , PiCaretRightBold } from 'react-icons/pi'


const WorkSliderBtn = ({containerStyles, btnStyles, iconsStyles}) => {
    const swiper = useSwiper()
    return (
        <div className={containerStyles}>
            <button className={btnStyles} onClick={() => swiper.slidePrev()}>
                <PiCaretLeftBold className={iconsStyles}></PiCaretLeftBold>
            </button>
            <button className={btnStyles} onClick={() => swiper.slideNext()}>
                <PiCaretRightBold className={iconsStyles}></PiCaretRightBold>
            </button>
        </div>
    );
};

export default WorkSliderBtn;