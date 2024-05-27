interface pageIndicator {
  currentPage: number;
  MAX_PAGE: number;
}

const PageIndicator = ({ currentPage, MAX_PAGE }: pageIndicator) => {
  const pages = [0, 1, 2, 3, 4];
  const current = () => {
    if (MAX_PAGE <= 5) return pages[currentPage];

    if (MAX_PAGE > 5) {
      if (currentPage === 0 || currentPage === 1) return pages[currentPage];
      if (currentPage === MAX_PAGE - 2) return 3;
      if (currentPage === MAX_PAGE - 1) return 4;

      return 2;
    }
  };
  return (
    <div className="flex">
      {pages.map((page) => (
        <div
          key={page}
          className={`w-2 h-2 ml-1 rounded-full ${current() === page ? 'bg-orange-100' : 'bg-gray-20'}`}
        />
      ))}
    </div>
  );
};

export default PageIndicator;
