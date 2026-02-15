import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";
import Hero from "../assets/images/banner.png";

export default function Home() {
  return (
    <div className="bg-[#FFFDF3] min-h-screen">
      <Navbar />

      <section className="w-full py-[28px] px-[20px] md:py-[64px] md:px-[120px]">
        <div className="relative overflow-hidden rounded-[10px] flex items-center justify-center text-center w-full h-[400px]">
          <img src={Hero} alt="background" className="absolute inset-0 w-full h-full object-cover brightness-50"
          />
          <div className="relative z-10 flex flex-col items-center gap-[12px] px-4 md:max-w-[920px]">
            <h1 className="text-white font-poppins font-bold text-[24px] md:text-[48px] leading-tight">
              Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!
            </h1>
            <p className="text-white font-dmsans text-[14px] md:text-[16px]">
              Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi.
            </p>
            <button className="bg-[#3ECF4C] text-white font-bold rounded-[10px] mt-[12px] w-full md:w-[369px] h-[42px] hover:bg-green-600 transition-colors">
              Temukan Video Course untuk Dipelajari
            </button>
          </div>
        </div>
      </section>

      <section className="px-[20px] md:px-[120px] pb-20">
        <div className="flex flex-col gap-[4px] md:gap-[8px] mb-[32px] md:mb-[48px]">
          <h2 className="text-[24px] md:text-[32px] font-poppins font-semibold text-[#222222]">
            Koleksi Video Pembelajaran Unggulan
          </h2>
          <p className="text-[#737373] text-[14px] md:text-[16px]">
            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
          </p>
        </div>
        
        <div className="flex gap-8 border-b border-gray-200 mb-8 overflow-x-auto no-scrollbar">
          <button className="text-[#FF4D4D] font-medium border-b-2 border-[#FF4D4D] pb-3 whitespace-nowrap">Semua Kelas</button>
          <button className="text-[#737373] font-medium pb-3 whitespace-nowrap hover:text-[#FF4D4D] transition-colors">Pemasaran</button>
          <button className="text-[#737373] font-medium pb-3 whitespace-nowrap hover:text-[#FF4D4D] transition-colors">Desain</button>
          <button className="text-[#737373] font-medium pb-3 whitespace-nowrap hover:text-[#FF4D4D] transition-colors">Pengembangan Diri</button>
          <button className="text-[#737373] font-medium pb-3 whitespace-nowrap hover:text-[#FF4D4D] transition-colors">Bisnis</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-16 justify-items-center">
          {courses.map((item) => (
            <CourseCard key={item.id} course={item} />
          ))}
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
}