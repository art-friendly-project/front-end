interface introduce {
  selfIntro: string | null;
}

const Introduce = ({ selfIntro }: introduce) => {
  return (
    <p className="mt-6 whitespace-pre-line text-Body3-M text-gray-110">
      {selfIntro}
    </p>
  );
};

export default Introduce;
