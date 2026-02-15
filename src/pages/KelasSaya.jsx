import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { courses } from '../data/courses'; 
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Pagination from '../components/Pagination';
import iconUser from '../assets/images/user-icon.png';
import iconClass from '../assets/images/book-icon.png';
import iconOrder from '../assets/images/order-icon.png';
import iconBook from '../assets/images/notebook-icon.png'; 
import iconClock from '../assets/images/clock-icon.png'; 

export default function KelasSaya() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Semua Kelas");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const menuItems = [
    { name: "Profil Saya", icon: iconUser, path: "/profil" },
    { name: "Kelas Saya", icon: iconClass, path: "/kelas-saya" },
    { name: "Pesanan Saya", icon: iconOrder, path: "/pesanan" },
  ];

  const getProgressInfo = (index) => {
    const data = [
      { status: "Selesai", percent: 100, solved: "12/12" },
      { status: "Sedang Berjalan", percent: 60, solved: "7/12" },
      { status: "Sedang Berjalan", percent: 20, solved: "2/12" }
    ];
    return data[index % 3];
  };

  const filteredCourses = courses.filter((_, index) => {
    const { status } = getProgressInfo(index);
    return activeTab === "Semua Kelas" || activeTab === status;
  });

  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredCourses.slice(startIndex, startIndex + itemsPerPage);

  const handleTabChange = (t) => {
    setActiveTab(t);
    setCurrentPage(1);
  };

  return (
    <div className="bg-[#FFFDF3] min-h-screen font-sans text-[#222222]">
      <Navbar variant="default" />
      
      <main className="mx-auto max-w-[1440px] px-5 lg:px-[120px] py-10 flex flex-col lg:flex-row gap-8">
        <aside className="w-full lg:w-[280px] shrink-0">
          <div className="mb-6">
            <h5 className="font-bold text-[20px]">Daftar Kelas</h5>
            <p className="text-[#737373] text-[13px]">Akses materi belajar dan kelola peningkatan pengetahuan Anda</p>
          </div>
          <div className="bg-white p-6 rounded-[15px] border border-[#E5E5E5] space-y-2 shadow-sm">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center gap-3 p-3 rounded-lg text-[14px] transition-all ${
                  item.name === "Kelas Saya" 
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
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 pb-2 border-b border-[#F1F1F1]">
              <div className="flex gap-4 md:gap-8 overflow-x-auto w-full no-scrollbar">
                {["Semua Kelas", "Sedang Berjalan", "Selesai"].map(t => (
                  <button 
                    key={t} 
                    onClick={() => handleTabChange(t)} 
                    className={`pb-4 text-[14px] whitespace-nowrap transition-colors relative ${activeTab === t ? 'text-[#FF4D4D] font-bold' : 'text-[#737373]'}`}>
                    {t}
                    {activeTab === t && <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF4D4D]" />}
                  </button>
                ))}
              </div>
              <div className="w-full md:w-64">
                <input type="text" placeholder="Cari Kelas" className="bg-[#F9F9F9] border rounded-lg px-4 py-2 text-[14px] w-full outline-none focus:border-[#FFBD3A]" />
              </div>
            </div>

            <div className="flex flex-col gap-6 min-h-[400px]">
              {currentItems.map((course) => {
                const progress = getProgressInfo(courses.indexOf(course));

                return (
                  <div key={course.id} className="w-full flex flex-col rounded-[10px] border border-[#E5E5E5] overflow-hidden bg-white shadow-sm">
                    <div className="w-full flex flex-row justify-between items-center px-[18px] py-[12px] border-b border-[#F1F1F1] bg-[#E2FCD933]">
                      <p className="text-[12px] md:text-[14px] text-[#737373]">
                        <span className="font-bold text-[#222222]">{progress.solved}</span> Modul Terselesaikan
                      </p>
                      <span className={`px-3 py-1 rounded-md font-bold text-[10px] ${progress.status === "Selesai" ? 'bg-[#3ECF4C]/10 text-[#3ECF4C]' : 'bg-[#FFBD3A]/10 text-[#FFBD3A]'}`}>
                        {progress.status}
                      </span>
                    </div>

                    <div className="w-full flex flex-col md:flex-row p-[18px] gap-[16px] border-b border-[#F1F1F1]">
                      <img src={course.image} className="w-full md:w-[220px] h-[140px] object-cover rounded-lg shrink-0" alt="" />
                      <div className="flex flex-col gap-2 flex-1">
                        <h4 className="font-bold text-[16px] md:text-[20px] text-[#222222] leading-tight">{course.title}</h4>
                        <p className="text-[12px] md:text-[14px] text-[#737373] line-clamp-2">{course.desc}</p>
                        
                        <div className="flex flex-col gap-3 mt-1">
                          <div className="flex items-center gap-3">
                            <img src={course.avatar} className="w-9 h-9 rounded-full object-cover shrink-0" alt="" />
                            <div className="leading-tight">
                              <p className="text-[13px] font-bold text-[#222222]">{course.mentor}</p>
                              <p className="text-[11px] text-[#737373]">{course.role}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1.5 text-[12px] text-[#737373]">
                              <img src={iconBook} alt="" className="w-4 h-4 opacity-70" /> {course.modul} Modul
                            </div>
                            <div className="flex items-center gap-1.5 text-[12px] text-[#737373]">
                              <img src={iconClock} alt="" className="w-4 h-4 opacity-70" /> {course.duration}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="w-full p-[18px] bg-[#E2FCD933] flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div className="flex-1 flex flex-col gap-2">
                        <p className="text-[12px] text-[#737373]">Progres Kelas: <span className="text-[#222222] font-bold">{progress.percent}%</span></p>
                        <div className="w-full md:max-w-[400px] h-[8px] bg-white rounded-full overflow-hidden border border-[#E5E5E5]">
                          <div className="h-full bg-[#3ECF4C] transition-all duration-500" style={{ width: `${progress.percent}%` }} />
                        </div>
                      </div>
                      
                      <div className="flex flex-col md:flex-row gap-2 md:gap-3 shrink-0">
                        {progress.status === "Selesai" ? (
                          <>
                            <button 
                              onClick={() => navigate('/sertifikat')} 
                              className="w-full md:w-auto px-6 py-2.5 border border-[#3ECF4C] bg-white text-[#3ECF4C] text-[12px] font-bold rounded-lg hover:bg-[#3ECF4C]/5 transition-all"
                            >
                              Unduh Sertifikat
                            </button>
                            <button 
                              onClick={() => navigate('/video-course')} 
                              className="w-full md:w-auto px-6 py-2.5 bg-[#3ECF4C] text-white text-[12px] font-bold rounded-lg hover:bg-[#36ba44] transition-all"
                            >
                              Lihat Detail Kelas
                            </button>
                          </>
                        ) : (
                          <button 
                            onClick={() => navigate(`/video-course/${course.id}`)} 
                            className="w-full md:w-auto px-6 py-2.5 bg-[#3ECF4C] text-white text-[12px] font-bold rounded-lg hover:bg-[#36ba44] transition-all"
                          >
                            Lanjutkan Pembelajaran
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-8 flex justify-center md:justify-end">
               <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={(page) => setCurrentPage(page)} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}