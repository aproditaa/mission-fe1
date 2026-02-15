import Logo from '../assets/images/logo.png';
import {Link} from 'react-router-dom';

export default function Home() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-[#FFFDF3] px-[20px] md:px-[120px] py-[40px] md:py-[80px]">
      <div className="max-w-[1440px] w-full flex flex-col items-center text-center">
        
        <h1 className="font-poppins font-bold text-[#222222] text-[24px] md:text-[48px] leading-tight mb-4 md:mb-6 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
          <span>Selamat Datang di</span>
          <img src={Logo} alt="logo" className="h-[28px] md:h-[48px] w-auto object-contain" />
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-[16px] md:gap-[20px] w-full md:w-auto">
          <Link to="/login" className="w-full md:w-[160px] h-[48px] md:h-[56px] flex items-center justify-center border-2 border-[#3ECF4C] text-[#3ECF4C] font-bold rounded-[10px] text-[14px] md:text-[16px] transition-all hover:bg-[#3ECF4C] hover:text-white">Login</Link>

          <Link to="/register" className="w-full md:w-[160px] h-[48px] md:h-[56px] flex items-center justify-center bg-[#FFBD3A] text-white font-bold rounded-[10px] text-[14px] md:text-[16px] transition-all hover:bg-[#e6a933]">Register</Link>

          <Link to="/beranda" className="w-full md:w-[160px] h-[48px] md:h-[56px] flex items-center justify-center bg-[#3ECF4C] text-white font-bold rounded-[10px] text-[14px] md:text-[16px] transition-all hover:bg-[#36b843]"
          >Beranda</Link>
        </div>
      </div>
    </section>
  );
}