import edit from 'assets/images/etc/edit.svg';
import { useNavigate } from 'react-router-dom';

const EditBtn = () => {
  const navigate = useNavigate();
  return (
    <button
      className="absolute bottom-0 left-16"
      onClick={() => {
        navigate('/profile-edit');
      }}
    >
      <img src={edit} className="w-8 h-8" />
    </button>
  );
};

export default EditBtn;
