import BtnContainer from 'components/termsOfUse/BtnContainer';
import CheckList from 'components/termsOfUse/CheckList';
import DetailModal from 'components/termsOfUse/DetailModal';
import TermsOfUseTitle from 'components/termsOfUse/TermsOfUseTitle';
import { useState } from 'react';

const TermsOfUse = () => {
  const [isChecks, setIsChecks] = useState([false, false, false]);
  const [isModal, setIsModal] = useState([false, false]);

  return (
    <div className="relative flex flex-col items-center w-full h-full">
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
      <BtnContainer isChecks={isChecks} />
    </div>
  );
};

export default TermsOfUse;
