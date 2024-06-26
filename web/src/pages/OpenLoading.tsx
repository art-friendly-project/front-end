import LodingAnimationLogo from 'components/loading/LodingAnimationLogo';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OpenLoading = () => {
  const [disappear, setDisappearLogo] = useState(false);
  const accessToken = localStorage.getItem('accessToken');

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem(
      'accessToken',
      'eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJVU0VSIl0sImF1ZCI6IjQiLCJpYXQiOjE3MTkzNjEwNDUsImV4cCI6MTcxOTQxMzk5OX0.GXrl3HVIuZ1tSiogNUDXjBZEDGDko7mrBZhebcQmUwMcS4nEMe6m_6CxMpcK8CCmtxNfaTBgYAuZ4R0dlV4lRw',
    );
    localStorage.setItem(
      'refreshToken',
      'eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE3MTkzNjEwNDUsImV4cCI6MTcyMTk1MzA0NX0.4eE6AlC-Y6BwNmBHeRQjnlVzOcWIaT22J29exsYJhF7jcu8Uhd2ZqrcMk0ZxWZTJm4ReUtEukD0Ge9nMzHen9g',
    );
    setTimeout(() => {
      setDisappearLogo(true);
    }, 2500);

    setTimeout(() => {
      if (accessToken !== null) {
        navigate('/home');
        return;
      }

      navigate('/introduce');
    }, 2000);
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-full">
      <LodingAnimationLogo disappear={disappear} />
    </div>
  );
};

export default OpenLoading;
