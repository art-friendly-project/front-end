import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Like = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/prepare-service');
  }, []);

  return <>Calendar</>;
};

export default Like;
