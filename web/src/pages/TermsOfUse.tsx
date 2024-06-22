import api from 'api';
import BtnBasic from 'components/common/BtnBasic';
import CheckList from 'components/termsOfUse/CheckList';
import DetailModal from 'components/termsOfUse/DetailModal';
import TermsOfUseTitle from 'components/termsOfUse/TermsOfUseTitle';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TermsOfUse = () => {
  const [isChecks, setIsChecks] = useState([false, false, false]);
  const [isModal, setIsModal] = useState([false, false, false]);

  const navigate = useNavigate();

  const btnHandler = () => {
    void fetchTerms();
  };

  const fetchTerms = async () => {
    const termIdList = isChecks.filter((check) => check).map((_, i) => i + 1);

    try {
      await api.post('/terms', { termIdList });

      navigate('/taste-select');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="relative flex flex-col w-full h-full">
      {isModal.includes(true) ? (
        <DetailModal
          isSelectModalIdx={isModal.indexOf(true)}
          setIsModal={setIsModal}
          setIsChecks={setIsChecks}
        />
      ) : null}
      <TermsOfUseTitle />
      <CheckList
        isChecks={isChecks}
        setIsChecks={setIsChecks}
        setIsModal={setIsModal}
      />
      <BtnBasic
        name="동의하기"
        disable={!isChecks[0] || !isChecks[1]}
        fn={btnHandler}
        style="sticky bottom-6 mt-auto w-full"
      />
    </div>
  );
};

export default TermsOfUse;
