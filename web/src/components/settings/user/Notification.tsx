const Notification = () => {
  return (
    <div className="flex flex-col mt-6">
      <span className="mb-2 text-Subhead text-gray-110">알림 설정</span>
      <span className="text-Body1-M text-gray-70">
        알림 설정을 하면, 저장된 일정이 있는 경우 앱 푸시로
        <br />
        안내를 제공할 수 있어요.
      </span>
    </div>
  );
};

export default Notification;
