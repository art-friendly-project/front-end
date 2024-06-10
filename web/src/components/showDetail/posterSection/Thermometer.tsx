import changeTemperatureToTermometer from 'utils/changeTemperatureToTermometer';

interface thermometer {
  temperature: number;
}

const Thermometer = ({ temperature }: thermometer) => {
  console.log(temperature);
  const selectThermometer = changeTemperatureToTermometer(temperature);
  return (
    <div className="absolute z-20 right-4 top-32">
      <img src={selectThermometer} />
      <span className="absolute text-Body1-M top-[5.3rem] text-center right-[0.15rem] w-8 ">
        {temperature.toFixed(1)}
      </span>
    </div>
  );
};

export default Thermometer;
