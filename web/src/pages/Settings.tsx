import ConfirmModal from 'components/common/ConfirmModal';
import AccountSection from 'components/settings/account/AccountSection';
import ServiceSection from 'components/settings/service/ServiceSection';
import UserSection from 'components/settings/user/UserSection';
import { useState } from 'react';

const Settings = () => {
  const [selectedBtn, setSelectedBtn] = useState(true);

  const confirmModalFn = () => {};

  const confirmModalText = () => {
    return selectedBtn
      ? '계정을 로그아웃할까요?'
      : '회원 탈퇴를 진행할까요?\n\n탈퇴하면 작성된 담벼락,\n관심 목록이 모두 삭제되어요';
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
