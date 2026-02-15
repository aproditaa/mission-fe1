import logoFooter from '../assets/images/logo.png';
import linkedin from '../assets/images/linkedin.png';
import facebook from '../assets/images/facebook.png';
import instagram from '../assets/images/instagram.png';
import twitter from '../assets/images/twitter.png';
import chevronDown from '../assets/images/vector3.png';

export default function Footer() {
  const footerLinks = {
    kategori: ["Digital & Teknologi", "Pemasaran", "Manajemen Bisnis", "Pengembangan Diri", "Desain"],
    perusahaan: ["Tentang Kami", "FAQ", "Kebijakan Privasi", "Ketentuan Layanan", "Bantuan"],
    komunitas: ["Tips Sukses", "Blog"]
  };

  return (
    <footer className="w-full border-t border-[#E5E5E5] bg-white">
      <div className="mx-auto flex flex-col w-full max-w-[1440px] px-[20px] py-[40px] md:py-[60px] md:px-[120px] gap-[32px]">
        <div className="flex flex-col md:flex-row justify-between items-start gap-[40px] md:gap-0">
          
          <div className="flex flex-col gap-[16px] max-w-[350px]">
            <img src={logoFooter} alt="videobelajar" className="w-[170px] object-contain self-start" />
            <div className="flex flex-col gap-[8px]">
              <h5 className="font-semibold text-[#222222] text-[14px] md:text-[18px]">Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!</h5>
              <p className="text-[#222222] text-[14px]">Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
              <p className="text-[#222222] text-[14px]">+62-877-7123-1234</p>
            </div>
          </div>

          <div className="w-full md:w-auto flex flex-col md:flex-row gap-[24px] md:gap-[80px]">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="flex flex-col gap-[16px] border-b md:border-none pb-[16px] md:pb-0">
                <div className="flex justify-between items-center">
                  <h5 className="font-semibold text-[#222222] capitalize">{title}</h5>
                  <img src={chevronDown} alt="more" className="md:hidden w-[16px]" />
                </div>
                <div className="hidden md:flex flex-col gap-[12px] text-[#737373]">
                  {links.map(link => (
                    <a key={link} href="#" className="hover:text-green-600 transition-colors">{link}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-[1px] bg-[#E5E5E5]"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-[16px]">
          <p className="text-[#737373] text-[14px]">@2023 Videobelajar All Rights Reserved.</p>
          <div className="flex gap-[15px]">
            {[linkedin, facebook, instagram, twitter].map((icon, idx) => (
              <div key={idx} className="w-[35px] h-[35px] border border-[#E5E5E5] rounded-full flex items-center justify-center hover:bg-gray-50 cursor-pointer">
                <img src={icon} alt="social" className="w-[18px] h-[18px]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}