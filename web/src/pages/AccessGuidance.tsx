import AccessGuidanceTitle from 'components/accessGuidance/AccessGuidanceTitle';
import AccessList from 'components/accessGuidance/AccessList';
import BasicBtn from 'components/common/BasicBtn';
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
      <BasicBtn name="확인" fn={btnHandler} style="sticky bottom-5 mt-auto" />
    </div>
  );
};

export default AccessGuidance;
