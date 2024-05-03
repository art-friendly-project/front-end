const changetemperatureToColor = (temperature: string) => {
  const temperatureNum = Number(temperature.slice(0, -1));

  if (temperatureNum >= 0 && temperatureNum <= 20) return 'bg-orange-10';
  if (temperatureNum > 20 && temperatureNum <= 40) return 'bg-orange-30';
  if (temperatureNum > 40 && temperatureNum <= 60) return 'bg-orange-50';
  if (temperatureNum > 60 && temperatureNum <= 80) return 'bg-orange-70';
  if (temperatureNum > 80 && temperatureNum <= 100) return 'bg-orange-90';
};

export default changetemperatureToColor;
