import NavigationBtn from './NavigationBtn';
import homeIconGray from 'assets/images/navigation/homeIconGray.svg';
import listIconGray from 'assets/images/navigation/listIconGray.svg';
import favoriteIconGray from 'assets/images/navigation/favoriteIconGray.svg';
import profileIconGray from 'assets/images/navigation/profileIconGray.svg';
import homeIconOrange from 'assets/images/navigation/homeIconOrange.svg';
import listIconOrange from 'assets/images/navigation/listIconOrange.svg';
import favoriteIconOrange from 'assets/images/navigation/favoriteIconOrange.svg';
import profileIconOrange from 'assets/images/navigation/profileIconOrange.svg';
import Toast from '../common/Toast';

const NavigationBar = () => {
  return (
    <div className="sticky bg-white bottom-0 flex shrink-0 w-full h-22.8 shadow-custom rounded-t-2xl">
      {navigations.map((navigation) => (
        <NavigationBtn
          key={navigation.name}
          name={navigation.name}
          endpoint={navigation.endpoint}
          inActiveIcon={navigation.inActiveIcon}
          activeIcon={navigation.activeIcon}
        />
      ))}
      <Toast />
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
    name: '전시/행사 목록',
    endpoint: '/shows',
    inActiveIcon: listIconGray,
    activeIcon: listIconOrange,
  },
  {
    name: '관심 목록',
    endpoint: '/like',
    inActiveIcon: favoriteIconGray,
    activeIcon: favoriteIconOrange,
  },
  {
    name: '프로필',
    endpoint: '/profile',
    inActiveIcon: profileIconGray,
    activeIcon: profileIconOrange,
  },
];

export default NavigationBar;
