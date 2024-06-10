import { RiInstagramFill } from 'react-icons/ri';

const Sns = () => {
  return (
    <a
      className="flex items-center mt-4 mb-2 text-Body1"
      href="https://www.instagram.com/art_friendly_?igsh=MTAxOGU0ZzQ5b3duMQ=="
      target="_blank"
      rel="noreferrer"
    >
      <RiInstagramFill />
      <span className="ml-1">인스타그램</span>
    </a>
  );
};

export default Sns;
