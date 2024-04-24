interface introduce {
  introduce: string;
}

const Introduce = ({ introduce }: introduce) => {
  return <span className="mt-6 text-Body3-M text-gray-110">{introduce}</span>;
};

export default Introduce;
