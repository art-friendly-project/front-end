import { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const Loading = () => {
  const [appearLogo, setAppearLogo] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setAppearLogo(true);
    }, 2100);

    setTimeout(() => {
      navigate('login');
    }, 3000);
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full h-full">
      {appearLogo ? (
        <img src={logo} className="absolute w-44 h-44 animate-appear" />
      ) : (
        <div className="absolute rounded-full bg-orange-50 w-44 h-44">
          <div className="animate-spin-slow absolute bg-white -left-6 rounded-[30%] w-60 h-60 bottom-12" />
        </div>
      )}
    </div>
  );
};

export default Loading;
