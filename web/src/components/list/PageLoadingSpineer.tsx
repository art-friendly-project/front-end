interface pageLoadingSpineer {
  style?: string;
}

const PageLoadingSpineer = ({ style }: pageLoadingSpineer) => {
  return (
    <div
      className={`flex items-center justify-center w-full h-full mb-10 ${style}`}
    >
      <div className="flex items-center justify-center w-6 h-6 rounded-full animate-spin bg-gradient-to-r from-orange-100">
        <div className="w-4 h-4 bg-white rounded-full" />
      </div>
    </div>
  );
};

export default PageLoadingSpineer;
