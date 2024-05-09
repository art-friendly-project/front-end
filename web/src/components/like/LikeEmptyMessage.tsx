interface likeEmptyMessage {
  text: string;
}

const LikeEmptyMessage = ({ text }: likeEmptyMessage) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full mt-8">
      <span className="text-gray-110 text-Body3">{text}</span>
    </div>
  );
};

export default LikeEmptyMessage;
