import { useNavigate } from 'react-router-dom';
import logo2 from '../../assets/images/art-friendly/logo2.svg';

const Logo = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate('/');
      }}
    >
      <img src={logo2} className="absolute top-2 left-4" />
    </button>
  );
};

export default Logo;
