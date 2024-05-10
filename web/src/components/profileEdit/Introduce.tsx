import { type ChangeEvent, type Dispatch, type SetStateAction } from 'react';

interface introduce {
  intro: string;
  setIntro: Dispatch<SetStateAction<string>>;
}

const Introduce = ({ intro, setIntro }: introduce) => {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = e.target.value;
    if (inputText.length <= 40) {
      setIntro(inputText);
    }
  };

  return (
    <div className="flex flex-col items-center w-full mt-10">
      <span className="w-full text-Body3 pl-[5%] mb-2 text-gray-110">
        소개글
      </span>
      <textarea
        value={intro}
        onChange={handleChange}
        className="h-24 pt-2 pl-2 border-2 rounded-lg text-gray-110 text-Body3-M w-9/10 border-gray-30 focus:outline-orange-100"
      />
      <span className="w-full text-Body2-M text-gray-60 text-end pr-[5%] mt-2">
        {`${intro.length}/40자`}
      </span>
    </div>
  );
};

export default Introduce;
