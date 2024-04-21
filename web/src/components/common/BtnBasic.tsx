interface btnBasic {
  name: string;
  fn: () => void;
  disable: boolean;
}

const BtnBasic = ({ name, fn, disable }: btnBasic) => {
  return (
    <div className="flex justify-center w-full">
      <button
        className={`h-12 rounded-lg w-9/10 ${disable ? 'bg-orange-50' : 'bg-orange-100'}`}
        onClick={fn}
        disabled={disable}
      >
        <span className="text-white text-Subhead">{name}</span>
      </button>
    </div>
  );
};

export default BtnBasic;
