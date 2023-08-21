import React from 'react';
import {useCountdown} from "@/hooks/useCountdown";
import Image from 'next/image'

export const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return (
        <tr className='md:text-[4.5vw]'>
            <td className='md:px-4'>00</td>
            <td className='md:px-4'>00</td>
            <td className='md:px-4'>00</td>
            <td className='md:px-4'>00</td>
        </tr>
    )
  } else {
     let days_string = String(days);
     if (days_string < 10){
         days_string = '0' + days_string
     }
     let hours_string = String(hours)
      if (hours_string < 10){
         hours_string = '0' + hours_string
     }
      let minutes_string = String(minutes)
      if (minutes_string < 10){
         minutes_string = '0' + minutes_string
     }
      let seconds_string = String(seconds)
      if (seconds_string < 10){
         seconds_string = '0' + seconds_string
     }
    return (
        <>
        <table className='pt-20 inline-block text-[#FFEEFB]'>
            <tr className='text-[9vw] md:text-[5vw] md:space-x-20 space-x-10 font-ron leading-9'>
                <td className='inline-block'>
                    {days_string[0]}{days_string[1]}: <br></br><h1 className='font-gotham text-[1.2vw]'>Days</h1>
                </td>
                <td className='inline-block'>
                    {hours_string[0]}{hours_string[1]}: <br></br><h1 className='font-gotham text-[1.2vw]'>Hours</h1>
                </td>
                <td className='inline-block'>
                    {minutes_string[0]}{minutes_string[1]}: <br></br><h1 className='font-gotham text-[1.2vw]'>Minutes</h1>
                </td>
                <td className='inline-block'>
                    {seconds_string[0]}{seconds_string[1]} <br></br><h1 className='font-gotham text-[1.2vw]'>Seconds</h1>
                </td>
            </tr>
        </table>
        </>
    );
  }
};