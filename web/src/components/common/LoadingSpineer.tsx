const LoadingSpineer = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex items-center justify-center w-16 h-16 rounded-full animate-spin bg-gradient-to-r from-orange-100">
        <div className="w-12 h-12 bg-white rounded-full" />
      </div>
    </div>
  );
};

export default LoadingSpineer;
