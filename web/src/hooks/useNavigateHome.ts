import { useEffect } from 'react';
import { type NavigateFunction } from 'react-router-dom';
import isApp from 'utils/isApp';

const useNavigateHome = (navigate: NavigateFunction) => {
  useEffect(() => {
    if (isApp()) {
      const navigation = (e: MessageEvent<string>) => {
        const data: { navigate: string } = JSON.parse(e.data);
        navigate(data.navigate);
      };

      if (window.platform === 'android') {
        document.addEventListener('message', navigation);
      }

      if (window.platform === 'ios') {
        window.addEventListener('message', navigation);
      }

      return () => {
        if (window.platform === 'android') {
          document.removeEventListener('message', navigation);
        }
        if (window.platform === 'ios') {
          window.removeEventListener('message', navigation);
        }
      };
    }
  }, []);
};

export default useNavigateHome;
