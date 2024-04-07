import upIcon from '../../../../assets/etc/upIcon.svg';
import downIcon from '../../../../assets/etc/downIcon.svg';

interface posterInfo {
  id: number;
  name: string;
  upAndDown: string;
}

const PosterInfo = ({ id, name, upAndDown }: posterInfo) => {
  return (
    <>
      <span className="ml-2 text-Headline">{`0${id}`}</span>
      <span className="ml-2 text-Body3-120">{name}</span>
      <div className="absolute flex right-5 ">
        <img src={upAndDown[0] === '+' ? upIcon : downIcon} />
        <span className="ml-1 text-Body2-M">{upAndDown[1]}</span>
      </div>
    </>
  );
};

export default PosterInfo;
