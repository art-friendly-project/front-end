import convertDegreeToColor from 'utils/convertDegreeToColor';

interface degreeIndicator {
  degree: string;
}

const DegreeIndicator = ({ degree }: degreeIndicator) => {
  const degreeColor = convertDegreeToColor(degree);

  return (
    <span
      className={`absolute bottom-0 flex items-center justify-center h-6 w-14 rounded-2xl opacity-90 ${degreeColor}`}
    >
      {degree}
    </span>
  );
};

export default DegreeIndicator;
