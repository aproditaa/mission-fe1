import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import iconUser from '../assets/images/user-icon.png';
import iconClass from '../assets/images/book-icon.png';
import iconOrder from '../assets/images/order-icon.png';
import ppIcon from '../assets/images/pp-icon.jpeg'; 

export default function Profil() {
  const navigate = useNavigate();
  
  const menuItems = [
    { name: "Profil Saya", icon: iconUser, path: "/profil" },
    { name: "Kelas Saya", icon: iconClass, path: "/kelas-saya" },
    { name: "Pesanan Saya", icon: iconOrder, path: "/pesanan" },
  ];

  return (
    <div className="bg-[#FFFDF3] min-h-screen font-sans text-[#222222]">
      <Navbar variant="default" />
      
      <main className="mx-auto max-w-[1440px] px-5 lg:px-[120px] py-10 flex flex-col lg:flex-row gap-8">
        <aside className="w-full lg:w-[280px] shrink-0">
          <div className="mb-6">
            <h1 className="font-bold text-[24px]">Ubah Profil</h1>
            <p className="text-[#737373] text-[14px]">Ubah data diri Anda</p>
          </div>
          <div className="bg-white p-6 rounded-[15px] border border-[#E5E5E5] space-y-2 shadow-sm">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center gap-3 p-3 rounded-lg text-[14px] transition-all ${
                  item.name === "Profil Saya" 
                  ? 'bg-[#FFBD3A]/10 text-[#FFBD3A] font-bold border border-[#FFBD3A]/20' 
                  : 'text-[#737373] hover:bg-gray-50'
                }`}
              >
                <img src={item.icon} className="w-5 h-5" alt="" />
                {item.name}
              </button>
            ))}
          </div>
        </aside>

        <section className="bg-white rounded-[10px] border border-[#E5E5E5] p-[24px] flex flex-col gap-[24px] shadow-sm w-full lg:w-[872px] h-fit">
          
          <div className="flex items-start gap-4 border border-[#E5E5E5] rounded-xl p-4 w-full lg:max-w-[344px] h-[100px]">
            <img src={ppIcon} className="w-[60px] h-[60px] lg:w-[70px] lg:h-[70px] rounded-lg object-cover" alt="Profile" />
            <div className="flex flex-col justify-center h-full">
              <h4 className="font-bold text-[16px] leading-tight">Katarina</h4>
              <p className="text-[#737373] text-[13px] mt-1">katarinablu@gmail.com</p>
              <button className="text-[#FF4D4D] text-[11px] font-bold text-left mt-1 hover:underline">Ganti Foto Profil</button>
            </div>
          </div>

          <form className="flex flex-col gap-[24px]">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-8">
              <div className="relative">
                <label className="lg:hidden block text-[14px] text-[#737373] mb-2">Nama Lengkap</label>
                <div className="relative">
                  <input 
                    type="text" 
                    defaultValue="Katarina"
                    className="w-full border border-[#3ECF4C] rounded-lg px-4 py-2.5 text-[14px] focus:outline-none"
                  />
                  <span className="hidden lg:block absolute -top-2 left-3 bg-white px-1 text-[10px] text-[#3ECF4C] font-semibold">Nama Lengkap</span>
                </div>
              </div>

              <div className="relative">
                <label className="lg:hidden block text-[14px] text-[#737373] mb-2">E-Mail</label>
                <div className="relative">
                  <input 
                    type="email" 
                    defaultValue="katarinablu@gmail.com"
                    className="w-full border border-[#E5E5E5] rounded-lg px-4 py-2.5 text-[14px] focus:outline-none"
                  />
                  <span className="hidden lg:block absolute -top-2 left-3 bg-white px-1 text-[10px] text-[#737373] font-semibold">E-Mail</span>
                </div>
              </div>

              <div className="relative">
                <label className="lg:hidden block text-[14px] text-[#737373] mb-2">No. HP</label>
                <div className="relative flex">
                  <div className="flex items-center gap-1 border border-[#E5E5E5] border-r-0 rounded-l-lg px-3 py-2.5 text-[14px] bg-white">
                    +62 <span className="text-[8px] opacity-40">▼</span>
                  </div>
                  <input 
                    type="text" 
                    defaultValue="81234567890"
                    className="flex-1 border border-[#E5E5E5] rounded-r-lg px-4 py-2.5 text-[14px] focus:outline-none"
                  />
                  <span className="hidden lg:block absolute -top-2 left-3 bg-white px-1 text-[10px] text-[#737373] font-semibold">No. HP</span>
                </div>
              </div>

              <div className="lg:hidden flex flex-col gap-2">
                <label className="text-[14px] text-[#737373]">Jenis Kelamin</label>
                <div className="relative">
                  <select className="w-full border border-[#E5E5E5] rounded-lg px-4 py-3 text-[14px] appearance-none bg-white">
                    <option>Perempuan</option>
                    <option>Laki-laki</option>
                  </select>
                  <span className="absolute right-4 top-4 text-[10px] opacity-40">▼</span>
                </div>
              </div>

              <div className="lg:hidden flex flex-col gap-2 relative">
                <label className="text-[14px] text-[#737373]">Password</label>
                <input type="password" defaultValue="howyoulikethat" className="w-full border border-[#E5E5E5] rounded-lg px-4 py-3 text-[14px]" />
                <span className="absolute right-4 top-[42px] opacity-40">👁️</span>
              </div>

              <div className="lg:hidden flex flex-col gap-2 relative">
                <label className="text-[14px] text-[#737373]">Konfirmasi Password</label>
                <input type="password" defaultValue="howyoulikethat" className="w-full border border-[#E5E5E5] rounded-lg px-4 py-3 text-[14px]" />
                <span className="absolute right-4 top-[42px] opacity-40">👁️</span>
              </div>
            </div>

            <div className="flex justify-end mt-2">
              <button className="bg-[#3ECF4C] text-white px-10 py-2.5 rounded-lg font-bold text-[14px] hover:bg-[#32b140] transition-colors w-full lg:w-auto">
                Simpan
              </button>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}