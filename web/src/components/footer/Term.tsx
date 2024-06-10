interface term {
  title: string;
  idx: number;
}

const Term = ({ title, idx }: term) => {
  return (
    <span
      className={`text-Body1-M ${idx < 2 ? 'border-r border-r-gray-40 pr-2 mr-2' : ''}`}
    >
      {title}
    </span>
  );
};

export default Term;
