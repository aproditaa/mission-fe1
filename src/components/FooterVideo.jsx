import React from 'react';

export default function FooterVideo({ currentModule, nextModule }) {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-[#3ECF4C] text-white z-40">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-[120px] py-4 flex justify-between items-center h-[61px]">
        
        <button className="flex items-center gap-2 text-[14px] font-semibold hover:opacity-80 transition-all">
          <span className="w-6 h-6 flex items-center justify-center border border-white rounded-full">‹</span>
          <span className="hidden md:inline">{currentModule || "Previous Module"}</span>
        </button>

        <button className="flex items-center gap-2 text-[14px] font-semibold hover:opacity-80 transition-all text-right">
          <span className="hidden md:inline">{nextModule || "Next Module"}</span>
          <span className="w-6 h-6 flex items-center justify-center border border-white rounded-full">›</span>
        </button>

      </div>
    </footer>
  );
}