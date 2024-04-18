import { useEffect, useState } from 'react';
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import Spineer from './Spineer';
import { useNavigate } from 'react-router-dom';

const Loading = () => {
  const [isComplete, setIsComplete] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setIsComplete(true);
    }, 2000);
    setTimeout(() => {
      navigate('/home/taste-test/result');
    }, 4000);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      {isComplete ? (
        <>
          <IoIosArrowDropdownCircle className="w-34.4 h-34.4 text-orange-100 animate-appear-fast" />
          <span className="h-20 mt-12 leading-relaxed text-center text-Display1">
            취향 분석이 완료되었습니다.
          </span>
        </>
      ) : (
        <Spineer />
      )}
    </div>
  );
};

export default Loading;
