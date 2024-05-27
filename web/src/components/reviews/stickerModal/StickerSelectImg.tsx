interface stickerSelectImg {
  sticker: string;
}

const StickerSelectImg = ({ sticker }: stickerSelectImg) => {
  return (
    <div className="flex justify-center w-full mb-4 h-28">
      {sticker.length > 0 ? <img src={sticker} className="w-28 h-28" /> : null}
    </div>
  );
};

export default StickerSelectImg;
