interface posterImg {
  image: string;
  posterStyle?: string;
}

const PosterImg = ({ image, posterStyle }: posterImg) => {
  return (
    <img
      src={image}
      className={`object-cover rounded-lg border border-gray-10 bg-gray-100 ${posterStyle}`}
    />
  );
};

export default PosterImg;
