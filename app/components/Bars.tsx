"use client";

import React, { useState } from 'react'
import SingleBar from './SingleBar';

interface BarProps{
  arr:number[];
  setArr: React.Dispatch<React.SetStateAction<number[]>>; //it is a state setter function for an array of numbers.
}

const Bars = ({arr,setArr}:BarProps) => {
  return (
    <div className='flex items-end justify-center gap-[5px]'>
        {arr.length>0 ? arr.map((num,index)=>{
            return (<SingleBar key={index} height={num}/>)
        }):""}
    </div>
  )
}

export default Bars