interface introBody {
  introduce: string;
}

const IntroBody = ({ introduce }: introBody) => {
  return (
    <p className="px-[5%] mt-4 break-all text-Body3-M leading-relaxed">
      {introduce}
    </p>
  );
};

export default IntroBody;
