interface prop {
  name: string;
  fn: () => void;
  disable?: boolean;
  style?: string;
}

const BasicBtn = ({ name, fn, disable = false, style }: prop) => {
  return (
    <div
      className={`flex justify-center h-14 items-center w-full bg-white ${style}`}
    >
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

export default BasicBtn;
