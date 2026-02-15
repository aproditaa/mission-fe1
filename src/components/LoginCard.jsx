import AuthForm from './AuthForm';
import Button from './Button';
import googleIcon from '../assets/images/google-icon.png';

export default function LoginCard() {
  return (
    <div className="bg-white rounded-[4px] border border-gray-200 shadow-sm flex flex-col w-[320px] md:w-[590px] h-auto p-[20px] md:p-[36px] gap-[20px] md:gap-[36px]">
      <div className="flex flex-col gap-[10px] text-center mx-auto">
        <h1 className="font-poppins text-[24px] font-semibold text-[#222222]">Masuk ke Akun</h1>
        <p className="font-dmsans text-[#737373] text-[14px]">Yuk, lanjutin belajarmu di videobelajar.</p>
      </div>

      <AuthForm />

      <div className="relative flex items-center">
        <div className="flex-grow border-t border-gray-200"></div>
        <span className="px-3 text-gray-400 text-xs">atau</span>
        <div className="flex-grow border-t border-gray-200"></div>
      </div>

      <Button variant="outline">
        <img src={googleIcon} alt="Google" className="w-5 h-5" />
        Masuk dengan Google
      </Button>
    </div>
  );
}