import NavigationBtn from './NavigationBtn';
import homeIconGray from '../../assets/navigation/homeIconGray.svg';
import listIconGray from '../../assets/navigation/listIconGray.svg';
import calendarIconGray from '../../assets/navigation/calendarIconGray.svg';
import profileIconGray from '../../assets/navigation/profileIconGray.svg';
import homeIconOrange from '../../assets/navigation/homeIconOrange.svg';
import listIconOrange from '../../assets/navigation/listIconOrange.svg';
import calendarIconOrange from '../../assets/navigation/calendarIconOrange.svg';
import profileIconOrange from '../../assets/navigation/profileIconOrange.svg';

const NavigationBar = () => {
  return (
    <div className="flex w-full shadow-custom h-1/10 rounded-t-2xl">
      {navigations.map((navigation) => (
        <NavigationBtn
          key={navigation.name}
          name={navigation.name}
          endpoint={navigation.endpoint}
          inActiveIcon={navigation.inActiveIcon}
          activeIcon={navigation.activeIcon}
        />
      ))}
    </div>
  );
};

const navigations = [
  {
    name: '홈',
    endpoint: '/home',
    inActiveIcon: homeIconGray,
    activeIcon: homeIconOrange,
  },
  {
    name: '전시 목록',
    endpoint: '/list',
    inActiveIcon: listIconGray,
    activeIcon: listIconOrange,
  },
  {
    name: '캘린더',
    endpoint: '/calendar',
    inActiveIcon: calendarIconGray,
    activeIcon: calendarIconOrange,
  },
  {
    name: '프로필',
    endpoint: '/profile',
    inActiveIcon: profileIconGray,
    activeIcon: profileIconOrange,
  },
];

export default NavigationBar;
