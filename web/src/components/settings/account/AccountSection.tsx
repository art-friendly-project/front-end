import AccountSectionTitle from './AccountSectionTitle';
import Logout from './Logout';
import Withdrawal from './Withdrawal';

const AccountSection = () => {
  return (
    <div className="flex flex-col pb-10 border-b-10 border-b-gray-00">
      <AccountSectionTitle />
      <Logout />
      <Withdrawal />
    </div>
  );
};

export default AccountSection;
