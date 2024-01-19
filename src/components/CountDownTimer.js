import React from 'react';
import {useCountdown} from "@/hooks/useCountdown";

export const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  let [days_string, hours_string, minutes_string, seconds_string] = [String(days), String(hours), String(minutes), String(seconds)];
  if (days + hours + minutes + seconds <= 0) {
      days_string = '00'
      hours_string = '00'
      minutes_string = '00'
      seconds_string = '00'
  } else {
     if (days_string < 10){
         days_string = '0' + days_string
     }
      if (hours_string < 10){
         hours_string = '0' + hours_string
     }
      if (minutes_string < 10){
         minutes_string = '0' + minutes_string
     }
      if (seconds_string < 10){
         seconds_string = '0' + seconds_string
     }
    return (
        <>
        <table className='md:pt-20 pt-10 inline-block text-[#FFEEFB]'>
            <tbody>
            <tr className='text-[6vw] md:text-[5vw] md:space-x-20 space-x-8 font-ron leading-9'>
                <td className='inline-block' data-aos='zoom-in' data-aos-delay='1300' data-aos-offset="50px">
                    {days_string[0]}{days_string[1]}: <h1 className='font-gotham text-[2.5vw] md:text-[1.2vw]'>Days</h1>
                </td>
                <td className='inline-block' data-aos='zoom-in' data-aos-delay='1500' data-aos-offset="50px">
                    {hours_string[0]}{hours_string[1]}: <h1 className='font-gotham text-[2.5vw] md:text-[1.2vw]'>Hours</h1>
                </td>
                <td className='inline-block' data-aos='zoom-in' data-aos-delay='1700' data-aos-offset="50px">
                    {minutes_string[0]}{minutes_string[1]}: <h1 className='font-gotham text-[2.5vw] md:text-[1.2vw]'>Minutes</h1>
                </td>
                <td className='inline-block' data-aos='zoom-in' data-aos-delay='1900' data-aos-offset="50px">
                    {seconds_string[0]}{seconds_string[1]} <h1 className='font-gotham text-[2.5vw] md:text-[1.2vw]'>Seconds</h1>
                </td>
            </tr>
            </tbody>
        </table>
        </>
    );
  }
};