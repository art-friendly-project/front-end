const changetemperatureToColor = (temperature: number) => {
  if (temperature >= 0 && temperature <= 20) return 'bg-orange-10';
  if (temperature > 20 && temperature <= 40) return 'bg-orange-30';
  if (temperature > 40 && temperature <= 60) return 'bg-orange-50';
  if (temperature > 60 && temperature <= 80) return 'bg-orange-70';
  if (temperature > 80 && temperature <= 100) return 'bg-orange-90';
};

export default changetemperatureToColor;
