interface posterImg {
  width: string;
  height: string;
  bgColor: string;
  image: string;
}

const PosterImg = ({ width, height, bgColor, image }: posterImg) => {
  return (
    <img
      src={image}
      loading="lazy"
      className={`object-cover rounded-lg ${width} ${height} ${bgColor}`}
    />
  );
};

export default PosterImg;
