import Navbar from '../components/Navbar';
import RegisterCard from '../components/RegisterCard';

export default function Register() {
  return (
    <div className="bg-[#FFFDF3] min-h-screen">
      <Navbar variant="auth" /> 
      <main className="flex flex-col items-center mx-auto w-full pt-[28px] pb-[28px] md:pt-[64px]">
        <RegisterCard />
      </main>
    </div>
  );
}