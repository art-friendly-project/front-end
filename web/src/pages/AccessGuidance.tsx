import AccessGuidanceTitle from 'components/AccessGuidance/AccessGuidanceTitle';
import AccessList from 'components/AccessGuidance/AccessList';
import BtnBasic from 'components/common/BtnBasic';
import { useNavigate } from 'react-router-dom';

const AccessGuidance = () => {
  const navigate = useNavigate();

  const btnHandler = () => {
    navigate('/home');
  };

  return (
    <div className="relative flex flex-col w-full h-full">
      <AccessGuidanceTitle />
      <AccessList />
      <div className="absolute bottom-[10%] w-full">
        <BtnBasic name="확인" disable={false} fn={btnHandler} />
      </div>
    </div>
  );
};

export default AccessGuidance;
