interface btnBasic {
  name: string;
  fn: () => void;
}

const BtnBasic = ({ name, fn }: btnBasic) => {
  return (
    <button className="h-12 bg-orange-100 rounded-lg w-9/10" onClick={fn}>
      <span className="text-white text-Subhead">{name}</span>
    </button>
  );
};

export default BtnBasic;
