interface introduce {
  selfIntro: string | null;
}

const Introduce = ({ selfIntro }: introduce) => {
  return <span className="mt-6 text-Body3-M text-gray-110">{selfIntro}</span>;
};

export default Introduce;
