interface filterSelectModalTitle {
  title1: string;
  title2: string;
}

const FilterSelectModalTitle = ({ title1, title2 }: filterSelectModalTitle) => {
  return (
    <>
      <span className="text-Headline">{title1}</span>
      <span className="mt-1 mb-4 text-Body3-M">{title2}</span>
    </>
  );
};

export default FilterSelectModalTitle;
