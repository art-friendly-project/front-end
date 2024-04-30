import { LuCalendarCheck } from 'react-icons/lu';
import location from 'assets/images/etc/location.svg';
import folder from 'assets/images/etc/folder.svg';
import notification from 'assets/images/etc/notification.svg';

const AccessList = () => {
  return (
    <div className="flex flex-col pl-[5%] mt-16">
      <span className="mb-6 text-Headline-M">선택 접근 권한</span>
      <div className="flex items-center mb-8">
        <img src={location} className="w-14 h-14" />
        <div className="flex flex-col ml-4">
          <span className="mb-1 text-Body3-120 text-gray-110">위치</span>
          <span className="text-Body2-M text-gray-60">
            주변 전시/행사 검색 시 사용
          </span>
        </div>
      </div>
      <div className="flex items-center mb-8">
        <img src={folder} className="w-14 h-14" />

        <div className="flex flex-col ml-4">
          <span className="mb-1 text-Body3-120 text-gray-110">저장 공간</span>
          <span className="text-Body2-M text-gray-60">
            프로필 이미지 변경 시 사용
          </span>
        </div>
      </div>
      <div className="flex items-center mb-8">
        <img src={notification} className="w-14 h-14" />
        <div className="flex flex-col ml-4">
          <span className="mb-1 text-Body3-120 text-gray-110">알림</span>
          <span className="text-Body2-M text-gray-60">
            공지 및 알림 시 사용
          </span>
        </div>
      </div>
      <div className="flex items-center">
        <LuCalendarCheck className="w-14 h-14" />
        <div className="flex flex-col ml-4">
          <span className="mb-1 text-Body3-120 text-gray-110">달력</span>
          <span className="text-Body2-M text-gray-60">일정 등록 시 사용</span>
        </div>
      </div>
    </div>
  );
};

export default AccessList;
