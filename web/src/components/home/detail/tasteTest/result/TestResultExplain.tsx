interface testResultExplain {
  explain: string;
}

const TestResultExplain = ({ explain }: testResultExplain) => {
  return (
    <div className="flex flex-col px-6 pb-10 mt-8 border-b-10 text-Body3-M border-gray-10">
      <span className="leading-loose">{explain}</span>
    </div>
  );
};

export default TestResultExplain;
