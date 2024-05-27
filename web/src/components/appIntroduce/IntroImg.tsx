interface introImg {
  img: string;
}

const IntroImg = ({ img }: introImg) => {
  return <img src={img} className="w-4/5 h-7/10 mt-[10%]" />;
};

export default IntroImg;
