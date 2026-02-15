import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { courses } from '../data/courses';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Pagination from '../components/Pagination';
import iconUser from '../assets/images/user-icon.png';
import iconClass from '../assets/images/book-icon.png';
import iconOrder from '../assets/images/order-icon.png';

export default function Pesanan() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Semua Pesanan");
  const [sortStatus, setSortStatus] = useState("Urutkan");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 6;

  const formatPriceToNumber = (priceStr) => {
    if (!priceStr) return 0;
    if (typeof priceStr === 'number') return priceStr;
    const numeric = parseInt(priceStr.replace(/[^0-9]/g, '')) || 0;
    return priceStr.toLowerCase().includes('k') ? numeric * 1000 : numeric;
  };

  const getStatus = (i) => {
    const s = [
      { t: "Berhasil", c: "bg-[#3ECF4C]/10 text-[#3ECF4C]" },
      { t: "Gagal", c: "bg-[#FF4D4D]/10 text-[#FF4D4D]" },
      { t: "Belum Bayar", c: "bg-[#FFBD3A]/10 text-[#FFBD3A]" }
    ];
    return s[i % 3];
  };

  const filteredCourses = courses.filter((course, i) => {
    const statusObj = getStatus(i);
    const currentStatus = statusObj.t;
    const matchTab = activeTab === "Semua Pesanan" || activeTab === currentStatus;
    const matchSort = sortStatus === "Urutkan" || sortStatus === currentStatus;
    return matchTab && matchSort;
  });

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
          <div className="mb-6 text-left">
            <h5 className="font-bold text-[20px]">Daftar Pesanan</h5>
            <p className="text-[#737373] text-[13px]">Informasi terperinci mengenai pembelian</p>
          </div>
          <div className="bg-white p-6 rounded-[15px] border border-[#E5E5E5] space-y-2 shadow-sm">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center gap-3 p-3 rounded-lg text-[14px] transition-all ${
                  item.name === "Pesanan Saya" 
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

        <section className="flex-1 min-w-0">
          <div className="bg-white rounded-[15px] border border-[#E5E5E5] p-4 md:p-6 shadow-sm space-y-6">
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 pb-2">
              <div className="flex gap-4 md:gap-6 overflow-x-auto w-full no-scrollbar">
                {["Semua Pesanan", "Berhasil", "Gagal", "Belum Bayar"].map(t => (
                  <button 
                    key={t} 
                    onClick={() => { setActiveTab(t); setSortStatus("Urutkan"); }} 
                    className={`pb-2 text-[14px] whitespace-nowrap transition-colors ${activeTab === t ? 'text-[#FF4D4D] border-b-2 border-[#FF4D4D] font-bold' : 'text-[#737373]'}`}>
                    {t}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto">
                <input 
                  type="text" 
                  placeholder="Cari Kelas" 
                  className="bg-[#F9F9F9] border rounded-lg px-4 py-2 text-[14px] w-full md:w-48 outline-none focus:border-[#FFBD3A]" 
                />
                <select 
                  value={sortStatus}
                  onChange={(e) => setSortStatus(e.target.value)}
                  className="bg-white border rounded-lg px-3 py-2 text-[14px] outline-none text-[#737373] cursor-pointer"
                >
                  <option value="Urutkan">Urutkan</option>
                  <option value="Berhasil">Berhasil</option>
                  <option value="Gagal">Gagal</option>
                  <option value="Belum Bayar">Belum Bayar</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {filteredCourses.length > 0 ? (
                filteredCourses.slice(0, 5).map((course) => {
                  const originalIndex = courses.indexOf(course);
                  const status = getStatus(originalIndex);
                  const numericPrice = formatPriceToNumber(course.price);

                  return (
                    <div key={course.id} className="w-full md:max-w-[832px] flex flex-col rounded-[10px] border border-[#E5E5E5] overflow-hidden bg-white h-auto">
                      
                      <div className="w-full flex flex-row justify-between items-center px-[18px] md:px-[20px] py-[12px] md:py-[16px] border-b border-[#F1F1F1] bg-[#E2FCD933]">
                        <div className="flex flex-row flex-wrap items-center gap-2 md:gap-4">
                          <p className="text-[14px] md:text-[18px] font-medium text-[#0980E2]">
                            <span className="md:inline hidden text-[#333333AD]">No. Invoice: </span>HEL/VI/{course.id}0062023
                          </p>
                          <p className="text-[12px] md:text-[14px] text-[#737373]">
                            <span className="md:inline hidden">Waktu Pembayaran: </span>10 Juni 2023, 14.17
                          </p>
                        </div>
                        <span className={`px-3 py-1 rounded-md font-bold text-[11px] ${status.c}`}>
                          {status.t}
                        </span>
                      </div>

                      <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between px-[18px] md:px-[20px] py-[16px] md:py-[24px] border-b border-[#F1F1F1] gap-[16px]">
                        <div className="flex flex-row items-center gap-4 flex-1">
                          <img 
                            src={course.image} 
                            className="w-[52px] h-[52px] md:w-[64px] md:h-[64px] object-cover rounded-lg shrink-0" 
                            alt="" 
                          />
                          <h4 className="font-medium text-[15px] md:text-[18px] text-[#222222] leading-tight">
                            {course.title}
                          </h4>
                        </div>
                        
                        <div className="flex flex-col md:text-right">
                          <p className="text-[12px] md:text-[16px] text-[#737373]">Harga</p>
                          <p className="font-semibold text-[14px] md:text-[18px] text-[#222222]">
                            Rp {numericPrice.toLocaleString('id-ID')}
                          </p>
                        </div>
                      </div>

                      <div className="w-full flex flex-row justify-between items-center px-[18px] md:px-[20px] py-[12px] md:py-[16px] bg-[#E2FCD933]">
                        <p className="text-[12px] md:text-[16px] text-[#737373]">Total Pembayaran</p>
                        <p className="font-semibold text-[16px] md:text-[18px] text-[#3ECF4C]">
                          Rp {numericPrice.toLocaleString('id-ID')}
                        </p>
                      </div>

                    </div>
                  );
                })
              ) : (
                <div className="text-center py-20 bg-white rounded-xl border border-dashed border-[#E5E5E5]">
                  <p className="text-[#737373]">Tidak ada pesanan ditemukan.</p>
                </div>
              )}
            </div>

            <div className="pt-4 flex justify-center md:justify-end">
               <Pagination 
                 currentPage={currentPage} 
                 totalPages={totalPages} 
                 onPageChange={(page) => setCurrentPage(page)} 
               />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}