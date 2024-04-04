interface btnBasic {
  name: string;
}

const BtnBasic = ({ name }: btnBasic) => {
  return (
    <button className="h-12 bg-orange-100 rounded-lg w-9/10">
      <span className="text-white text-Subhead">{name}</span>
    </button>
  );
};

export default BtnBasic;
