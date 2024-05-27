import thermometer1 from '../assets/images/thermometer/thermometer1.svg';
import thermometer2 from '../assets/images/thermometer/thermometer2.svg';
import thermometer3 from '../assets/images/thermometer/thermometer3.svg';
import thermometer4 from '../assets/images/thermometer/thermometer4.svg';
import thermometer5 from '../assets/images/thermometer/thermometer5.svg';

const changeTemperatureToTermometer = (temperature: number) => {
  if (temperature >= 0 && temperature <= 20) return thermometer1;
  if (temperature > 20 && temperature <= 40) return thermometer2;
  if (temperature > 40 && temperature <= 60) return thermometer3;
  if (temperature > 60 && temperature <= 80) return thermometer4;
  if (temperature > 80 && temperature <= 100) return thermometer5;
};

export default changeTemperatureToTermometer;
