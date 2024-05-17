interface btnBasic {
  name: string;
  fn: () => void;
  disable: boolean;
  style?: string;
}

const BtnBasic = ({ name, fn, disable, style }: btnBasic) => {
  return (
    <div className={`flex justify-center w-full ${style}`}>
      <button
        className={`h-12 rounded-lg w-9/10 active:bg-orange-dark-100 ${disable ? 'bg-orange-50' : 'bg-orange-100'}`}
        onClick={fn}
        disabled={disable}
      >
        <span className="text-white text-Subhead">{name}</span>
      </button>
    </div>
  );
};

export default BtnBasic;
