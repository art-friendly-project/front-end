import AccessGuidanceTitle from 'components/AccessGuidance/AccessGuidanceTitle';
import AccessList from 'components/AccessGuidance/AccessList';
import BtnBasic from 'components/common/BtnBasic';
import { useNavigate } from 'react-router-dom';
import isApp from 'utils/isApp';

const AccessGuidance = () => {
  const navigate = useNavigate();

  const btnHandler = () => {
    if (isApp()) {
      window.ReactNativeWebView?.postMessage(
        JSON.stringify({ type: 'ACCESS_PERMISSION' }),
      );
    }

    navigate('/home');
  };

  return (
    <div className="relative flex flex-col w-full h-full">
      <AccessGuidanceTitle />
      <AccessList />
      <div className="absolute bottom-[5%] w-full">
        <BtnBasic name="확인" disable={false} fn={btnHandler} />
      </div>
    </div>
  );
};

export default AccessGuidance;
