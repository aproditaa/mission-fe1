import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { tataCaraData } from '../data/instruction'; 
import iconBCABig from '../assets/images/bank-bca.png';
import iconCheck from '../assets/images/File_Check.png';
import iconVideo from '../assets/images/video.png';
import iconBook from '../assets/images/book-2.png';
import iconCertificate from '../assets/images/file-certificate.png';
import iconEdit from '../assets/images/File_Edit.png';
import iconWorld from '../assets/images/world.png';

export default function Bayar() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;
  const [openCategory, setOpenCategory] = useState("Transfer Bank");
  const [openSub, setOpenSub] = useState("ATM BCA");

  if (!data) return null;

  return (
    <div className="bg-[#FFFDF3] min-h-screen font-sans text-[#222222]">
      <Navbar step={2} />

      <div className="bg-[#FFBD3A]/10 py-3 text-center border-b border-[#FFBD3A]/20">
        <p className="text-[14px] font-medium">
          Selesaikan pemesanan dalam <span className="bg-[#FF4D4D] text-white px-2 py-0.5 rounded font-bold ml-2">00 : 50 : 55</span>
        </p>
      </div>

      <main className="mx-auto max-w-[1440px] px-5 md:px-[120px] py-10">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          <div className="flex-1 w-full space-y-6">
            <div className="bg-white p-10 rounded-[15px] border border-[#E5E5E5] flex flex-col items-center text-center">
              <h2 className="text-[18px] font-bold mb-8">Metode Pembayaran</h2>
              <img src={iconBCABig} className="h-12 object-contain mb-4" alt="BCA" />
              <p className="text-[#737373] text-[15px] mb-2">Bayar Melalui Virtual Account BCA</p>
              <div className="flex items-center gap-3 bg-[#F9F9F9] px-6 py-3 rounded-xl border border-[#F1F1F1]">
                <span className="text-[20px] md:text-[24px] font-bold tracking-wider">11739 081234567890</span>
                <button className="text-[#3ECF4C] font-bold text-[14px]">Salin</button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[15px] border border-[#E5E5E5]">
              <h2 className="text-[18px] font-bold mb-6">Ringkasan Pesanan</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-start text-[14px]">
                  <p className="text-[#737373]">Video Learning: {data.title}</p>
                  <span className="font-bold">Rp {(data.totalPrice - 7000).toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between text-[14px]">
                  <p className="text-[#737373]">Biaya Admin</p>
                  <span className="font-bold">Rp 7.000</span>
                </div>
                <hr className="border-[#F1F1F1]" />
                <div className="flex justify-between items-center">
                  <span className="font-bold text-[16px]">Total Pembayaran</span>
                  <span className="font-bold text-[22px] text-[#3ECF4C]">Rp {data.totalPrice?.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex flex-col md:flex-row gap-4 pt-4">
                  <button onClick={() => navigate('ubah-metode', { state: data })} className="flex-1 border-2 border-[#3ECF4C] text-[#3ECF4C] py-4 rounded-[10px] font-bold">
                    Ganti Metode Pembayaran
                  </button>
                  <button onClick={() => navigate('/selesai')} className="flex-1 bg-[#3ECF4C] text-white py-4 rounded-[10px] font-bold">
                    Bayar Sekarang
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-[15px] border border-[#E5E5E5]">
              <h2 className="text-[18px] font-bold mb-6">Tata Cara Pembayaran</h2>
              <div className="space-y-4">
                {tataCaraData.map((item) => (
                  <div key={item.category} className="border border-[#F1F1F1] rounded-[12px] overflow-hidden">
                    <button 
                      onClick={() => setOpenCategory(openCategory === item.category ? "" : item.category)}
                      className="w-full flex justify-between items-center p-4 bg-white"
                    >
                      <span className="font-bold text-[15px]">{item.category}</span>
                      <span className={`transition-transform duration-300 ${openCategory === item.category ? 'rotate-180' : ''}`}>▼</span>
                    </button>

                    {openCategory === item.category && item.subMethods && (
                      <div className="p-4 pt-0 space-y-3">
                        {item.subMethods.map((sub) => (
                          <div key={sub.name} className="border border-[#F1F1F1] rounded-[10px]">
                            <button 
                              onClick={() => setOpenSub(openSub === sub.name ? "" : sub.name)}
                              className="w-full flex justify-between items-center p-3 text-[14px] font-bold text-[#737373]"
                            >
                              <span>{sub.name}</span>
                              <span className="text-[10px]">{openSub === sub.name ? '▲' : '▼'}</span>
                            </button>

                            {openSub === sub.name && (
                              <div className="px-3 pb-4">
                                <ol className="list-decimal list-outside ml-5 space-y-2 text-[13px] text-[#737373] leading-relaxed">
                                  {sub.steps.map((step, idx) => (
                                    <li key={idx} className="pl-2">{step}</li>
                                  ))}
                                </ol>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="w-full lg:w-[400px] bg-white p-6 rounded-[15px] border border-[#E5E5E5] shrink-0 lg:sticky lg:top-24">
            <img src={data.image} className="w-full h-48 object-cover rounded-[12px] mb-4" alt="" />
            <h3 className="font-bold text-[18px] mb-3">{data.title}</h3>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[#3ECF4C] font-bold text-[20px]">Rp {(data.totalPrice - 7000).toLocaleString('id-ID')}</span>
              <span className="bg-[#FFBD3A] text-white text-[10px] px-2 py-1 rounded-md font-bold uppercase">Diskon 50%</span>
            </div>
            <div className="space-y-5">
              <p className="font-bold text-[16px]">Kelas Ini Sudah Termasuk:</p>
              <div className="grid grid-cols-2 gap-y-5 text-[14px] text-[#737373]">
                <div className="flex items-center gap-3"><img src={iconCheck} className="w-5 h-5" /><span>Ujian Akhir</span></div>
                <div className="flex items-center gap-3"><img src={iconVideo} className="w-5 h-5" /><span>49 Video</span></div>
                <div className="flex items-center gap-3"><img src={iconBook} className="w-5 h-5" /><span>7 Dokumen</span></div>
                <div className="flex items-center gap-3"><img src={iconCertificate} className="w-5 h-5" /><span>Sertifikat</span></div>
                <div className="flex items-center gap-3"><img src={iconEdit} className="w-5 h-5" /><span>Pretest</span></div>
              </div>
            </div>
            <div className="mt-8 border-t pt-6">
              <p className="font-bold text-[16px] mb-3">Bahasa Pengantar</p>
              <div className="flex items-center gap-3 text-[14px] text-[#737373]">
                <img src={iconWorld} className="w-5 h-5" /><span>Bahasa Indonesia</span>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}