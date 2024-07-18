import folder from 'assets/images/etc/folder.svg';
import notification from 'assets/images/etc/notification.svg';
import calendar from 'assets/images/etc/calendar.svg';

const AccessList = () => {
  return (
    <div className="flex flex-col pl-[5%] mt-[10%]">
      <span className="mb-6 text-Headline-M">선택 접근 권한</span>
      {/* <div className="flex items-center mb-[5%]">
        <img src={location} className="w-12 h-12" />
        <div className="flex flex-col ml-4">
          <span className="mb-1 text-Body3-120 text-gray-110">위치</span>
          <span className="text-Body2-M text-gray-60">
            주변 전시/행사 검색 시 사용
          </span>
        </div>
      </div> */}
      <div className="flex items-center mb-[5%]">
        <img src={folder} className="w-12 h-12" />
        <div className="flex flex-col ml-4">
          <span className="mb-1 text-Body3-120 text-gray-110">저장 공간</span>
          <span className="text-Body2-M text-gray-60">
            프로필 이미지 변경 시 사용
          </span>
        </div>
      </div>
      <div className="flex items-center mb-[5%]">
        <img src={notification} className="w-12 h-12" />
        <div className="flex flex-col ml-4">
          <span className="mb-1 text-Body3-120 text-gray-110">알림</span>
          <span className="text-Body2-M text-gray-60">
            공지 및 알림 시 사용
          </span>
        </div>
      </div>
      <div className="flex items-center">
        <img src={calendar} className="w-10 h-10 ml-1.5 mr-0.5" />
        <div className="flex flex-col ml-4">
          <span className="mb-1 text-Body3-120 text-gray-110">달력</span>
          <span className="text-Body2-M text-gray-60">일정 등록 시 사용</span>
        </div>
      </div>
    </div>
  );
};

export default AccessList;
