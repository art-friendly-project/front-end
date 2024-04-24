import upIcon from 'assets/images/etc/upIcon.svg';
import downIcon from 'assets/images/etc/downIcon.svg';
import minusIcon from 'assets/images/etc/minusIcon.svg';

interface posterInfo {
  id: number;
  name: string;
  upAndDown: string;
}

const PosterInfo = ({ id, name, upAndDown }: posterInfo) => {
  const rank = (upAndDown: string) => {
    if (upAndDown[0] === '+') return upIcon;
    if (upAndDown[0] === '-') return downIcon;
    else return minusIcon;
  };
  return (
    <>
      <span className="ml-2 text-Headline">{`0${id}`}</span>
      <span className="ml-2 text-Body3-120">{name}</span>
      <div className="absolute flex right-5 ">
        <img src={rank(upAndDown)} />
        <span className="ml-1 text-Body2-M">{upAndDown[1]}</span>
      </div>
    </>
  );
};

export default PosterInfo;
