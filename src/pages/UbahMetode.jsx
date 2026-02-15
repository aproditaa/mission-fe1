import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import iconBCA from '../assets/images/bca.png';
import iconBNI from '../assets/images/bni.png';
import iconBRI from '../assets/images/bri.png';
import iconMandiri from '../assets/images/mandiri.png';
import iconDana from '../assets/images/dana.png';
import iconOvo from '../assets/images/ovo.png';
import iconLinkAja from '../assets/images/linkaja.png';
import iconShopee from '../assets/images/spay.png';
import iconVisa from '../assets/images/dbvisa.png';
import iconCheck from '../assets/images/File_Check.png';
import iconVideo from '../assets/images/video.png';
import iconBook from '../assets/images/book-2.png';
import iconCertificate from '../assets/images/file-certificate.png';
import iconEdit from '../assets/images/File_Edit.png';
import iconWorld from '../assets/images/world.png';

export default function UbahMetode() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;
  const [openSection, setOpenSection] = useState("Transfer Bank");
  const [selectedMethod, setSelectedMethod] = useState("Bank BCA");

  if (!data) return null;

  const handleBayarSekarang = () => {
    navigate('/pembayaran', { state: { ...data, method: selectedMethod } });
  };

  const paymentCategories = [
    {
      title: "Transfer Bank",
      methods: [
        { name: "Bank BCA", icon: iconBCA },
        { name: "Bank BNI", icon: iconBNI },
        { name: "Bank BRI", icon: iconBRI },
        { name: "Bank Mandiri", icon: iconMandiri }
      ]
    },
    {
      title: "E-Wallet",
      methods: [
        { name: "Dana", icon: iconDana },
        { name: "OVO", icon: iconOvo },
        { name: "LinkAja", icon: iconLinkAja },
        { name: "ShopeePay", icon: iconShopee }
      ]
    },
    {
      title: "Kartu Kredit/Debit",
      methods: [
        { name: "Kartu Kredit/Debit", icon: iconVisa }
      ]
    }
  ];

  return (
    <div className="bg-[#FFFDF3] min-h-screen font-sans text-[#222222]">
      <Navbar step={1} />

      <main className="mx-auto max-w-[1440px] px-5 md:px-[120px] py-10">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          <div className="flex-1 w-full space-y-6">
            <div className="bg-white p-8 rounded-[15px] border border-[#E5E5E5]">
              <h2 className="text-[18px] font-bold mb-6">Ringkasan Belanja</h2>
              <div className="space-y-4 text-[14px]">
                <div className="flex justify-between">
                  <p className="text-[#737373]">Total Harga (1 Barang)</p>
                  <span className="font-bold">Rp {(data.totalPrice - 7000).toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#737373]">Ongkos Kirim</p>
                  <span className="font-bold">Rp 7.000</span>
                </div>
                <hr className="border-[#F1F1F1]" />
                <div className="flex justify-between items-center">
                  <span className="font-bold text-[16px]">Total Pembayaran</span>
                  <span className="font-bold text-[22px] text-[#3ECF4C]">Rp {data.totalPrice?.toLocaleString('id-ID')}</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[15px] border border-[#E5E5E5]">
              <h2 className="text-[18px] font-bold mb-6">Ubah Metode Pembayaran</h2>
              
              <div className="space-y-4">

                {paymentCategories.map((category) => (
                  <div key={category.title} className="border border-[#F1F1F1] rounded-xl overflow-hidden">
                    <button 
                      onClick={() => setOpenSection(openSection === category.title ? "" : category.title)}
                      className="w-full flex justify-between items-center p-4 bg-white font-bold"
                    >
                      <span>{category.title}</span>
                      <span>{openSection === category.title ? '▲' : '▼'}</span>
                    </button>
                    
                    {openSection === category.title && (
                      <div className="p-4 pt-0 space-y-3 animate-in fade-in slide-in-from-top-1 duration-200">
                        {category.methods.map((item) => (
                          <div 
                            key={item.name}
                            onClick={() => setSelectedMethod(item.name)}
                            className={`flex justify-between items-center p-4 border rounded-xl cursor-pointer transition-all ${selectedMethod === item.name ? 'border-[#3ECF4C] bg-green-50' : 'border-[#F1F1F1] hover:border-gray-300'}`}
                          >
                            <div className="flex items-center gap-4">
                              <img src={item.icon} className="h-6 w-10 object-contain" alt={item.name} />
                              <span className="font-medium text-[14px]">{item.name}</span>
                            </div>
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedMethod === item.name ? 'border-[#3ECF4C]' : 'border-gray-300'}`}>
                              {selectedMethod === item.name && <div className="w-2.5 h-2.5 bg-[#3ECF4C] rounded-full" />}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <button 
                  onClick={handleBayarSekarang}
                  className="w-full bg-[#3ECF4C] text-white py-4 rounded-[10px] font-bold mt-6 hover:bg-[#35bd42] transition-all shadow-md"
                >
                  Bayar Sekarang
                </button>
              </div>
            </div>
          </div>

          <aside className="w-full lg:w-[400px] shrink-0 lg:sticky lg:top-24">
             <div className="bg-white p-6 rounded-[15px] border border-[#E5E5E5]">
                <img src={data.image} className="w-full h-48 object-cover rounded-[12px] mb-4" alt="" />
                <h3 className="font-bold text-[18px] mb-3 leading-snug">{data.title}</h3>
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
            </div>
           </aside>
          </div>
       </main>     
      <Footer />
    </div>
  );
}