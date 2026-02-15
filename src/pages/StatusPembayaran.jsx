import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import imgSuccess from '../assets/images/pembayaran-berhasil.png';
import imgPending from '../assets/images/pembayaran-tertunda.png';

export default function StatusPembayaran() {
  const navigate = useNavigate();
  const location = useLocation();
  const isSuccess = location.pathname === '/selesai';

  const content = {
    title: isSuccess ? "Pembayaran Berhasil!" : "Pembayaran Tertunda!",
    image: isSuccess ? imgSuccess : imgPending,
    desc: "Silakan cek email kamu untuk informasi lebih lanjut. Hubungi kami jika ada kendala."
  };

  return (
    <div className="bg-[#FFFDF3] min-h-screen font-sans text-[#222222] flex flex-col">
      <Navbar step={3} />

      <main className="flex-1 flex justify-center items-start py-10 md:py-20 px-5">
        <div className="bg-white border border-[#E5E5E5] rounded-[12px] flex flex-col items-center text-center w-full max-w-[320px] pt-[24px] px-[20px] pb-[36px]
        md:max-w-[608px] md:pt-[24px] md:px-[36px] md:pb-[64px] md:h-auto">
          
          <div className="flex justify-center mb-8">
            <img 
              src={content.image} 
              alt={content.title} 
              className="w-full h-auto object-contain max-h-[300px] md:max-h-[420px]" 
            />
          </div>

          <h2 className="text-[20px] md:text-[24px] font-bold mb-4">{content.title}</h2>
          <p className="text-[#737373] text-[14px] md:text-[15px] leading-relaxed mb-8 md:mb-10">
            {content.desc}
          </p>

          <button 
            onClick={() => navigate('/pesanan')} 
            className="w-full bg-[#3ECF4C] text-white py-3 md:py-4 rounded-[10px] font-bold hover:bg-[#35bd42] transition-all text-[14px] md:text-[16px]"
          >
            Lihat Detail Pesanan
          </button>
        </div>

      </main>

      <Footer />
    </div>
  );
}