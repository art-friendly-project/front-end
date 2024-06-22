import fireSmall1 from 'assets/images/fires/fireSmall1.png';
import fireSmall2 from 'assets/images/fires/fireSmall2.png';
import fireSmall3 from 'assets/images/fires/fireSmall3.png';
import fireSmall4 from 'assets/images/fires/fireSmall4.png';
import fireSmall5 from 'assets/images/fires/fireSmall5.png';

const changetemperatureTofireSmall = (temperature: number) => {
  if (temperature >= 0 && temperature <= 20) return fireSmall1;
  if (temperature > 20 && temperature <= 40) return fireSmall2;
  if (temperature > 40 && temperature <= 60) return fireSmall3;
  if (temperature > 60 && temperature <= 80) return fireSmall4;
  if (temperature > 80 && temperature <= 100) return fireSmall5;
};

export default changetemperatureTofireSmall;
