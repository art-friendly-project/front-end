import { type ChangeEvent, type Dispatch, type SetStateAction } from 'react';

interface reviewPostContent {
  body: string;
  setBody: Dispatch<SetStateAction<string>>;
}

const ReviewPostContent = ({ body, setBody }: reviewPostContent) => {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = e.target.value;
    if (inputText.length <= 200) {
      setBody(inputText);
    }
  };

  return (
    <div className="flex flex-col items-center mb-[10%]">
      <textarea
        placeholder="전시/행사에 다녀온 소감을 다른 사람과 나누어봐요"
        value={body}
        onChange={handleChange}
        className="pt-4 pl-4 border-2 w-9/10 h-80 border-gray-30 rounded-xl text-gray-110 text-Body3-M focus:outline-orange-100"
      />
      <div className="flex justify-end w-full pr-6">
        <span className="text-Body2-M text-gray-60">{`${body.length}/200자`}</span>
      </div>
    </div>
  );
};

export default ReviewPostContent;
