const sliceStickers = (stickers: string[]) => {
  const arr = [];

  for (let i = 0; i < stickers.length; i = i + 8) {
    arr.push(stickers.slice(i, i + 8));
  }

  return arr;
};

export default sliceStickers;
