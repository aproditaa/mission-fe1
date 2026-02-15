import { useParams, useNavigate } from 'react-router-dom';
import { courses } from '../data/courses';
import NavbarVideo from '../components/NavbarVideo';
import FooterVideo from '../components/FooterVideo';
import videoPlaceholder from '../assets/images/video-placeholder.png';
import downloadIcon from '../assets/images/download-icon.png'; 

export default function RangkumanModul() {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courses.find(c => String(c.id) === String(id)) || courses[0];
  const finalResult = { score: 100, benar: 10, salah: 0 };

  return (
    <div className="bg-[#FFFDF3] min-h-screen pb-[120px] font-sans text-[#222222] w-full overflow-x-hidden">
      <NavbarVideo progressPercent={95} courseTitle={course.title} />

      <main className="w-full max-w-[1440px] mx-auto px-4 md:px-10 lg:px-[120px] py-6 md:py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          
          <div className="flex-1 flex flex-col gap-6">
            <div className="bg-white rounded-[25px] overflow-hidden border border-[#F1F1F1] shadow-sm p-4 md:p-6">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black group cursor-pointer">
                <img 
                  src={videoPlaceholder} 
                  alt="Video Rangkuman" 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-[18px] md:text-[20px] font-bold mb-2">Download Rangkuman Modul</h2>
                <p className="text-[14px] text-[#737373] mb-6">
                  Silakan download rangkuman modul dari materi yang telah kamu pelajari
                </p>
                <button className="flex items-center gap-3 px-6 py-3.5 bg-white border-2 border-[#3ECF4C] text-[#3ECF4C] rounded-xl font-bold text-[14px] hover:bg-green-50 transition-all shadow-sm">
                  <img src={downloadIcon} alt="Download" className="w-5 h-5 object-contain" />
                  Download Rangkuman
                </button>
              </div>
            </div>
          </div>

          <aside className="w-full lg:w-[350px] shrink-0">
            <div className="bg-white rounded-[25px] border border-[#E5E5E5] overflow-hidden sticky top-24 shadow-sm">
              <div className="p-5 border-b border-[#F1F1F1] bg-gray-50/50 font-bold text-[15px]">Daftar Modul</div>
              
              <div className="max-h-[500px] overflow-y-auto no-scrollbar">
                {course.syllabus[0].items.map((item, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => {
                      const isQuiz = item.toLowerCase().includes('quiz') || item.toLowerCase().includes('ujian');
                      const isLastItem = idx === course.syllabus[0].items.length - 1;

                      if (isQuiz || isLastItem) {
                        navigate(`/hasil/${id}`, { state: finalResult });
                      }
                    }}
                    className={`flex items-center gap-3 px-5 py-4 border-b border-[#F1F1F1] last:border-0 cursor-pointer hover:bg-gray-50 transition-colors`}
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                      idx <= 5 ? 'bg-[#3ECF4C] text-white' : 'border border-[#E5E5E5] text-[#A3A3A3]'
                    }`}>
                      {idx <= 5 ? '✓' : idx + 1}
                    </div>
                    <p className={`text-[12px] font-medium truncate ${idx <= 5 ? 'text-[#3ECF4C]' : 'text-[#737373]'}`}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-gray-50 border-t border-[#F1F1F1]">
                <button className="w-full py-4 bg-[#FFBD3A] text-white rounded-xl font-bold text-[13px] shadow-lg shadow-[#FFBD3A]/20">
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