interface showDetailImg {
  image: string;
}

const ShowDetailImg = ({ image }: showDetailImg) => {
  return (
    <>
      <div className="absolute top-0 z-10 w-full h-64 bg-gradient-to-t from-neutral-900" />
      <img src={image} className="absolute top-0 object-cover w-full h-64" />
    </>
  );
};

export default ShowDetailImg;
