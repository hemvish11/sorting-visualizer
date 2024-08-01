"use client";
import { useState } from "react";
import Bars from "./components/Bars";
import Nav from "./components/Nav";

export default function Home() {
  const [arr, setArr] = useState<number[]>([55, 98, 152, 345, 42, 98, 75, 96]);
  const [isSortingStarted, setIsSortingStarted] = useState(false);

  const bubbleSort = (arr: number[]) => {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let t = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = t;
        }
      }
    }
    return arr;
  };
  
  const handleSorting = () => {
    let newArray = [...arr];
    newArray = bubbleSort(newArray);
    setArr(newArray);
  };
  const handleReset = () => {
    let newArray = [];
    for (let i = 0; i < 40; i++) {
      let randomNumber = Math.ceil(Math.random() * 300);
      newArray.push(randomNumber);
    }
    setArr(newArray);
  };
  return (
    <section className="bg-[#CADCFC] h-screen w-full relative">
      <Nav />

      <h1 className="text-center text-3xl py-[30px] font-bold">
        Sorting Visualizer
      </h1>
      <div className="absolute right-[30px]">
        <button
          disabled={isSortingStarted}
          onClick={handleSorting}
          className="border bg-[#00246B] text-white px-4 py-1 rounded-lg right-0"
        >
          Play
        </button>
        <button
          disabled={isSortingStarted}
          onClick={handleReset}
          className="border bg-[#00246B] text-white px-4 py-1 rounded-lg"
        >
          Reset
        </button>
      </div>
      <div className="absolute bottom-[100px] left-[50%] right-[50%]">
        <Bars arr={arr} setArr={setArr} />
      </div>
    </section>
  );
}
