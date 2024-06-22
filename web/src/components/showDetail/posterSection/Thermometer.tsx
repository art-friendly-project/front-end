import changeTemperatureToTermometer from 'utils/changeTemperatureToTermometer';

interface thermometer {
  temperature: number;
}

const Thermometer = ({ temperature }: thermometer) => {
  const selectThermometer = changeTemperatureToTermometer(temperature);
  return (
    <div className="absolute z-30 flex flex-col items-center bottom-4 right-4">
      <img src={selectThermometer} />
      <span className="mt-1 text-Body1-M text-gray-30">
        관심 {temperature.toFixed(1)}도
      </span>
    </div>
  );
};

export default Thermometer;
