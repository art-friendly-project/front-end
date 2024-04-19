interface pageIndicator {
  currentPage: number;
  MAX_PAGE: number;
}

const PageIndicator = ({ currentPage }: pageIndicator) => {
  const pages = [0, 1, 2, 3, 4];
  return (
    <div className="flex">
      {pages.map((page) => (
        <div
          key={page}
          className={`w-2 h-2 ml-1 rounded-full ${currentPage === page ? 'bg-orange-100' : 'bg-gray-20'}`}
        />
      ))}
    </div>
  );
};

export default PageIndicator;
