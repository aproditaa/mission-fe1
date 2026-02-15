import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import avatar from '../assets/images/avatar.png';
import menuIcon from '../assets/images/vector2.png'; 
import stepActive from '../assets/images/step-active.png'; 
import stepInactive from '../assets/images/step-inactive.png';
import stepDone from '../assets/images/step-done.png';

export default function Navbar({ variant = "default", step = 0 }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();

  const getStepIcon = (currentStep, targetStep) => {
    if (currentStep > targetStep) return stepDone;
    if (currentStep === targetStep) return stepActive;
    return stepInactive;
  };

  const profileMenu = [
    { label: "Profil Saya", path: "/profil" },
    { label: "Kelas Saya", path: "/kelas-saya" },
    { label: "Pesanan Saya", path: "/pesanan" },
  ];

  return (
    <nav className="w-full bg-white border-b border-[#F1F1F1] shadow-[0_2px_15px_rgba(0,0,0,0.15)] sticky top-0 z-50">
      <div className="mx-auto flex items-center justify-between w-full h-[74px] px-[24px] py-[16px] md:h-[80px] md:px-[120px] md:max-w-[1440px]">
        
        <Link to="/" className="shrink-0">
          <img src={logo} alt="Logo" className="w-[152px] h-[42px] object-contain" />
        </Link>

        {step > 0 && (
          <div className="hidden md:flex items-center gap-4 lg:gap-6 ml-auto mr-12">
            <div className="flex items-center gap-2">
              <img src={getStepIcon(step, 1)} alt="" className="w-6 h-6" />
              <span className={`text-[14px] font-bold ${step >= 1 ? 'text-[#3ECF4C]' : 'text-gray-400'}`}>Pilih Metode</span>
            </div>
            <div className={`h-[1px] w-8 lg:w-16 ${step >= 2 ? 'bg-[#3ECF4C]' : 'bg-gray-300'}`}></div>
            <div className="flex items-center gap-2">
              <img src={getStepIcon(step, 2)} alt="" className="w-6 h-6" />
              <span className={`text-[14px] font-bold ${step >= 2 ? 'text-[#3ECF4C]' : 'text-gray-400'}`}>Bayar</span>
            </div>
            <div className={`h-[1px] w-8 lg:w-16 ${step >= 3 ? 'bg-[#3ECF4C]' : 'bg-gray-300'}`}></div>
            <div className="flex items-center gap-2">
              <img src={getStepIcon(step, 3)} alt="" className="w-6 h-6" />
              <span className={`text-[14px] font-bold ${step >= 3 ? 'text-[#3ECF4C]' : 'text-gray-400'}`}>Selesai</span>
            </div>
          </div>
        )}

        {variant !== "auth" && (
          <div className="flex items-center gap-4 md:gap-[36px] relative">
            {step === 0 && (
              <Link to="/semua-produk" className="hidden md:block text-gray-700 font-medium hover:text-[#3ECF4C]">
                Kategori
              </Link>
            )}

            <div className="relative flex items-center gap-4">
              <img 
                src={avatar} 
                alt="User Avatar" 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="hidden md:block w-10 h-10 rounded-full border border-gray-200 cursor-pointer object-cover" 
              />

              <img 
                src={menuIcon} 
                alt="Menu" 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="block md:hidden w-6 h-6 cursor-pointer object-contain" 
              />

              {isProfileOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setIsProfileOpen(false)}></div>
                  <div className="absolute right-0 top-full mt-3 w-[180px] bg-white border border-[#F1F1F1] rounded-xl shadow-xl z-20 overflow-hidden py-1">
                    {profileMenu.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          navigate(item.path);
                          setIsProfileOpen(false);
                        }}
                        className="w-full text-left px-5 py-3 text-[14px] text-[#222222] font-medium hover:bg-gray-50 hover:text-[#3ECF4C]"
                      >
                        {item.label}
                      </button>
                    ))}
                    <div className="h-[1px] bg-[#F1F1F1] my-1"></div>
                    <button
                      onClick={() => navigate('/login')}
                      className="w-full text-left px-5 py-3 text-[14px] text-[#F04438] font-bold hover:bg-red-50 flex items-center justify-between"
                    >
                      Keluar <span>↪</span>
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {step > 0 && (
        <div className="md:hidden flex justify-center items-center gap-6 py-4 bg-white border-t border-[#F1F1F1]">
          <div className="flex items-center gap-2">
            <img src={getStepIcon(step, 1)} className="w-5 h-5" alt="" />
            <span className={`text-[11px] font-bold ${step >= 1 ? 'text-[#3ECF4C]' : 'text-gray-400'}`}>Metode</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={getStepIcon(step, 2)} className="w-5 h-5" alt="" />
            <span className={`text-[11px] font-bold ${step >= 2 ? 'text-[#3ECF4C]' : 'text-gray-400'}`}>Bayar</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={getStepIcon(step, 3)} className="w-5 h-5" alt="" />
            <span className={`text-[11px] font-bold ${step >= 3 ? 'text-[#3ECF4C]' : 'text-gray-400'}`}>Selesai</span>
          </div>
        </div>
      )}
    </nav>
  );
}