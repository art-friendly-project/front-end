import calculateRemainDay from './calculateRemainDay';

const scheduleDay = (startDate: string, endDate: string) => {
  const toBeDay = calculateRemainDay(startDate);
  const remainDay = calculateRemainDay(endDate);

  if (toBeDay > 0) {
    return ['진행예정', 'bg-purple-90'];
  }

  if (remainDay >= 0) {
    return [`${remainDay}일 남음`, 'bg-orange-100'];
  }

  return ['종료', 'bg-gray-80'];
};

export default scheduleDay;
