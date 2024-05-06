import BtnBasic from 'components/common/BtnBasic';
import CheckList from 'components/termsOfUse/CheckList';
import TermsOfUseTitle from 'components/termsOfUse/TermsOfUseTitle';
import { useNavigate } from 'react-router-dom';

const TermsOfUse = () => {
  const navigate = useNavigate();

  const btnHandler = () => {
    navigate('/taste-select');
  };

  return (
    <div className="relative flex flex-col w-full h-full">
      <TermsOfUseTitle />
      <CheckList />
      <div className="absolute bottom-[5%] w-full">
        <BtnBasic name="동의하기" disable={false} fn={btnHandler} />
      </div>
    </div>
  );
};

export default TermsOfUse;
