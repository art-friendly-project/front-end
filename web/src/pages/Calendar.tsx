import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Calendar = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/prepare-service');
  }, []);

  return <>Calendar</>;
};

export default Calendar;
