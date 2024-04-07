const changeDegreeToColor = (degree: string) => {
  const degreeNum = Number(degree.slice(0, -1));

  if (degreeNum >= 0 && degreeNum <= 20) return 'bg-orange-10';
  if (degreeNum > 20 && degreeNum <= 40) return 'bg-orange-30';
  if (degreeNum > 40 && degreeNum <= 60) return 'bg-orange-50';
  if (degreeNum > 60 && degreeNum <= 80) return 'bg-orange-70';
  if (degreeNum > 80 && degreeNum <= 100) return 'bg-orange-90';
};

export default changeDegreeToColor;
