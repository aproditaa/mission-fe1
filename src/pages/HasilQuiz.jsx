import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { courses } from '../data/courses';
import NavbarVideo from '../components/NavbarVideo';
import FooterVideo from '../components/FooterVideo';
import congratsBanner from '../assets/images/congrats-banner.png';
import tryAgainBanner from '../assets/images/try-again-banner.png';
import ratingIcon from '../assets/images/rating.png'; 

export default function HasilQuiz() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const course = courses.find(c => String(c.id) === String(id)) || courses[0];
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [reviewText, setReviewText] = useState("");

  const resultData = location.state || { score: 0, benar: 0, salah: 10 };
  const { score, benar, salah } = resultData;
  const totalSoal = 10;
  const isPass = score >= 60;

  const isFinished = isPass; 

  return (
    <div className="bg-[#FFFDF3] min-h-screen pb-[120px] font-sans text-[#222222] w-full overflow-x-hidden">
      <NavbarVideo 
        progressPercent={isFinished ? 100 : 90} 
        isFinished={isFinished} 
        courseTitle={course.title} 
      />

      <main className="w-full max-w-[1440px] mx-auto px-4 md:px-10 lg:px-[120px] py-6 md:py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          
          <div className="flex-1 flex flex-col gap-6">
            <div className="rounded-[25px] overflow-hidden border border-[#F1F1F1] shadow-sm bg-white">
              <img src={isPass ? congratsBanner : tryAgainBanner} alt="Status" className="w-full h-auto" />
              
              <div className="p-6 md:p-8">
                <p className="text-[14px] font-bold text-[#737373] mb-4">
                  Tanggal Pretest: <span className="font-medium text-[#A3A3A3]">22 September 2022, 10:30 AM</span>
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="p-4 rounded-2xl border border-[#F1F1F1] bg-white">
                    <p className="text-[12px] text-[#A3A3A3] mb-1">Nilai</p>
                    <p className={`text-[20px] font-bold ${isPass ? 'text-[#3ECF4C]' : 'text-[#F04438]'}`}>{score}</p>
                  </div>
                  <div className="p-4 rounded-2xl border border-[#F1F1F1] bg-white text-center md:text-left">
                    <p className="text-[12px] text-[#A3A3A3] mb-1">Soal</p>
                    <p className="text-[20px] font-bold text-[#222222]">{totalSoal}</p>
                  </div>
                  <div className="p-4 rounded-2xl border border-[#F1F1F1] bg-white text-center md:text-left">
                    <p className="text-[12px] text-[#A3A3A3] mb-1">Benar</p>
                    <p className="text-[20px] font-bold text-[#3ECF4C]">{benar}</p>
                  </div>
                  <div className="p-4 rounded-2xl border border-[#F1F1F1] bg-white text-center md:text-left">
                    <p className="text-[12px] text-[#A3A3A3] mb-1">Salah</p>
                    <p className="text-[20px] font-bold text-[#F04438]">{salah}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-[18px] font-bold mb-2">{isPass ? 'Selesai!' : 'Sedikit Lagi!'}</h3>
                  <p className="text-[14px] text-[#737373] leading-relaxed">
                    {isPass 
                      ? 'Pretest sudah selesai dan kamu sudah mengetahui progresmu. Kerjakan pretest dengan sebaik mungkin.' 
                      : 'Kamu belum menyelesaikan kuis dengan nilai minimum, belum cukup untuk melanjutkan materi.'}
                  </p>
                </div>

                {!isPass && (
                  <button onClick={() => navigate(`/soal-awal/${id}`)} className="flex items-center gap-2 px-6 py-3 rounded-xl border border-[#3ECF4C] text-[#3ECF4C] font-bold text-[14px] hover:bg-green-50 transition-all">
                    <span>🔄</span> Ulangi Quiz
                  </button>
                )}
              </div>
            </div>
          </div>

          <aside className="w-full lg:w-[350px] shrink-0">
            <div className="bg-white rounded-[25px] border border-[#E5E5E5] overflow-hidden sticky top-24 shadow-sm">
              <div className="p-5 border-b border-[#F1F1F1] bg-gray-50/50 font-bold text-[15px]">Daftar Modul</div>
              <div className="max-h-[500px] overflow-y-auto no-scrollbar">
                {course.syllabus[0].items.map((item, idx) => {
                  const isLastItem = idx === course.syllabus[0].items.length - 1;
                  const isCompleted = isFinished || idx <= 1;

                  return (
                    <div key={idx} className="flex flex-col border-b border-[#F1F1F1] last:border-0">
                      <div className="flex items-center gap-3 px-5 py-4">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${isCompleted ? 'bg-[#3ECF4C] text-white' : 'border border-[#E5E5E5] text-[#A3A3A3]'}`}>
                          {isCompleted ? '✓' : idx + 1}
                        </div>
                        <p className={`text-[12px] font-medium truncate ${isCompleted ? 'text-[#3ECF4C]' : 'text-[#737373]'}`}>{item}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="p-4 bg-gray-50 border-t border-[#F1F1F1]">
                <button 
                  onClick={() => setShowReviewModal(true)}
                  className="w-full py-4 bg-[#FFBD3A] text-white rounded-xl font-bold text-[13px] shadow-lg shadow-[#FFBD3A]/20"
                >
                  Beri Review & Rating
                </button>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {showReviewModal && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center px-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-[32px] w-full max-w-[480px] p-8 md:p-10 flex flex-col items-center text-center shadow-2xl animate-in zoom-in-95 duration-300">
            
            <h3 className="text-[20px] font-bold text-[#222222] mb-2">Tulis Review Terbaikmu!</h3>
            <p className="text-[#737373] text-[14px] mb-6">Apakah kamu yakin untuk menyelesaikan pretest ini?</p>
            <img src={ratingIcon} alt="Rating Bintang" className="h-[24px] mb-6 object-contain" />
            <textarea 
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Masukkan Review"
              className="w-full h-[120px] p-4 rounded-xl border border-[#E5E5E5] text-[14px] focus:outline-none focus:border-[#3ECF4C] resize-none mb-8"
            />

            <div className="flex flex-col md:flex-row gap-3 w-full">
              <button 
                onClick={() => setShowReviewModal(false)} 
                className="flex-1 py-3.5 rounded-xl border border-[#3ECF4C] text-[#3ECF4C] font-bold text-[14px] transition-all hover:bg-gray-50"
              >
                Batal
              </button>
              <button 
                onClick={() => {
                  setShowReviewModal(false); 
                  navigate(`/rangkuman/${id}`);
                }}
                className="flex-1 py-3.5 rounded-xl bg-[#3ECF4C] text-white font-bold text-[14px] transition-all hover:bg-[#36ba44] shadow-lg shadow-[#3ECF4C]/20"
              >
                Selesai
              </button>
            </div>
          </div>
        </div>
      )}

      <FooterVideo />
    </div>
  );
}