import { type ChangeEvent, type Dispatch, type SetStateAction } from 'react';

interface reviewPostContent {
  contentText: string;
  setContentText: Dispatch<SetStateAction<string>>;
}

const ReviewPostContent = ({
  contentText,
  setContentText,
}: reviewPostContent) => {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = e.target.value;
    if (inputText.length <= 200) {
      setContentText(inputText);
    }
  };

  return (
    <div className="flex flex-col items-center mb-16">
      <textarea
        placeholder="전시/행사에 다녀온 소감을 다른 사람과 나누어봐요"
        value={contentText}
        onChange={handleChange}
        className="pt-4 pl-4 border-2 w-9/10 h-108 border-gray-30 rounded-xl text-gray-110 text-Body3-M focus:outline-orange-100"
      />
      <div className="flex justify-end w-full pr-6">
        <span className="text-Body2-M text-gray-60">{`${contentText.length}/200자`}</span>
      </div>
    </div>
  );
};

export default ReviewPostContent;
