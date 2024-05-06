import ChecksBtn from './ChecksBtn';
import ChecksAllBtn from './ChecksAllBtn';
import { type Dispatch, type SetStateAction } from 'react';

interface checkList {
  isChecks: boolean[];
  setIsChecks: Dispatch<SetStateAction<boolean[]>>;
}

const CheckList = ({ isChecks, setIsChecks }: checkList) => {
  const checks = [
    '[ 필수 ] 서비스 이용약관 동의',
    '[ 필수 ] 개인정보 수집 및 이용 동의',
    '[ 선택 ] 마케팅 활용 및 광고성 정보 수신 동의',
  ];

  return (
    <div className="flex flex-col px-[5%] mt-20">
      <ChecksAllBtn setIsChecks={setIsChecks} />
      {checks.map((check, idx) => (
        <ChecksBtn
          key={idx}
          idx={idx}
          text={check}
          isCheck={isChecks[idx]}
          setIsChecks={setIsChecks}
        />
      ))}
    </div>
  );
};

export default CheckList;
