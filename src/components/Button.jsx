export default function Button({ children, variant = "primary", type = "button", ...props }) {
  const variants = {
    primary: "bg-[#3ecf4d] text-white hover:bg-green-600",
    secondary: "bg-[#e8f9e9] text-[#3ecf4d] border border-green-100",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50",
  };

  return (
    <button 
      type={type} 
      className={`w-full font-semibold py-2 rounded-md transition flex items-center justify-center gap-2 ${variants[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
}