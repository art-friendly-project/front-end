import NavigationBtn from './NavigationBtn';
import homeIconGray from '../../assets/images/navigation/homeIconGray.svg';
import listIconGray from '../../assets/images/navigation/listIconGray.svg';
import calendarIconGray from '../../assets/images/navigation/calendarIconGray.svg';
import profileIconGray from '../../assets/images/navigation/profileIconGray.svg';
import homeIconOrange from '../../assets/images/navigation/homeIconOrange.svg';
import listIconOrange from '../../assets/images/navigation/listIconOrange.svg';
import calendarIconOrange from '../../assets/images/navigation/calendarIconOrange.svg';
import profileIconOrange from '../../assets/images/navigation/profileIconOrange.svg';
import { useAppSelector } from 'hooks';
import { selectToast } from 'store/modules/toast';

const NavigationBar = () => {
  const toast = useAppSelector(selectToast)[0];
  const isFavorite = useAppSelector(selectToast)[1];

  return (
    <div className="relative flex w-full shadow-custom h-1/10 rounded-t-2xl">
      {navigations.map((navigation) => (
        <NavigationBtn
          key={navigation.name}
          name={navigation.name}
          endpoint={navigation.endpoint}
          inActiveIcon={navigation.inActiveIcon}
          activeIcon={navigation.activeIcon}
        />
      ))}
      {toast ? (
        <div
          className={`absolute -top-14 flex items-center justify-center h-12 left-[5%] w-9/10 rounded-3xl opacity-80 animate-appear-toast ${isFavorite ? 'bg-gray-60' : 'bg-orange-100'}`}
        >
          <span className="text-white text-Body3-120">
            {isFavorite
              ? '좋아요를 취소했어요.'
              : '좋아요를 했어요. 캘린더에서 확인해보세요!'}
          </span>
        </div>
      ) : null}
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
