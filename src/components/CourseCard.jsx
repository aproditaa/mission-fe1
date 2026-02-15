import PropTypes from 'prop-types';
import ratingIcon from '../assets/images/rating.png';
import { Link } from 'react-router-dom';

export default function CourseCard({ course }) {
  return (
    <Link to={`/courses/${course.id}`} className="block h-full">
      <div className="bg-white border border-[#F1F1F1] rounded-[15px] flex flex-col h-full transition-shadow hover:shadow-md overflow-hidden">
        
        <div className="p-4 md:p-5">
          <img 
            src={course.image} 
            alt={course.title} 
            className="rounded-[10px] object-cover w-full h-[180px] md:h-[193px]" 
          />
        </div>

        <div className="flex flex-col flex-grow px-5 pb-5">
          <div className="flex flex-col gap-2">
            <h3 className="font-poppins font-bold text-[#222222] text-[16px] md:text-[18px] leading-snug line-clamp-2">
              {course.title}
            </h3>
            <p className="text-[#737373] text-[13px] md:text-[14px] line-clamp-3 leading-relaxed">
              {course.desc}
            </p>
          </div>

          <div className="flex-grow min-h-[20px]"></div>

          <div className="flex items-center gap-3 mb-4">
            <img 
              src={course.avatar} 
              alt={course.mentor} 
              className="rounded-full object-cover w-9 h-9 md:w-10 md:h-10 border border-gray-100" 
            />
            <div className="flex flex-col overflow-hidden">
              <p className="font-semibold text-[#222222] text-[12px] md:text-[14px] truncate">
                {course.mentor}
              </p>
              <p className="text-[#737373] text-[10px] md:text-[12px] truncate">
                {course.role}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <img
                src={ratingIcon}
                alt="rating"
                className="w-[60px] md:w-[75px] object-contain"
              />
              <span className="text-[11px] md:text-[12px] text-[#737373]">
                ({course.rating})
              </span>
            </div>
            <p className="text-[#3ECF4C] font-bold text-[18px] md:text-[22px]">
              {course.price}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

CourseCard.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
    avatar: PropTypes.string,
    mentor: PropTypes.string,
    role: PropTypes.string,
    rating: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
};