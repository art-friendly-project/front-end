import upIcon from 'assets/images/etc/upIcon.svg';
import downIcon from 'assets/images/etc/downIcon.svg';
import minusIcon from 'assets/images/etc/minusIcon.svg';

interface posterInfo {
  idx: number;
  title: string;
  rankShift: string;
}

const PosterInfo = ({ idx, title, rankShift }: posterInfo) => {
  const ranking = (rank: string | number) => {
    if (typeof rank === 'number') {
      if (rank > 0) return upIcon;
      if (rank < 0) return downIcon;
      else return minusIcon;
    } else return minusIcon;
  };

  return (
    <>
      <span className="ml-2 text-Headline">{`0${idx + 1}`}</span>
      <span
        className="w-3/5 ml-2 truncate text-Body3-120 text-start"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div className="absolute flex right-5 ">
        <img src={ranking(rankShift)} />
        <span className="ml-1 text-Body2-M">
          {typeof rankShift === 'string' ? '' : rankShift}
        </span>
      </div>
    </>
  );
};

export default PosterInfo;
