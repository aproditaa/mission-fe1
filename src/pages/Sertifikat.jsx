import { useParams } from 'react-router-dom';
import { courses } from '../data/courses';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import sertifikatImg from '../assets/images/sertifikat.png'; 
import downloadIcon from '../assets/images/download-icon.png';
import starIcon from '../assets/images/rating.png';

export default function Sertifikat() {
  const { id } = useParams();
  const course = courses.find(c => String(c.id) === String(id)) || courses[0];

  return (
    <div className="bg-[#FFFDF3] min-h-screen font-sans text-[#222222]">
      <Navbar />

      <main className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-[120px] py-6 md:py-10">
        <nav className="flex items-center gap-2 text-[14px] text-[#A3A3A3] mb-8">
          <span>Beranda</span> <span>/</span>
          <span>Desain</span> <span>/</span>
          <span>Gapai Karier</span> <span>/</span>
          <span className="text-[#222222] font-medium">Sertifikat</span>
        </nav>

        <div className="bg-white rounded-[32px] border border-[#F1F1F1] overflow-hidden shadow-sm">
          <div className="p-6 md:p-12 flex flex-col items-center">
            
            <div className="relative mb-10 flex justify-center w-full">
              <img 
                src={sertifikatImg} 
                alt="Certificate of Completion" 
                className="shadow-md object-cover"
                style={{ 
                  width: '280px', 
                  height: '240px', 
                  borderRadius: '10px' 
                }}
              />
            </div>

            <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-t border-[#F1F1F1] pt-8">
              <div className="flex flex-col gap-4">
                <div>
                  <h1 className="text-[20px] md:text-[24px] font-bold mb-2">{course.title}</h1>
                  <p className="text-[14px] text-[#737373] max-w-[600px]">
                    Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik
                  </p>
                </div>
                
                <div className="flex items-center gap-3">
                  <img src={course.avatar} alt="Mentor" className="w-10 h-10 rounded-full object-cover" />
                  <div className="text-[12px]">
                    <p className="font-bold">{course.mentor}</p>
                    <p className="text-[#A3A3A3]">{course.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <img src={starIcon} alt="Rating" className="h-3" />
                  <span className="text-[12px] font-bold text-[#FFBD3A]">3.5 (86)</span>
                </div>
              </div>

              <button className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-[#3ECF4C] text-[#3ECF4C] rounded-xl font-bold text-[14px] hover:bg-green-50 transition-all">
                <img src={downloadIcon} alt="Download" className="w-5 h-5" />
                Download Sertifikat
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}