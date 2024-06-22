import { type Dispatch, type SetStateAction } from 'react';
import AccountSectionTitle from './AccountSectionTitle';
import Logout from './Logout';
import Withdrawal from './Withdrawal';

interface accountSection {
  setSelectedBtn: Dispatch<SetStateAction<boolean>>;
}

const AccountSection = ({ setSelectedBtn }: accountSection) => {
  return (
    <div className="flex flex-col pb-6 border-b-10 border-b-gray-00">
      <AccountSectionTitle />
      <Logout setSelectedBtn={setSelectedBtn} />
      <Withdrawal setSelectedBtn={setSelectedBtn} />
    </div>
  );
};

export default AccountSection;
