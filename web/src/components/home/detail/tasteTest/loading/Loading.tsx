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
    <div className="flex items-center justify-center w-full h-full">
      {isComplete ? (
        <IoIosArrowDropdownCircle className="absolute w-34.4 h-34.4 text-orange-100 animate-appear-fast" />
      ) : (
        <Spineer />
      )}
    </div>
  );
};

export default Loading;
