const changeTermToDeadline = (term: string) => {
  const year = 2000 + Number(term.slice(-8, -6));
  const month = Number(term.slice(-5, -3)) - 1;
  const day = Number(term.slice(-2)) + 1;

  const dDay = new Date(year, month, day);

  return dDay.toISOString();
};

export default changeTermToDeadline;
