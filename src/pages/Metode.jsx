import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import iconBCA from '../assets/images/bca.png';
import iconBNI from '../assets/images/bni.png';
import iconBRI from '../assets/images/bri.png';
import iconMandiri from '../assets/images/mandiri.png';
import iconDana from '../assets/images/dana.png';
import iconOVO from '../assets/images/ovo.png';
import iconLinkAja from '../assets/images/linkaja.png';
import iconShopeePay from '../assets/images/spay.png';
import iconKredit from '../assets/images/dbvisa.png';
import iconCheck from '../assets/images/File_Check.png';
import iconVideo from '../assets/images/video.png';
import iconBook from '../assets/images/book-2.png';
import iconCertificate from '../assets/images/file-certificate.png';
import iconEdit from '../assets/images/File_Edit.png';
import iconWorld from '../assets/images/world.png';

export default function MetodePembayaran() {
  const navigate = useNavigate();
  const location = useLocation();
  const checkoutData = location.state;

  const [openSection, setOpenSection] = useState('bank');
  const [selectedMethod, setSelectedMethod] = useState('bca');

  if (!checkoutData) {
    return (
      <div className="text-center py-20 font-sans">
        <p className="text-gray-500 mb-4">Keranjang kosong. Yuk pilih kelas dulu!</p>
        <button onClick={() => navigate('/')} className="text-[#3ECF4C] font-bold underline">Kembali</button>
      </div>
    );
  }

  const formatPriceToNumber = (priceStr) => {
    const numeric = parseInt(priceStr.replace(/[^0-9]/g, ''));
    return priceStr.toLowerCase().includes('k') ? numeric * 1000 : numeric;
  };

  const numericPrice = formatPriceToNumber(checkoutData.price);
  const adminFee = 7000;
  const totalPrice = numericPrice + adminFee;

  const paymentMethods = {
    bank: [
      { id: 'bca', name: 'Transfer Bank BCA', icon: iconBCA },
      { id: 'bni', name: 'Transfer Bank BNI', icon: iconBNI },
      { id: 'bri', name: 'Transfer Bank BRI', icon: iconBRI },
      { id: 'mandiri', name: 'Transfer Bank Mandiri', icon: iconMandiri },
    ],
    ewallet: [
      { id: 'dana', name: 'Dana', icon: iconDana },
      { id: 'ovo', name: 'OVO', icon: iconOVO },
      { id: 'linkaja', name: 'LinkAja', icon: iconLinkAja },
      { id: 'shopee', name: 'ShopeePay', icon: iconShopeePay },
    ]
  };

  return (
    <div className="bg-[#FFFDF3] min-h-screen font-sans text-[#222222]">
      <Navbar step={1} />

      <main className="mx-auto max-w-[1440px] px-5 md:px-[120px] py-10">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          <div className="flex-1 w-full space-y-6">
            <div className="bg-white p-6 rounded-[15px] border border-[#E5E5E5]">
              <h2 className="text-[18px] font-bold mb-6">Metode Pembayaran</h2>
              
              <div className="space-y-4">
                <div className="border border-[#F1F1F1] rounded-[10px] overflow-hidden">
                  <button onClick={() => setOpenSection(openSection === 'bank' ? '' : 'bank')} className="w-full flex justify-between items-center p-4 bg-white">
                    <span className="font-bold text-[15px]">Transfer Bank</span>
                    <span className={`transition-transform duration-300 ${openSection === 'bank' ? 'rotate-180' : ''}`}>▼</span>
                  </button>
                  {openSection === 'bank' && (
                    <div className="px-4 pb-4 space-y-3">
                      {paymentMethods.bank.map((method) => (
                        <div key={method.id} onClick={() => setSelectedMethod(method.id)} className={`flex justify-between items-center p-4 border rounded-[10px] cursor-pointer transition-all ${selectedMethod === method.id ? 'border-[#3ECF4C] bg-green-50/30' : 'border-[#F1F1F1]'}`}>
                          <div className="flex items-center gap-4">
                            <img src={method.icon} alt={method.name} className="w-10 h-6 object-contain" />
                            <span className="text-[14px] font-medium">{method.name}</span>
                          </div>
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedMethod === method.id ? 'border-[#3ECF4C]' : 'border-gray-300'}`}>
                            {selectedMethod === method.id && <div className="w-2.5 h-2.5 bg-[#3ECF4C] rounded-full"></div>}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="border border-[#F1F1F1] rounded-[10px] overflow-hidden">
                  <button onClick={() => setOpenSection(openSection === 'ewallet' ? '' : 'ewallet')} className="w-full flex justify-between items-center p-4 bg-white">
                    <span className="font-bold text-[15px]">E-Wallet</span>
                    <span className={`transition-transform duration-300 ${openSection === 'ewallet' ? 'rotate-180' : ''}`}>▼</span>
                  </button>
                  {openSection === 'ewallet' && (
                    <div className="px-4 pb-4 space-y-3">
                      {paymentMethods.ewallet.map((method) => (
                        <div key={method.id} onClick={() => setSelectedMethod(method.id)} className={`flex justify-between items-center p-4 border rounded-[10px] cursor-pointer transition-all ${selectedMethod === method.id ? 'border-[#3ECF4C] bg-green-50/30' : 'border-[#F1F1F1]'}`}>
                          <div className="flex items-center gap-4">
                            <img src={method.icon} alt={method.name} className="w-10 h-6 object-contain" />
                            <span className="text-[14px] font-medium">{method.name}</span>
                          </div>
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedMethod === method.id ? 'border-[#3ECF4C]' : 'border-gray-300'}`}>
                            {selectedMethod === method.id && <div className="w-2.5 h-2.5 bg-[#3ECF4C] rounded-full"></div>}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="border border-[#F1F1F1] rounded-[10px] overflow-hidden">
                  <button onClick={() => setOpenSection(openSection === 'kredit' ? '' : 'kredit')} className="w-full flex justify-between items-center p-4 bg-white">
                    <span className="font-bold text-[15px]">Kartu Kredit/Debit</span>
                    <span className={`transition-transform duration-300 ${openSection === 'kredit' ? 'rotate-180' : ''}`}>▼</span>
                  </button>
                  {openSection === 'kredit' && (
                    <div className="px-4 pb-4">
                       <div onClick={() => setSelectedMethod('cc')} className={`flex justify-between items-center p-4 border rounded-[10px] cursor-pointer transition-all ${selectedMethod === 'cc' ? 'border-[#3ECF4C] bg-green-50/30' : 'border-[#F1F1F1]'}`}>
                          <div className="flex items-center gap-4">
                            <img src={iconKredit} alt="Credit Card" className="w-16 h-6 object-contain" />
                            <span className="text-[14px] font-medium">Kartu Kredit / Debit</span>
                          </div>
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedMethod === 'cc' ? 'border-[#3ECF4C]' : 'border-gray-300'}`}>
                            {selectedMethod === 'cc' && <div className="w-2.5 h-2.5 bg-[#3ECF4C] rounded-full"></div>}
                          </div>
                        </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-[15px] border border-[#E5E5E5]">
              <h2 className="text-[18px] font-bold mb-6">Ringkasan Pesanan</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-start gap-4">
                  <p className="text-[#737373] text-[14px]">Video Learning: {checkoutData.title}</p>
                  <span className="font-bold text-[14px]">Rp {numericPrice.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between text-[14px]">
                  <p className="text-[#737373]">Biaya Admin</p>
                  <span className="font-bold">Rp {adminFee.toLocaleString('id-ID')}</span>
                </div>
                <hr className="border-[#F1F1F1]" />
                <div className="flex justify-between items-center">
                  <span className="font-bold text-[16px]">Total Pembayaran</span>
                  <span className="font-bold text-[20px] text-[#3ECF4C]">Rp {totalPrice.toLocaleString('id-ID')}</span>
                </div>
                <button 
                  onClick={() => navigate('/pembayaran', { state: { ...checkoutData, totalPrice, selectedMethod } })}
                  className="w-full bg-[#3ECF4C] text-white py-4 rounded-[10px] font-bold text-[16px] hover:bg-[#35bd42] transition-transform active:scale-[0.98]"
                >
                  Bayar Sekarang
                </button>
              </div>
            </div>
          </div>

          <aside className="w-full lg:w-[400px] bg-white p-6 rounded-[15px] border border-[#E5E5E5] shrink-0 lg:sticky lg:top-24">
            <img src={checkoutData.image} className="w-full h-44 object-cover rounded-[10px] mb-4" alt={checkoutData.title} />
            <h3 className="font-bold text-[16px] mb-3 leading-snug">Gapai karier impianmu sebagai Seorang {checkoutData.title}</h3>
            
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[#3ECF4C] font-bold text-[18px]">Rp {numericPrice.toLocaleString('id-ID')}</span>
              {checkoutData.isDiscount && (
                <>
                  <span className="text-[#737373] line-through text-[14px]">Rp 500.000</span>
                  <span className="bg-[#FFBD3A] text-white text-[10px] px-2 py-0.5 rounded-full font-bold">Diskon 50%</span>
                </>
              )}
            </div>

            <div className="space-y-4">
              <p className="font-bold text-[#222222] text-[16px]">Kelas Ini Sudah Termasuk:</p>
              <div className="grid grid-cols-2 gap-y-4 text-[13px] text-[#737373]">
                <div className="flex items-center gap-2">
                  <img src={iconCheck} alt="Check" className="w-5 h-5 object-contain" />
                  <span>Ujian Akhir</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src={iconVideo} alt="Video" className="w-5 h-5 object-contain" />
                  <span>49 Video</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src={iconBook} alt="Book" className="w-5 h-5 object-contain" />
                  <span>7 Dokumen</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src={iconCertificate} alt="Cert" className="w-5 h-5 object-contain" />
                  <span>Sertifikat</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src={iconEdit} alt="Pretest" className="w-5 h-5 object-contain" />
                  <span>Pretest</span>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t pt-6">
              <p className="font-bold text-[#222222] text-[16px] mb-2">Bahasa Pengantar</p>
              <div className="flex items-center gap-2 text-[14px] text-[#737373]">
                <img src={iconWorld} alt="World" className="w-5 h-5 object-contain" />
                <span>Bahasa Indonesia</span>
              </div>
            </div>
          </aside>

        </div>
      </main>
      <Footer />
    </div>
  );
}