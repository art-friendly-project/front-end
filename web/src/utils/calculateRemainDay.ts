const calculateRemainDay = (term: string) => {
  const today = new Date();

  const year = 2000 + Number(term.slice(-8, -6));
  const month = Number(term.slice(-5, -3)) - 1;
  const day = Number(term.slice(-2));

  const dDay = new Date(year, month, day);

  const timeGap = dDay.getTime() - today.getTime();
  const remainDay = Math.ceil(timeGap / (1000 * 60 * 60 * 24));

  return remainDay;
};

export default calculateRemainDay;
