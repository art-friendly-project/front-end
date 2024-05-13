import { type Dispatch, type SetStateAction, type ChangeEvent } from 'react';

interface reviewPostTitle {
  titleText: string;
  setTitleText: Dispatch<SetStateAction<string>>;
}

const ReviewPostTitle = ({ titleText, setTitleText }: reviewPostTitle) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputText = e.target.value;
    if (inputText.length <= 20) {
      setTitleText(inputText);
    }
  };

  return (
    <div className="flex flex-col items-center mt-[8%] mb-6">
      <input
        placeholder="담벼락 제목"
        value={titleText}
        onChange={handleChange}
        className="h-12 pl-2 text-Display1 w-9/10 rounded-xl text-gray-110 focus:outline-orange-100"
      ></input>
      <div className="flex justify-end w-full pr-6">
        <span className="text-Body2-M text-gray-60">{`${titleText.length}/20자`}</span>
      </div>
    </div>
  );
};

export default ReviewPostTitle;
