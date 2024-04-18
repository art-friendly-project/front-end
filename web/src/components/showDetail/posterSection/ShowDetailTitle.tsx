interface showDetailTitle {
  showType: string;
  name: string;
  term: string;
}

const ShowDetailTitle = ({ showType, name, term }: showDetailTitle) => {
  return (
    <div className="absolute z-20 flex flex-col text-white top-36 left-6">
      <span className="text-Body3">{showType}</span>
      <span className="mt-2 text-Display1">{name}</span>
      <span className="mt-1 text-Subhead-M">{term}</span>
    </div>
  );
};

export default ShowDetailTitle;
