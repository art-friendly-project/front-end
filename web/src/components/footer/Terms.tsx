import { useState } from 'react';
import Term from './Term';
import DetailTermModal from './DetailTermModal';

const Terms = () => {
  const [isModal, setIsModal] = useState([false, false]);

  return (
    <div>
      {isModal.includes(true) ? (
        <DetailTermModal
          isSelectModalIdx={isModal.indexOf(true)}
          setIsModal={setIsModal}
        />
      ) : null}
      {titles.map((title, idx) => (
        <Term key={idx} title={title} idx={idx} setIsModal={setIsModal} />
      ))}
    </div>
  );
};

const titles = ['서비스 이용약관', '개인정보 처리방침'];

export default Terms;
