import AccountSection from 'components/settings/account/AccountSection';
import ServiceSection from 'components/settings/service/ServiceSection';
import UserSection from 'components/settings/user/UserSection';

const Settings = () => {
  return (
    <div className="flex flex-col w-full h-full mt-8">
      <UserSection />
      <ServiceSection />
      <AccountSection />
    </div>
  );
};

export default Settings;
