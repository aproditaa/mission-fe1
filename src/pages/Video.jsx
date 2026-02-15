import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { courses } from '../data/courses';
import videoThumbnail from '../assets/images/video-placeholder.png'; 
import ratingIcon from '../assets/images/rating.png';
import NavbarVideo from '../components/NavbarVideo';
import FooterVideo from '../components/FooterVideo';

export default function VideoCourse() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [openAccordion, setOpenAccordion] = useState(0);

  const progressPercent = 25; 
  const isFinished = progressPercent === 100;

  const course = courses.find(c => String(c.id) === String(id)) || courses[0];

  return (
    <div className="bg-[#FFFDF3] min-h-screen font-sans text-[#222222] pb-[80px]">
      
      <NavbarVideo 
        progressPercent={progressPercent} 
        isFinished={isFinished} 
        courseTitle={course.title}
      />

      <main className="mx-auto max-w-[1440px] px-5 lg:px-[120px] py-8">
        <div className="flex flex-col lg:flex-row gap-10">
          
          <div className="flex-1">
            <div className="w-full aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl mb-8 relative group cursor-pointer">
              <img 
                src={videoThumbnail} 
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" 
                alt="Video Thumbnail" 
              />
              
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center backdrop-blur-xl border border-white/30 transition-all scale-95 group-hover:scale-100">
                  <div className="w-0 h-0 border-t-[12px] md:border-t-[18px] border-t-transparent border-l-[20px] md:border-l-[30px] border-l-white border-b-[12px] md:border-b-[18px] border-b-transparent ml-2" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-2 bg-white/20 backdrop-blur-md">
                <div className="h-full bg-[#3ECF4C]" style={{ width: '40%' }} />
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-[25px] border border-[#F1F1F1] shadow-sm">
              <h1 className="text-[24px] md:text-[32px] font-bold mb-4 leading-tight">
                Praktikkan Skill dengan Technical Book
              </h1>
              <p className="text-[#737373] text-[14px] md:text-[16px] leading-relaxed mb-8">
                Pelajari dan praktikkan skill teknis dalam berbagai industri dengan Technical Book dari RiseLearn yang dirancang khusus untuk Anda.
              </p>
              
              <div className="flex items-center gap-4 p-5 bg-[#F9F9F9] rounded-2xl border border-[#F1F1F1]">
                <img src={course.avatar} className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm" alt="" />
                <div className="flex flex-col">
                  <p className="text-[16px] font-bold text-[#222222]">{course.mentor}</p>
                  <p className="text-[13px] text-[#737373]">{course.role}</p>
                  <div className="flex items-center gap-1 text-[13px] text-yellow-500 font-bold mt-1">
                    <img src={ratingIcon} className="w-[70px] h-auto object-contain" alt="Rating Stars" />
                    <span className="text-[#737373] font-medium">3.5 (853)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside className="w-full lg:w-[400px] shrink-0">
            <div className="bg-white rounded-[25px] border border-[#E5E5E5] shadow-sm overflow-hidden sticky top-24">
              <div className="p-6 border-b border-[#F1F1F1] bg-gray-50/50">
                <h3 className="font-bold text-[18px]">Daftar Modul</h3>
              </div>
              
              <div className="max-h-[500px] overflow-y-auto no-scrollbar">
                {course.syllabus.map((group, index) => (
                  <div key={index} className="border-b border-[#F1F1F1] last:border-0">
                    <button 
                      onClick={() => setOpenAccordion(openAccordion === index ? -1 : index)}
                      className={`w-full flex justify-between items-center p-6 text-left transition-all ${
                        openAccordion === index ? 'bg-[#3ECF4C]/5' : 'hover:bg-gray-50'
                      }`}
                    >
                      <span className={`text-[15px] font-bold ${openAccordion === index ? 'text-[#3ECF4C]' : 'text-[#222222]'}`}>
                        {group.groupTitle}
                      </span>
                      <span className={`text-[12px] transition-transform duration-300 ${openAccordion === index ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                    </button>
                    
                    {openAccordion === index && (
                      <div className="bg-white border-t border-[#F1F1F1]/50">
                        {group.items.map((item, idx) => (
                          <div 
                            key={idx}
                            onClick={() => {
                                if (idx === 1) {
                                    navigate(`/aturan/${course.id}`);
                                }
                            }}
                            className={`flex items-center gap-4 px-6 py-4 cursor-pointer hover:bg-gray-50 transition-all border-l-4 ${
                              idx === 0 && index === 0 
                              ? 'bg-[#3ECF4C]/10 border-[#3ECF4C]' 
                              : 'border-transparent'
                            }`}
                          >
                            <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-[11px] font-bold ${
                              idx === 0 && index === 0 
                              ? 'bg-[#3ECF4C] text-white' 
                              : 'border border-[#E5E5E5] text-[#A3A3A3]'
                            }`}>
                              {idx === 0 && index === 0 ? '✓' : idx + 1}
                            </div>
                            <div className="flex-1">
                              <p className="text-[13px] font-medium">{item}</p>
                              <p className="text-[11px] text-[#A3A3A3] mt-0.5">12 Menit</p>
                            </div>
                            <div className="text-[#A3A3A3] text-[10px] opacity-30 group-hover:opacity-100 transition-opacity">▶</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="p-6 bg-gray-50 border-t border-[#F1F1F1]">
                <button className="w-full py-4 bg-[#FFBD3A] text-white rounded-xl font-bold text-[14px] hover:bg-[#e6a830] transition-all shadow-lg shadow-[#FFBD3A]/30">
                  Beri Review & Rating
                </button>
              </div>
            </div>
          </aside>

        </div>
      </main>

      <FooterVideo />
    </div>
  );
}