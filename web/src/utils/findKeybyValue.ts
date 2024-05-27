import { stickerImgs } from 'assets/data/stickers';

const findKeyByValue = (value: string) => {
  return Object.keys(stickerImgs).find((key) => stickerImgs[key] === value);
};

export default findKeyByValue;
