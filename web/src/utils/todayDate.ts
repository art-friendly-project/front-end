const todayDate = () => {
  const date = new Date();
  const year = String(date.getFullYear());
  const month =
    String(date.getMonth()).length === 1
      ? `0${String(date.getMonth() + 1)}`
      : String(date.getMonth() + 1);

  const day =
    String(date.getDate()).length === 1
      ? `0${String(date.getDate())}`
      : String(date.getDate());

  return `${year}-${month}-${day}`;
};

export default todayDate;
