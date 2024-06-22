import fire1 from '../assets/images/fires/fire1.png';
import fire2 from '../assets/images/fires/fire2.png';
import fire3 from '../assets/images/fires/fire3.png';
import fire4 from '../assets/images/fires/fire4.png';
import fire5 from '../assets/images/fires/fire5.png';

const changeTemperatureToTermometer = (temperature: number) => {
  if (temperature >= 0 && temperature <= 20) return fire1;
  if (temperature > 20 && temperature <= 40) return fire2;
  if (temperature > 40 && temperature <= 60) return fire3;
  if (temperature > 60 && temperature <= 80) return fire4;
  if (temperature > 80 && temperature <= 100) return fire5;
};

export default changeTemperatureToTermometer;
