export default function Input({ label, type = "text", id, name, placeholder, required = false }) {
  return (
    <div className="flex flex-col gap-[4px] w-full text-left">
      <label htmlFor={id} className="font-dmsans font-regular text-sm text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-green-500 transition-all"
      />
    </div>
  );
}