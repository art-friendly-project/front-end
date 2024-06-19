import { type Dispatch, type SetStateAction } from 'react';

interface nickname {
  nickName: string;
  setNickName: Dispatch<SetStateAction<string>>;
}

const Nickname = ({ nickName, setNickName }: nickname) => {
  return (
    <div className="flex flex-col items-center w-full mt-10">
      <span className="w-full text-Body3 pl-[5%] mb-2 text-gray-110">
        닉네임
      </span>
      <input
        type="text"
        value={nickName}
        onChange={(e) => {
          setNickName(e.target.value);
        }}
        className="h-12 pl-2 border-2 rounded-lg text-gray-110 text-Body3-M w-9/10 border-gray-30 focus:outline-orange-100"
      />
    </div>
  );
};

export default Nickname;
