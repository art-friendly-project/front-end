interface introImg {
  img: string;
}

const IntroImg = ({ img }: introImg) => {
  return <img src={img} className="h-3/5 w-7/10 mt-[5%]" />;
};

export default IntroImg;
