const changeTermToDeadline = (term: string) => {
  const year = 2000 + Number(term.slice(-8, -6));
  const month = Number(term.slice(-5, -3)) - 1;
  let day = 0;
  if (window.platform === 'android') {
    day = Number(term.slice(-2)) + 1;
  }

  if (window.platform === 'ios') {
    day = Number(term.slice(-2));
  }

  const dDay = new Date(year, month, day);

  return dDay.toISOString();
};

export default changeTermToDeadline;
