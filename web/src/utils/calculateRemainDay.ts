const calculateRemainDay = (date: string) => {
  const today = new Date();

  const dDay = new Date(date);

  const timeGap = dDay.getTime() - today.getTime();
  const remainDay = Math.ceil(timeGap / (1000 * 60 * 60 * 24));

  return remainDay;
};

export default calculateRemainDay;
