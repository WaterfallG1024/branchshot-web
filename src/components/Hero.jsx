import React from 'react';
import { Download, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-transparent">
      {/* Background ambient lights */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-brand-yellow/3 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-brand-cyan/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-16 items-center z-10">
        
        {/* Left Column: Copy */}
        <div className="flex flex-col justify-center space-y-8 md:space-y-10 pl-0 lg:pl-10">
          <p className="text-zinc-500 text-sm md:text-base tracking-[0.2em] uppercase font-semibold">
            Capture. Sort. Never Lose.
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-100 leading-[1.2]">
            スクショを、<br />もう散らかさない。
          </h1>
        </div>

        {/* Right Column: Logo Art & Main Action */}
        <div className="flex flex-col items-center lg:items-end justify-center space-y-28">
          
          {/* Angled Logo Art */}
          <div className="transform -rotate-12 origin-center text-center mr-0 lg:mr-16 mt-16 lg:mt-0 select-none">
            <div className="text-7xl sm:text-[8rem] lg:text-[10rem] font-black tracking-tighter text-[#5AB4AC] leading-none mb-[-1.5rem] lg:mb-[-2.5rem]">
              BRANCH
            </div>
            <div className="text-7xl sm:text-[8rem] lg:text-[10rem] font-black tracking-tighter text-brand-yellow leading-none ml-12 sm:ml-24">
              SHOT
            </div>
            {/* <div className="flex items-center justify-end gap-6 mt-6 ml-20">
              <div className="h-[3px] w-24 bg-gray-500 rounded-full"></div>
              <span className="text-gray-400 font-bold tracking-[0.4em] text-base lg:text-lg uppercase">Version 0.1.4</span>
            </div> */}
          </div>

          {/* Action Area */}
          <div className="flex flex-col items-center lg:items-end w-full max-w-[26rem] pr-0 lg:pr-8">
            {/* Download Button (Hidden) */}
            <div className="hidden">
              <button className="bg-brand-yellow text-zinc-900 font-bold text-xl w-full py-4 rounded-full flex items-center justify-center gap-3 transition-all hover:-translate-y-0.5 shadow-md">
                <Download className="w-6 h-6" />
                <span className="tracking-wide">ダウンロード (v0.1.4)</span>
              </button>
              <p className="text-center text-zinc-500 text-sm tracking-widest font-medium mt-4">Windows 10 / 11 対応</p>
            </div>
            
            <button 
              onClick={() => document.getElementById('guide')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-brand-yellow hover:bg-[#FACC15] text-zinc-900 font-bold text-xl w-full py-4 rounded-full flex items-center justify-center gap-3 transition-all transform hover:-translate-y-0.5 shadow-md mt-8 lg:mt-0"
            >
              <span className="tracking-wide">使い方ガイドを読む</span>
              <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
