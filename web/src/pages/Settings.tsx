import ConfirmModal from 'components/common/ConfirmModal';
import AccountSection from 'components/settings/account/AccountSection';
import ServiceSection from 'components/settings/service/ServiceSection';
import UserSection from 'components/settings/user/UserSection';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const navigate = useNavigate();
  const [selectedBtn, setSelectedBtn] = useState(true);

  const confirmModalFn = () => {
    if (selectedBtn) {
      localStorage.clear();
      navigate('/kakao-login');
    }
    if (!selectedBtn) navigate('/withdrawal/reason');
  };

  const confirmModalText = () => {
    return selectedBtn ? '계정을 로그아웃할까요?' : '회원 탈퇴를 진행할까요?';
  };
  return (
    <>
      <ConfirmModal text={confirmModalText()} fn={confirmModalFn} />
      <div className="flex flex-col w-full h-full mt-8">
        <UserSection />
        <ServiceSection />
        <AccountSection setSelectedBtn={setSelectedBtn} />
      </div>
    </>
  );
};

export default Settings;
