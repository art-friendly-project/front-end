import { gallerys } from 'assets/data/gallerys';
import BackBtn from 'components/gallery/BackBtn';
import InfoSection from 'components/gallery/infoSection/InfoSection';
import IntroSection from 'components/gallery/introSection/IntroSection';
import MainSection from 'components/gallery/mainSection/MainSection';
import { useParams, useSearchParams } from 'react-router-dom';

const Gallery = () => {
  const id = Number(useParams().id);
  const [searchParams] = useSearchParams();

  const firstLocation = String(searchParams.get('f'));
  const secondLocation = String(searchParams.get('s'));

  const gallery = gallerys[firstLocation][secondLocation][id - 1];

  return (
    <div className="w-full h-full pb-10 overflow-y-scroll bg-white scrollbar-hide">
      <BackBtn />
      <MainSection
        imgUrl={gallery.imgUrl}
        name={gallery.name}
        location={gallery.location}
      />
      <InfoSection
        sort={gallery.sort}
        location={gallery.location}
        detailLocation={gallery.detailLocation}
        phone={gallery.phone}
        link={gallery.link}
      />
      <IntroSection introduce={gallery.introduce} />
    </div>
  );
};

export default Gallery;
