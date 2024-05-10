import edit from 'assets/images/etc/edit.svg';

const ImgEditBtn = () => {
  return (
    <button className="absolute bottom-0 left-16">
      <img src={edit} className="w-8 h-8" />
    </button>
  );
};

export default ImgEditBtn;
