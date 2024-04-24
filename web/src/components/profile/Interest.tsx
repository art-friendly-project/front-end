interface interest {
  interest: string;
}

const Interest = ({ interest }: interest) => {
  return (
    <span className="flex items-center justify-center h-10 px-4 mr-2 shrink-0 rounded-3xl text-Body2 text-gray-110 bg-gray-00">
      {interest}
    </span>
  );
};

export default Interest;
