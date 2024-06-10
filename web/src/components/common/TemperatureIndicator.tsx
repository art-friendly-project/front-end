import changeTemperatureToColor from 'utils/changeTemperatureToColor';

interface temperatureIndicator {
  temperature: number;
}

const TemperatureIndicator = ({ temperature }: temperatureIndicator) => {
  const temperatureColor = changeTemperatureToColor(temperature);

  return (
    <span
      className={`absolute bottom-0 text-Body1-M flex items-center justify-center h-6 w-14 rounded-2xl ${temperatureColor}`}
    >
      {temperature.toFixed(1)}도
    </span>
  );
};

export default TemperatureIndicator;
