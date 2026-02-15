import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import avatarUser from '../assets/images/avatar.png';
import menuIcon from '../assets/images/vector2.png';

export default function NavbarVideo({ progressPercent, isFinished, courseTitle }) {
  const [showPop, setShowPop] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleAmbilSertifikat = (e) => {
    e.stopPropagation();
    console.log("Navigating to certificate for ID:", id);
    navigate(`/sertifikat/${id}`);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-[#F1F1F1] px-5 lg:px-[120px] py-4 flex justify-between items-center h-[72px]">
      <div className="flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="text-[#737373] text-[20px] font-bold">←</button>
        <span className="hidden md:block font-bold text-[16px] truncate max-w-[300px]">{courseTitle || "Nama Kursus"}</span>
      </div>

      <div className="flex items-center gap-4 relative">
        {progressPercent >= 100 && (
          <button 
            onClick={handleAmbilSertifikat}
            className="hidden md:flex items-center gap-2 px-4 py-2 bg-[#3ECF4C] text-white rounded-lg font-bold text-[12px] hover:bg-[#36ba44] transition-all shadow-sm"
          >
            Ambil Sertifikat
          </button>
        )}

        <button 
          onClick={() => setShowPop(!showPop)}
          className="flex items-center gap-3 bg-[#F9F9F9] px-4 py-2 rounded-full border border-[#E5E5E5]"
        >
          <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden hidden md:block">
            <div className="h-full bg-[#FFBD3A]" style={{ width: `${progressPercent}%` }} />
          </div>
          <span className="text-[12px] font-bold text-[#FFBD3A]">{progressPercent}%</span>
          <span className="text-[10px] text-[#A3A3A3]">▼</span>
        </button>

        <img 
          src={avatarUser} 
          className="hidden md:block w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover" 
          alt="User" 
        />
        <img 
          src={menuIcon} 
          className="block md:hidden w-6 h-6 cursor-pointer object-contain" 
          alt="Menu"
          onClick={() => setShowPop(!showPop)} 
        />

        {showPop && (
          <div className="absolute top-14 right-0 w-[280px] bg-white shadow-2xl rounded-2xl border border-[#E5E5E5] p-6 z-[60]">
            <h5 className="font-bold text-[15px] mb-1">{progressPercent}% Modul Selesai</h5>
            <p className="text-[12px] text-[#737373] mb-5">Selesaikan modul untuk sertifikat.</p>
            <button 
              disabled={progressPercent < 100 && !isFinished} 
              onClick={handleAmbilSertifikat}
              className={`w-full py-3 rounded-xl text-[13px] font-bold transition-all ${
                (progressPercent >= 100 || isFinished) 
                ? 'bg-[#3ECF4C] text-white cursor-pointer hover:bg-[#36ba44]' 
                : 'bg-gray-100 text-[#A3A3A3] cursor-not-allowed'
              }`}
            >
              Ambil Sertifikat
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}