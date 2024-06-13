interface tasteTestProgessBar {
  currentQuestion: number;
}

const TasteTestProgessBar = ({ currentQuestion }: tasteTestProgessBar) => {
  const progess = `${(currentQuestion / 12) * 100}%`;

  return (
    <div className="absolute h-4 mt-2 top-16 w-9/10 bg-gray-00 rounded-2xl">
      <div
        className="h-4 duration-500 bg-orange-100 rounded-2xl"
        style={{ width: progess }}
      />
    </div>
  );
};

export default TasteTestProgessBar;
