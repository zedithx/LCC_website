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
       <div className='bg-[#596461] rounded-2xl text-center w-1/2 z-20 w-2/5'>
            <table className='inline-block rounded-2xl bg-[#420059] w-11/12 my-2 border-4 border-gray-600 content-center'>
                <div className='inline-block my-2'>
                    <thead className='text-[#B57BFF] text-[0.75vw] md:text-[1.5vw] font-ron'>Lucky Draw</thead>
                    <tbody>
                        <tr className='text-[#B57BFF] text-[1vw] md:text-[1.75vw] md:space-x-20 space-x-10 font-ron'>
                            <td className='inline-block' data-aos='zoom-in' data-aos-delay='500' data-aos-offset="50px">
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