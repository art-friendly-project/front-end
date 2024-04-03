import LodingAnimationLogo from 'components/loding/LodingAnimationLogo';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Loading = () => {
  const [disappear, setDisappearLogo] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setDisappearLogo(true);
    }, 2000);

    setTimeout(() => {
      navigate('/login');
    }, 2500);
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-full">
      <LodingAnimationLogo disappear={disappear} />
    </div>
  );
};

export default Loading;
