interface review {
  image: string;
  idx: number;
}

const Review = ({ image, idx }: review) => {
  return (
    <button
      className={`mb-[5%] w-[30%] h-32 ${idx % 3 === 0 ? 'mr-[5%]' : ''} ${(idx - 1) % 3 === 0 ? 'mr-[5%]' : ''}`}
    >
      <img src={image} className="w-full h-full bg-cover rounded-2xl" />
    </button>
  );
};

export default Review;
