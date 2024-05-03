interface tasteTestProgessBar {
  currentQuestion: number;
}

const TasteTestProgessBar = ({ currentQuestion }: tasteTestProgessBar) => {
  const progess = `${(currentQuestion / 12) * 100}%`;

  return (
    <div className="flex justify-center">
      <div className="h-4 mt-2 w-9/10 bg-gray-00 rounded-2xl">
        <div
          className="h-4 duration-500 bg-orange-100 rounded-2xl"
          style={{ width: progess }}
        />
      </div>
    </div>
  );
};

export default TasteTestProgessBar;
