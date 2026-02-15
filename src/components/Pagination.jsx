export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center gap-2 pt-6">
      <button 
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        className="w-8 h-8 flex items-center justify-center border rounded-lg disabled:opacity-30"
      >
        {"<"}
      </button>

      {pages.map((num) => (
        <button
          key={num}
          onClick={() => onPageChange(num)}
          className={`w-8 h-8 flex items-center justify-center rounded-lg text-[13px] font-bold transition-all ${
            currentPage === num 
              ? 'bg-[#FFBD3A] text-white' 
              : 'bg-white border hover:bg-gray-50'
          }`}
        >
          {num}
        </button>
      ))}

      <button 
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="w-8 h-8 flex items-center justify-center border rounded-lg disabled:opacity-30"
      >
        {">"}
      </button>
    </div>
  );
}