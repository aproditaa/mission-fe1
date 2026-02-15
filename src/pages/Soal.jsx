import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { courses } from '../data/courses';
import NavbarVideo from '../components/NavbarVideo';
import FooterVideo from '../components/FooterVideo';
import submitBanner from '../assets/images/submit-banner.png'; 

export default function SoalQuiz() {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courses.find(c => String(c.id) === String(id)) || courses[0];
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState({});
  const [showModal, setShowModal] = useState(false);
  const totalQuestions = 10;
  const isLastQuestion = currentQuestion === totalQuestions;

  const options = [
    "Memikirkan tentang default *",
    "Mempertimbangkan page layout berdasarkan suatu tujuan tertentu",
    "Memastikan bahwa sistem berjalan sesuai dengan apa yang terjadi saat itu juga",
    "Menciptakan konsistensi dan menggunakan elemen UI umum"
  ];

  const handleOptionChange = (index) => {
    setAnswers({ ...answers, [currentQuestion]: index });
  };
  const handleFinalSubmit = () => {
    const totalAnswered = Object.keys(answers).length;
    
    if (totalAnswered === totalQuestions) {
      navigate(`/hasil/${id}`, { 
        state: { score: 100, benar: 10, salah: 0 } 
      });
    } else {
      navigate(`/hasil/${id}`, { 
        state: { score: 20, benar: 2, salah: 8 } 
      });
    }
  };

  return (
    <div className="bg-[#FFFDF3] min-h-screen pb-[120px] font-sans text-[#222222] w-full overflow-x-hidden">
      <NavbarVideo progressPercent={35} courseTitle={course.title} />

      <main className="w-full max-w-[1440px] mx-auto px-4 md:px-10 lg:px-[120px] py-6 md:py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          
          <div className="w-full lg:w-[280px] shrink-0">
            <div className="bg-white rounded-2xl border border-[#F1F1F1] p-5 shadow-sm">
              <h3 className="font-bold text-[16px] mb-4">List Soal</h3>
              <div className="grid grid-cols-5 gap-2">
                {Array.from({ length: totalQuestions }, (_, i) => i + 1).map((num) => (
                  <button
                    key={num}
                    onClick={() => setCurrentQuestion(num)}
                    className={`aspect-square rounded-lg border text-[14px] font-bold flex items-center justify-center transition-all ${
                      currentQuestion === num 
                        ? 'border-[#FFBD3A] bg-[#FFF9EE] text-[#FFBD3A]' 
                        : answers[num] !== undefined
                        ? 'border-[#3ECF4C] bg-[#F0FDF4] text-[#3ECF4C]'
                        : 'border-[#E5E5E5] text-[#737373]'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
              <div className="mt-5 p-4 bg-[#F0F9FF] border border-[#B9E6FE] rounded-xl text-center">
                <p className="text-[12px] text-[#026AA2]">Selesaikan semua soal untuk mengakhiri quiz</p>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-white rounded-2xl border border-[#F1F1F1] p-6 md:p-8 shadow-sm h-fit">
            <h2 className="text-[18px] font-bold mb-4">Pertanyaan {currentQuestion}</h2>
            <p className="text-[14px] md:text-[15px] text-[#737373] leading-relaxed mb-8">
              Memikirkan dan mengantisipasi secara teliti adanya user secara tidak sengaja mengutak-atik konfigurasi, namun dapat diatasi dengan membuat default yang mengurangi kepanikan pada user adalah pengertian dari ..
            </p>

            <div className="space-y-3 mb-10">
              {options.map((opt, idx) => (
                <label key={idx} className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${answers[currentQuestion] === idx ? 'border-[#3ECF4C] bg-[#F0FDF4]' : 'border-[#F1F1F1] hover:bg-gray-50'}`}>
                  <input 
                    type="radio" 
                    checked={answers[currentQuestion] === idx} 
                    onChange={() => handleOptionChange(idx)} 
                    className="w-4 h-4 mt-1 accent-[#3ECF4C] shrink-0" 
                  />
                  <span className={`text-[14px] leading-tight ${answers[currentQuestion] === idx ? 'text-[#222222] font-medium' : 'text-[#737373]'}`}>{opt}</span>
                </label>
              ))}
            </div>

            <div className="flex gap-3 md:justify-end pt-6 border-t border-[#F1F1F1]">
              <button disabled={currentQuestion === 1} onClick={() => setCurrentQuestion(prev => prev - 1)} className="flex-1 md:w-[150px] py-3 rounded-xl border border-[#E5E5E5] text-[#A3A3A3] font-bold text-[14px] disabled:opacity-30">
                ← Sebelumnya
              </button>
              
              <button 
                onClick={() => {
                  if (isLastQuestion) {
                    setShowModal(true);
                  } else {
                    setCurrentQuestion(prev => prev + 1);
                  }
                }}
                className={`flex-1 md:w-[150px] py-3 rounded-xl font-bold text-[14px] text-white transition-all shadow-lg ${
                  isLastQuestion ? 'bg-[#FFBD3A]' : 'bg-[#3ECF4C]'
                }`}
              >
                {isLastQuestion ? 'Selesaikan →' : 'Selanjutnya →'}
              </button>
            </div>
          </div>

          <aside className="w-full lg:w-[320px] shrink-0">
            <div className="bg-white rounded-2xl border border-[#E5E5E5] overflow-hidden sticky top-24 shadow-sm">
              <div className="p-5 border-b border-[#F1F1F1] bg-gray-50/50 font-bold text-[15px]">Daftar Modul</div>
              <div className="max-h-[400px] overflow-y-auto no-scrollbar">
                {course.syllabus[0].items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 px-5 py-4 border-b border-[#F1F1F1] last:border-0">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${idx <= 1 ? 'bg-[#3ECF4C] text-white' : 'border border-[#E5E5E5] text-[#A3A3A3]'}`}>
                      {idx <= 1 ? '✓' : idx + 1}
                    </div>
                    <p className={`text-[12px] font-medium truncate ${idx <= 1 ? 'text-[#3ECF4C]' : 'text-[#737373]'}`}>{item}</p>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-gray-50 border-t border-[#F1F1F1]">
                <button className="w-full py-3 bg-[#FFBD3A] text-white rounded-xl font-bold text-[12px]">Beri Review & Rating</button>
              </div>
            </div>
          </aside>

        </div>
      </main>

      {showModal && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center px-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-[32px] w-full max-w-[480px] p-8 md:p-10 flex flex-col items-center text-center shadow-2xl animate-in zoom-in-95 duration-300">
            <img src={submitBanner} alt="Selesaikan Pretest" className="w-[220px] md:w-[260px] mb-8" />
            
            <h3 className="text-[20px] md:text-[24px] font-bold text-[#222222] mb-3">Selesaikan Pretest</h3>
            <p className="text-[#737373] text-[14px] md:text-[15px] mb-10 leading-relaxed">
              Apakah kamu yakin untuk menyelesaikan pretest ini?
            </p>

            <div className="flex flex-col md:flex-row gap-3 w-full">
              <button 
                onClick={() => setShowModal(false)} 
                className="flex-1 py-3.5 rounded-xl border border-[#3ECF4C] text-[#3ECF4C] font-bold text-[14px] transition-all hover:bg-gray-50"
              >
                Batal
              </button>
              
              <button 
                onClick={handleFinalSubmit} 
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