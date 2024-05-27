interface showDetailImg {
  imageUrl: string;
}

const ShowDetailImg = ({ imageUrl }: showDetailImg) => {
  return (
    <>
      <div className="absolute top-0 z-10 w-full h-64 bg-gradient-to-t from-neutral-900" />
      <img src={imageUrl} className="absolute top-0 object-cover w-full h-64" />
    </>
  );
};

export default ShowDetailImg;
