import { type Dispatch, type SetStateAction } from 'react';

interface duration {
  menu: string;
  name: string;
  duration: string;
  setDuration: Dispatch<SetStateAction<string>>;
}

const Duration = ({ menu, name, duration, setDuration }: duration) => {
  return (
    <button
      className={`px-1 mr-3 pb-1 ${name === duration ? 'border-b-4 border-orange-100' : ''}`}
      onClick={() => {
        setDuration(name);
      }}
    >
      <span
        className={`text-Body3 ${name === duration ? 'text-gray-110' : 'text-gray-50'}`}
      >
        {menu}
      </span>
    </button>
  );
};

export default Duration;
