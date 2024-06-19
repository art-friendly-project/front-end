import changeTemperatureToColor from 'utils/changeTemperatureToColor';

interface temperatureIndicator {
  temperature: number;
}

const TemperatureIndicator = ({ temperature }: temperatureIndicator) => {
  const temperatureColor = changeTemperatureToColor(temperature);

  return (
    <div className="absolute flex items-center justify-center h-6 bottom-1 left-1 bg-gray-110 opacity-80 rounded-2xl w-14">
      <img src={temperatureColor} className="w-2 h-3 mr-1" />
      <span className="text-white text-Body1-M">{temperature}도</span>
    </div>
  );
};

export default TemperatureIndicator;
