import edit from 'assets/images/etc/edit.svg';
import { type ChangeEvent, type Dispatch, type SetStateAction } from 'react';

interface imgEditBtn {
  setFile: Dispatch<SetStateAction<File | undefined>>;
  setImageUrl: Dispatch<SetStateAction<string>>;
}

const ImgEditBtn = ({ setFile, setImageUrl }: imgEditBtn) => {
  const onChangeFiles = (e: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();

    const files = e.target.files;

    if (files !== null) {
      const file = files[0];

      setFile(file);

      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
    }
  };

  return (
    <label>
      <input className="hidden" type="file" onChange={onChangeFiles} />
      <img
        src={edit}
        className="absolute bottom-0 w-8 h-8 left-16 hover:cursor-pointer"
      />
    </label>
  );
};

export default ImgEditBtn;
