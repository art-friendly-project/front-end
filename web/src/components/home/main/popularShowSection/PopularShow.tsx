import PosterImg from 'components/common/PosterImg';
import PosterInfo from './PosterInfo';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

interface popularShow {
  id: number;
  idx: number;
  title: string;
  imageUrl: string;
  rankShift: string;
}

const PopularShow = ({ id, idx, title, imageUrl, rankShift }: popularShow) => {
  const navigate = useNavigate();
  const showRef = useRef<HTMLButtonElement>(null);

  const observer = new IntersectionObserver((entries) => {
    const target = entries[0].target as HTMLElement;

    if (entries[0].isIntersecting) {
      target.style.opacity = '1';
      target.style.transform = 'translateY(-10px)';
    } else {
      target.style.opacity = '0';
      target.style.transform = 'translateY(10px)';
    }
  });

  useEffect(() => {
    if (showRef.current !== null) {
      observer.observe(showRef.current);
    }
  }, []);

  return (
    <button
      className="relative active:bg-gray-00 active:duration-0 flex items-center px-4 py-2 mb-4 duration-1000 translate-y-[10px] opacity-0 rounded-xl shadow-custom2 w-9/10"
      ref={showRef}
      onClick={() => {
        navigate(`/shows/${id}`);
      }}
    >
      <PosterImg posterStyle="w-16 h-16" image={imageUrl} />
      <PosterInfo idx={idx} title={title} rankShift={rankShift} />
    </button>
  );
};

export default PopularShow;
