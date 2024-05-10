const LoadingSpineer = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="relative w-16 h-16 border-8 border-orange-100 rounded-full animate-spin">
        <div className="absolute w-24 h-16 rotate-[-45deg] top-5 bg-white -right-9" />
      </div>
    </div>
  );
};

export default LoadingSpineer;
