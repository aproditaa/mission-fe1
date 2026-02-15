import Navbar from '../components/Navbar';
import LoginCard from '../components/LoginCard';

export default function Login() {
  return (
    <div className="bg-[#FFFDF3] min-h-screen">
      <Navbar variant="auth" /> 
      
      <main className="flex flex-col items-center mx-auto w-full pt-[28px] pb-[28px] md:pt-[100px]">
        <LoginCard />
      </main>
    </div>
  );
}