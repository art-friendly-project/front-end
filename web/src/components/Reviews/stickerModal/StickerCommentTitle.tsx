interface stickerCommentTitle {
  sticker: string;
}

const StickerCommentTitle = ({ sticker }: stickerCommentTitle) => {
  return (
    <div className="relative flex flex-col w-full pl-[5%] mt-14">
      <span className="text-gray-110 text-Headline">댓글 남기기</span>
      <span className="mt-2 text-gray-100 text-Body3-M">
        담벼락에 댓글을 남겨보세요!
      </span>
      <img src={sticker} className="absolute w-20 h-20 -top-2 right-[5%]" />
    </div>
  );
};

export default StickerCommentTitle;
