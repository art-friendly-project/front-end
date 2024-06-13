import DetailTermModal from 'components/footer/DetailTermModal';
import TermsAndPolicyBtn from 'components/termsAndPolicy/TermsAndPolicyBtn';
import { useState } from 'react';

const TermsAndPolicy = () => {
  const [isModal, setIsModal] = useState([false, false, false]);

  return (
    <div className="flex flex-col w-full h-full">
      {isModal.includes(true) ? (
        <DetailTermModal
          isSelectModalIdx={isModal.indexOf(true)}
          setIsModal={setIsModal}
        />
      ) : null}
      {titles.map((title, idx) => (
        <TermsAndPolicyBtn
          key={idx}
          title={title}
          idx={idx}
          setIsModal={setIsModal}
        />
      ))}
    </div>
  );
};

const titles = ['서비스 이용약관', '개인정보 처리방침', '위치정보 이용약관'];

export default TermsAndPolicy;
