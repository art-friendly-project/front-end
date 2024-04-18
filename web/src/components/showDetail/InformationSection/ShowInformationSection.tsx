import BtnAndRightArrow from 'components/common/BtnAndRightArrow';
import { type show } from '../posterSection/PosterSection';
import ShowInformationText from './ShowInformationText';
import ShowInformationTitle from './ShowInformationTitle';

interface showInformationSection {
  show: show;
}

const ShowInformationSection = ({ show }: showInformationSection) => {
  const btnHandler = () => {
    window.open(show.site);
  };

  return (
    <div className="flex flex-col mt-52">
      <ShowInformationTitle />
      <ShowInformationText
        showType={show.showType}
        place={show.place}
        location={show.location}
        phone={show.phone}
      />
      <div className="flex justify-center pb-10 mt-6 border-b-10 border-gray-00">
        <BtnAndRightArrow
          name="예매 사이트 바로가기"
          disable={false}
          fn={btnHandler}
        />
      </div>
    </div>
  );
};

export default ShowInformationSection;
