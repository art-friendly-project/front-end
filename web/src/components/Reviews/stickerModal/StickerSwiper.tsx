import { Grid, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/grid';
import 'style/swiper.css';
import stickers from 'assets/data/stickers';
import StickerImg from './StickerImg';
import { type Dispatch, type SetStateAction } from 'react';

interface stickerSwiper {
  setSticker: Dispatch<SetStateAction<string>>;
}

const StickerSwiper = ({ setSticker }: stickerSwiper) => {
  return (
    <Swiper
      className="stickerSwiper"
      modules={[Pagination, Scrollbar, Grid]}
      spaceBetween={20}
      slidesPerView={4}
      grid={{
        rows: 2,
      }}
      pagination={{ clickable: false, dynamicBullets: true }}
      scrollbar={{ draggable: true, hide: true }}
    >
      {stickers.map((sticker) => (
        <SwiperSlide key={sticker} className="stickerSlide">
          <StickerImg sticker={sticker} setSticker={setSticker} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default StickerSwiper;
