import { BsFillPlusCircleFill } from 'react-icons/bs';

const AddScheduleBtn = () => {
  return (
    <button className="absolute flex items-center bottom-11 right-2">
      <BsFillPlusCircleFill className="text-purple-90" />
      <span className="ml-1 text-Body1 text-gray-110">일정 추가</span>
    </button>
  );
};

export default AddScheduleBtn;
