import { type ChangeEvent, type Dispatch, type SetStateAction } from 'react';

interface stickerCommentText {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
}

const StickerCommentText = ({ text, setText }: stickerCommentText) => {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = e.target.value;
    if (inputText.length <= 40) {
      setText(inputText);
    }
  };

  return (
    <>
      <textarea
        className="pt-3 pl-3 mt-6 border-2 h-36 border-gray-30 w-9/10 rounded-xl focus:outline-orange-100 text-Body3-M"
        placeholder="스티커와 함께 짧은 글을 남겨보세요"
        value={text}
        onChange={handleChange}
      />
      <div className="flex justify-end w-full pr-5">
        <span className="text-Body2-M text-gray-60">{`${text.length}/40자`}</span>
      </div>
    </>
  );
};

export default StickerCommentText;
