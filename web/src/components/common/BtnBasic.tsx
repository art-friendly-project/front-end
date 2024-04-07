import { useNavigate } from 'react-router-dom';

interface btnBasic {
  name: string;
  endpoint: string;
}

const BtnBasic = ({ name, endpoint }: btnBasic) => {
  const navigation = useNavigate();
  return (
    <button
      className="h-12 bg-orange-100 rounded-lg w-9/10"
      onClick={() => {
        navigation(endpoint);
      }}
    >
      <span className="text-white text-Subhead">{name}</span>
    </button>
  );
};

export default BtnBasic;
