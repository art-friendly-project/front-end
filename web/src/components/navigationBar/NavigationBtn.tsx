import homeIconGray from '../../assets/homeIconGray.svg';
import listIconGray from '../../assets/listIconGray.svg';
import calendarIconGray from '../../assets/calendarIconGray.svg';
import profileIconGray from '../../assets/profileIconGray.svg';
import homeIconOrange from '../../assets/homeIconOrange.svg';
import listIconOrange from '../../assets/listIconOrange.svg';
import calendarIconOrange from '../../assets/calendarIconOrange.svg';
import profileIconOrange from '../../assets/profileIconOrange.svg';
import { useNavigate } from 'react-router-dom';
import { type SetStateAction } from 'react';

interface navigationBtn {
  navigationName: string;
  active: boolean[];
  setActive: React.Dispatch<SetStateAction<boolean[]>>;
  idx: number;
}

const NavigationBtn = ({
  navigationName,
  active,
  setActive,
  idx,
}: navigationBtn) => {
  const navigate = useNavigate();

  const navigationBtnHandler = () => {
    navigate(navigationEndPoints[idx]);

    setActive((prev) =>
      prev.map((_, i) => {
        if (i === idx) return true;
        else return false;
      }),
    );
  };
  return (
    <button
      className="flex flex-col items-center justify-center w-1/4"
      key={navigationName}
      onClick={navigationBtnHandler}
    >
      {
        <img
          src={
            active[idx] ? navigationOrangeIcons[idx] : navigationGrayIcons[idx]
          }
          className="w-10 h-10 mb-1"
        />
      }
      <span className="text-Body1-M text-gray-80">{navigationName}</span>
    </button>
  );
};

const navigationEndPoints = ['/home', '/list', '/calendar', '/profile'];

const navigationGrayIcons = [
  homeIconGray,
  listIconGray,
  calendarIconGray,
  profileIconGray,
];

const navigationOrangeIcons = [
  homeIconOrange,
  listIconOrange,
  calendarIconOrange,
  profileIconOrange,
];

export default NavigationBtn;
