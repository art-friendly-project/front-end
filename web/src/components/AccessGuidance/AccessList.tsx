import { IoLocationOutline } from 'react-icons/io5';
import { CiFolderOn } from 'react-icons/ci';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { LuCalendarCheck } from 'react-icons/lu';

const AccessList = () => {
  return (
    <div className="flex flex-col pl-[5%] mt-10">
      <div className="flex items-center mb-6">
        <IoLocationOutline className="w-14 h-14" />
        <div className="flex flex-col ml-4">
          <span className="mb-1 text-Body3-120 text-gray-110">위치 (선택)</span>
          <span className="text-Body2-M text-gray-110">
            주변에 있는 전시/행사 검색 시 사용
          </span>
        </div>
      </div>
      <div className="flex items-center mb-6">
        <CiFolderOn className="w-14 h-14" />
        <div className="flex flex-col ml-4">
          <span className="mb-1 text-Body3-120 text-gray-110">
            저장 공간 (선택)
          </span>
          <span className="text-Body2-M text-gray-110">
            프로필 이미지 변경 시 사용
          </span>
        </div>
      </div>
      <div className="flex items-center mb-6">
        <IoMdNotificationsOutline className="w-14 h-14" />
        <div className="flex flex-col ml-4">
          <span className="mb-1 text-Body3-120 text-gray-110">알림 (선택)</span>
          <span className="text-Body2-M text-gray-110">
            공지 및 알림 시 사용
          </span>
        </div>
      </div>
      <div className="flex items-center">
        <LuCalendarCheck className="w-14 h-14" />
        <div className="flex flex-col ml-4">
          <span className="mb-1 text-Body3-120 text-gray-110">달력 (선택)</span>
          <span className="text-Body2-M text-gray-110">
            행사 일정 등록 시 사용
          </span>
        </div>
      </div>
    </div>
  );
};

export default AccessList;
