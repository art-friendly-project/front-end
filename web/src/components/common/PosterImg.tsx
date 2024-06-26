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
      className={`object-cover rounded-lg border border-gray-10 ${width} ${height} ${bgColor} ${rounded}`}
    />
  );
};

export default PosterImg;
