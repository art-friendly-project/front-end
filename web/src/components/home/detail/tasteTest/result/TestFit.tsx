interface testFit {
  title1: string;
  title2: string;
  image: string;
}

const TestFit = ({ title1, title2, image }: testFit) => {
  return (
    <div className="flex items-center h-24 pl-6 mt-4 border rounded-xl w-9/10 border-gray-30">
      <img src={image} className="w-16 h-16" />
      <div className="flex flex-col ml-4">
        <span className="mt-1 text-Body3-M">{title1}</span>
        <span className="mt-1 text-Subhead">{title2}</span>
      </div>
    </div>
  );
};

export default TestFit;
