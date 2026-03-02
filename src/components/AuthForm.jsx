import Input from '../components/Input';
import Button from '../components/Button';

export default function AuthForm({ onSubmit, onRegisterClick }) {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-[24px] w-full">
      <div className="flex flex-col gap-[16px]">
        <Input label="E-Mail" type="email" id="email" name="email" required />
        
        <div className="flex flex-col gap-2">
          <Input label="Kata Sandi" type="password" id="password" name="password" required />
          <div className="text-right">
            <a href="#" className="text-xs text-gray-400 hover:text-green-600">Lupa Password?</a>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[12px]">
        <Button variant="primary" type="submit">
          Masuk
        </Button>
        
        <Button 
          variant="secondary" 
          type="button" 
          onClick={onRegisterClick}
        >
          Daftar
        </Button>
      </div>
    </form>
  );
}