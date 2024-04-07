import { useNavigate } from 'react-router-dom';
import logo2 from '../../assets/art-friendly/logo2.svg';

const Logo = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate('/');
      }}
    >
      <img src={logo2} className="ml-4" />
    </button>
  );
};

export default Logo;
