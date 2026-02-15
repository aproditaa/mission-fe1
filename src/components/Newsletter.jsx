import Frame from '../assets/images/frame.png';

export default function Newsletter() {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-[20px] md:px-[120px] py-[40px] md:py-[80px]">
      <div className="relative w-full h-[350px] md:h-[400px] rounded-[20px] overflow-hidden flex items-center justify-center">
        <img src={Frame} alt="background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex flex-col items-center px-[20px] max-w-[600px] text-center">
          <h4 className="text-white font-semibold uppercase tracking-widest text-[16px] md:text-[18px]">Newsletter</h4>
          <h2 className="text-white font-bold leading-tight mt-[8px] text-[24px] md:text-[32px]">Mau Belajar Lebih Banyak?</h2>
          <p className="text-white opacity-90 mt-[8px] text-[14px] md:text-[16px]">
            Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik hariesok.id
          </p>

          <div className="mt-[24px] md:mt-[32px] flex flex-col md:flex-row items-center w-[280px] md:w-[525px] gap-[16px] md:gap-[20px] md:bg-white md:rounded-[10px] md:p-[8px] md:pl-[32px]">
            <input 
              type="email" 
              placeholder="Masukkan Emailmu" 
              className="w-full flex-1 h-[48px] md:h-full rounded-[10px] md:rounded-none px-[16px] md:px-0 bg-white md:bg-transparent text-center md:text-left text-[14px] md:text-[16px] text-[#222222] focus:outline-none placeholder:text-[#737373]" 
            />
            <button className="w-full md:w-auto h-[48px] md:h-[42px] px-[32px] bg-[#FFBD3A] text-white font-bold rounded-[10px] hover:bg-yellow-400 transition-all text-[14px] md:text-[16px]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}