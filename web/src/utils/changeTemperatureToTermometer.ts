import thermometer1 from '../assets/images/thermometer/thermometer1.svg';
import thermometer2 from '../assets/images/thermometer/thermometer2.svg';
import thermometer3 from '../assets/images/thermometer/thermometer3.svg';
import thermometer4 from '../assets/images/thermometer/thermometer4.svg';
import thermometer5 from '../assets/images/thermometer/thermometer5.svg';

const changeTemperatureToTermometer = (temperature: string) => {
  const temperatureNum = Number(temperature.slice(0, -1));

  if (temperatureNum >= 0 && temperatureNum <= 20) return thermometer1;
  if (temperatureNum > 20 && temperatureNum <= 40) return thermometer2;
  if (temperatureNum > 40 && temperatureNum <= 60) return thermometer3;
  if (temperatureNum > 60 && temperatureNum <= 80) return thermometer4;
  if (temperatureNum > 80 && temperatureNum <= 100) return thermometer5;
};

export default changeTemperatureToTermometer;
