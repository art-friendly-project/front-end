import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/prepare-service');
  }, []);

  return <>Profile</>;
};

export default Profile;
