interface posterImg {
  width: string;
  height: string;
  bgColor: string;
  image: string;
  rounded?: string;
}

const PosterImg = ({ width, height, bgColor, image, rounded }: posterImg) => {
  return (
    <img
      src={image}
      loading="lazy"
      className={`object-cover rounded-lg ${width} ${height} ${bgColor} ${rounded}`}
    />
  );
};

export default PosterImg;
