import api from 'api';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const code = searchParams.get('oneTimeUseCode');
  const isSignUp = searchParams.get('isSignUp');

  const fetchLogin = async () => {
    try {
      const response: fetchAuth = await api.get(`/oauth/token?code=${code}`);

      localStorage.setItem('accessToken', response.data.data.accessToken);
      localStorage.setItem('refreshToken', response.data.data.refreshToken);

      if (isSignUp === 'true') {
        navigate('/home');
      }

      if (isSignUp === 'false') {
        navigate('/terms-of-use');
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (code !== null) {
      void fetchLogin();
    }
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="relative w-16 h-16 border-8 border-orange-100 rounded-full animate-spin">
        <div className="absolute w-24 h-16 rotate-[-45deg] top-5 bg-white -right-9" />
      </div>
    </div>
  );
};

export default Login;
