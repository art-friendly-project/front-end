import changeDegreeToColor from 'utils/changeDegreeToColor';

interface degreeIndicator {
  degree: string;
}

const DegreeIndicator = ({ degree }: degreeIndicator) => {
  const degreeColor = changeDegreeToColor(degree);

  return (
    <span
      className={`absolute bottom-0 text-Body1-M flex items-center justify-center h-6 w-14 rounded-2xl opacity-90 ${degreeColor}`}
    >
      {degree}
    </span>
  );
};

export default DegreeIndicator;
