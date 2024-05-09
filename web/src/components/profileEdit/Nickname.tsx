import { type Dispatch, type SetStateAction } from 'react';

interface nickname {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
}

const Nickname = ({ name, setName }: nickname) => {
  return (
    <div className="flex flex-col items-center w-full mt-10">
      <span className="w-full text-Body3 pl-[5%] mb-2 text-gray-110">이름</span>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        className="h-12 pl-2 border-2 rounded-lg text-gray-110 text-Body3-M w-9/10 border-gray-30 focus:outline-orange-100"
      />
    </div>
  );
};

export default Nickname;
