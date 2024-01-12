import React from 'react';
import {useCountdown} from "@/hooks/useCountdown";
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';


export const LuckyDrawTimer = ({ targetTime }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetTime);
  let [hours_string, minutes_string, seconds_string] = [String(hours), String(minutes), String(seconds)];
  if (days + hours + minutes + seconds <= 0 || days > 0){
    hours_string = '00'
    minutes_string = '00'
    seconds_string = '00'
  } else {
      if (hours_string < 10) {
          hours_string = '0' + hours_string
      }
      if (minutes_string < 10) {
          minutes_string = '0' + minutes_string
      }
      if (seconds_string < 10) {
          seconds_string = '0' + seconds_string
      }
  }
    return (
        <>
       <div className='bg-[#596461] rounded-2xl text-center w-1/2 z-20 md:w-2/5 w-1/2 relative' data-aos='zoom-in' data-aos-delay='900' data-aos-duration='1200' data-aos-offset="50px">
            <table className='inline-block md:rounded-2xl rounded-xl bg-[#420059] w-11/12 md:my-2 my-1 md:border-4 border-2 border-gray-600 content-center'>
                <div className='inline-block my-2'>
                    <thead className='text-[#B57BFF] text-[2vw] md:text-[1.5vw] font-ron'>Lucky Draw</thead>
                    <tbody>
                        <tr className='text-[#B57BFF] text-[2.25vw] md:text-[1.75vw] md:space-x-20 space-x-10 font-ron' data-aos='flip-up' data-aos-delay='1200' data-aos-duration='800'>
                            <td className='inline-block'>
                                {hours_string[0]}{hours_string[1]} Hrs : {minutes_string[0]}{minutes_string[1]} Mins : {seconds_string[0]}{seconds_string[1]} Sec
                            </td>
                        </tr>
                    </tbody>
                </div>
            </table>
       </div>
        </>
    );
};