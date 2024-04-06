import PosterImg from 'components/common/PosterImg';
import PosterInfo from './PosterInfo';
import { useEffect, useRef } from 'react';

interface popularShow {
  id: number;
  name: string;
  image: string;
  upAndDown: string;
}

const PopularShow = ({ name, image, upAndDown, id }: popularShow) => {
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
  }, [showRef]);

  return (
    <button
      className="relative flex items-center px-4 py-2 mb-4 duration-1000 translate-y-[10px] opacity-0 rounded-xl shadow-custom2 w-9/10"
      ref={showRef}
    >
      <PosterImg
        width="w-16"
        height="h-16"
        bgColor="bg-gray-100"
        image={image}
      />
      <PosterInfo id={id} name={name} upAndDown={upAndDown} />
    </button>
  );
};

export default PopularShow;
