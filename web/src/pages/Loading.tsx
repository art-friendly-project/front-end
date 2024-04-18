import { useEffect, useState } from 'react';
import Spineer from '../components/home/detail/tasteTest/loading/Spineer';
import { useNavigate } from 'react-router-dom';
import LoadingComplete from 'components/loding/LoadingComplete';

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
          <LoadingComplete />
        </>
      ) : (
        <Spineer />
      )}
    </div>
  );
};

export default Loading;
