import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { courses } from '../data/courses';
import NavbarVideo from '../components/NavbarVideo';
import FooterVideo from '../components/FooterVideo';
import rulesImage from '../assets/images/rules-placeholder.png';

export default function AturanQuiz() {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courses.find(c => String(c.id) === String(id)) || courses[0];
  const [completedModules, setCompletedModules] = useState([0]);

  const handleStartQuiz = () => {
    if (!completedModules.includes(1)) {
      setCompletedModules([...completedModules, 1]);
    }
    navigate(`/soal-awal/${id}`);
  };

  return (
    <div className="bg-[#FFFDF3] min-h-screen pb-[80px]">
      <NavbarVideo progressPercent={30} courseTitle={course.title} />

      <main className="mx-auto max-w-[1440px] px-5 lg:px-[120px] py-8">
        <div className="flex flex-col lg:flex-row gap-10">
          
          <div className="flex-1">
            <div className="bg-white rounded-[25px] overflow-hidden border border-[#F1F1F1] shadow-sm">
              <img src={rulesImage} className="w-full h-auto" alt="Rules" />
              <div className="p-8">
                <h2 className="text-[24px] font-bold mb-4">Aturan</h2>
                <p className="text-[#737373] text-[15px] mb-6 leading-relaxed">
                  Kerjakan pretest dengan sebaik mungkin untuk mengukur pemahaman awalmu terkait materi yang akan kamu pelajari.
                  <br /><br />
                  Syarat Nilai Kelulusan: - <br />
                  Durasi Ujian: 5 Menit
                </p>
                <button 
                  onClick={handleStartQuiz}
                  className="px-8 py-3 bg-[#3ECF4C] text-white rounded-xl font-bold hover:bg-[#36ba44] transition-all"
                >
                  Mulai Quiz
                </button>
              </div>
            </div>
          </div>

          <aside className="w-full lg:w-[400px] shrink-0">
            <div className="bg-white rounded-[25px] border border-[#E5E5E5] shadow-sm overflow-hidden sticky top-24">
              <div className="p-6 border-b border-[#F1F1F1] bg-gray-50/50 font-bold">Daftar Modul</div>
              
              <div className="max-h-[500px] overflow-y-auto no-scrollbar">
                {course.syllabus[0].items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 px-6 py-4 border-b border-[#F1F1F1] last:border-0">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 ${
                      completedModules.includes(idx) 
                      ? 'bg-[#3ECF4C] text-white' 
                      : 'border border-[#E5E5E5] text-[#A3A3A3]'
                    }`}>
                      {completedModules.includes(idx) ? '✓' : idx + 1}
                    </div>
                    <div className="flex-1">
                      <p className={`text-[13px] font-medium ${completedModules.includes(idx) ? 'text-[#3ECF4C]' : 'text-[#737373]'}`}>
                        {item}
                      </p>
                      <p className="text-[11px] text-[#A3A3A3]">12 Menit</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-gray-50 border-t border-[#F1F1F1]">
                <button className="w-full py-4 bg-[#FFBD3A] text-white rounded-xl font-bold text-[14px] hover:bg-[#e6a830] transition-all shadow-lg shadow-[#FFBD3A]/30 flex items-center justify-center gap-2">
                  Beri Review & Rating
                </button>
              </div>
            </div>
          </aside>

        </div>
      </main>

      <FooterVideo currentModule={course.syllabus[0].items[0]} nextModule={course.syllabus[0].items[1]} />
    </div>
  );
}