import { type Dispatch, type SetStateAction } from 'react';
import Duration from './Duration';

interface durationList {
  duration: string;
  setDuration: Dispatch<SetStateAction<string>>;
}

const DurationList = ({ duration, setDuration }: durationList) => {
  return (
    <div className="z-10 flex items-center w-full h-10 py-2">
      <div className=" border-b w-full border-gray-30 mx-[5%]">
        {durations.map((durationItem) => (
          <Duration
            key={durationItem.name}
            menu={durationItem.menu}
            name={durationItem.name}
            duration={duration}
            setDuration={setDuration}
          />
        ))}
      </div>
    </div>
  );
};

const durations = [
  { menu: '현재 진행 중', name: 'inProgress' },
  { menu: '진행 예정', name: 'scheduled' },
  { menu: '종료된', name: 'ended' },
];

export default DurationList;
