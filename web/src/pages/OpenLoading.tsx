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
      'eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJVU0VSIl0sImF1ZCI6IjQiLCJpYXQiOjE3MTkyNzM5ODQsImV4cCI6MTcxOTMyNzU5OX0.hPDjd8Fk0xS0B5ycPj9_Foy4UJ2QoRrh1ad8g9lyBsTrnuMPXetYoDaDuH_fAbM7aVG2IvW3oJDYBUMLg7HmBg',
    );
    localStorage.setItem(
      'refreshToken',
      'eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE3MTkyNzM5ODQsImV4cCI6MTcyMTg2NTk4NH0.1Cu3yqAajIFEj1jaXrtdWSk3JIvRXrQMYAxhfkg0U0qzKe_CM_k7uWAg4-DiZuQsqJzbcJN4_AHmmacXvexzyA',
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
