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
      'eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJVU0VSIl0sImF1ZCI6IjciLCJpYXQiOjE3MjM1MTY1MDEsImV4cCI6MTcyMzU2MTE5OX0.V8puNYuynAeUo3eNiJmFiMr31vHpUnhDCuGL3RhdBGSl8NEUkyl2X42jo-G5mW8WGkiW_AJKHETAOGbid_7O3Q',
    );
    localStorage.setItem(
      'refreshToken',
      'eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJVU0VSIl0sImF1ZCI6IjciLCJpYXQiOjE3MjM1MTY1MDEsImV4cCI6MTcyMzU2MTE5OX0.V8puNYuynAeUo3eNiJmFiMr31vHpUnhDCuGL3RhdBGSl8NEUkyl2X42jo-G5mW8WGkiW_AJKHETAOGbid_7O3Q',
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
