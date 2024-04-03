import { useState } from 'react';
import NavigationBtn from './NavigationBtn';

const NavigationBar = () => {
  const [active, setActive] = useState([true, false, false, false]);

  return (
    <div className="flex w-full shadow-custom h-1/10 rounded-t-2xl">
      {navigationNames.map((navigationName, idx) => (
        <NavigationBtn
          key={idx}
          navigationName={navigationName}
          active={active}
          setActive={setActive}
          idx={idx}
        />
      ))}
    </div>
  );
};

const navigationNames = ['홈', '전시 목록', '캘린더', '프로필'];

export default NavigationBar;
