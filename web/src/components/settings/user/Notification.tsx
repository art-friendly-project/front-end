import { useState } from 'react';

const Notification = () => {
  const [isNotification, setIsNotification] = useState(true);

  return (
    <div className="relative flex flex-col w-full mt-6">
      <span className="mb-2 text-Subhead text-gray-110">알림 설정</span>
      <span className="text-Body1-M text-gray-70">
        알림 설정을 하면, 저장된 일정이 있는 경우 앱 푸시로
        <br />
        안내를 제공할 수 있어요.
      </span>
      <button
        className={`duration-500 flex items-center px-0.5 absolute h-[1.7rem] w-11 rounded-2xl right-[5%] ${isNotification ? 'bg-orange-100' : 'bg-gray-40'}`}
        onClick={() => {
          setIsNotification((prev) => !prev);
        }}
      >
        <div
          className={`duration-500 absolute w-6 h-6 bg-white right-0.5 rounded-full ${isNotification ? '' : '-translate-x-4'}`}
        />
      </button>
    </div>
  );
};

export default Notification;
