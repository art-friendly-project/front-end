interface stickerSelectImg {
  sticker: string;
}

const StickerSelectImg = ({ sticker }: stickerSelectImg) => {
  return (
    <div className="flex justify-center w-full h-24 mt-4">
      {sticker.length > 0 ? <img src={sticker} className="w-24 h-24" /> : null}
    </div>
  );
};

export default StickerSelectImg;
