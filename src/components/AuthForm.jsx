import Input from "../components/Input";
import Button from "../components/Button";

export default function AuthForm() {
  return (
    <form className="flex flex-col gap-[24px] w-full">
      <div className="flex flex-col gap-[16px]">
        <Input label="E-Mail" type="email" id="email" name="email" required />
        
        <div className="flex flex-col gap-2">
          <Input label="Kata Sandi" type="password" id="password" name="password" required />
          <div className="text-right">
            <a href="#" className="text-xs text-gray-500 hover:text-green-600">Lupa Password?</a>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[12px]">
        <Button variant="primary" type="submit">Masuk</Button>
        <Button variant="secondary">Daftar</Button>
      </div>
    </form>
  );
}