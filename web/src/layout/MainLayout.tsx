import Header from 'components/header/main/Header';
import NavigationBar from 'components/navigationBar/NavigationBar';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import isApp from 'utils/isApp';

const MainLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isApp()) {
      const modalClose = (e: MessageEvent<string>) => {
        const data: {
          url: string;
        } = JSON.parse(e.data);

        if (data.url === '/like || /profile') {
          navigate('/home');
        }
      };

      if (window.platform === 'android') {
        document.addEventListener('message', modalClose);
      }

      if (window.platform === 'ios') {
        window.addEventListener('message', modalClose);
      }

      return () => {
        if (window.platform === 'android') {
          document.removeEventListener('message', modalClose);
        }

        if (window.platform === 'ios') {
          window.removeEventListener('message', modalClose);
        }
      };
    }
  }, []);

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center w-full h-full overflow-y-scroll scrollbar-hide">
        <Outlet />
      </div>
      <NavigationBar />
    </>
  );
};

export default MainLayout;
