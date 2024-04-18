interface tasteTestTitle {
  currentQuestion: number;
  question: string;
}

const TasteTestTitle = ({ currentQuestion, question }: tasteTestTitle) => {
  return (
    <div className="flex flex-col pl-6 mt-10">
      <span className="text-Display2">{`Q${currentQuestion}`}</span>
      <span className="w-11/12 mt-10 whitespace-pre-wrap text-Subhead-M">
        {question}
      </span>
    </div>
  );
};

export default TasteTestTitle;
