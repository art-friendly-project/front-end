import Access from './Access';
import Notification from './Notification';
import UserSectionTitle from './UserSectionTitle';

const UserSection = () => {
  return (
    <div className="flex flex-col w-full border-b-10 pl-[5%] border-b-gray-00 pb-10">
      <UserSectionTitle />
      <Notification />
      <Access />
    </div>
  );
};

export default UserSection;
