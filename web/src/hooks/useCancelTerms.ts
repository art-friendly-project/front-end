import { useEffect } from 'react';
import { useDeleteMember } from './query/useDeleteMember';
import { type NavigateFunction } from 'react-router-dom';

const useCancelTerms = (navigate: NavigateFunction) => {
  const mutate = useDeleteMember();

  useEffect(() => {
    const accessPermissions = (e: MessageEvent<string>) => {
      const data: {
        type: string;
      } = JSON.parse(e.data);

      if (data.type === 'CANCEL_TERMS') {
        mutate();
        navigate('/kakao-login');
      }
    };

    if (window.platform === 'android') {
      document.addEventListener('message', accessPermissions);
    }

    if (window.platform === 'ios') {
      window.addEventListener('message', accessPermissions);
    }

    return () => {
      if (window.platform === 'android') {
        document.removeEventListener('message', accessPermissions);
      }

      if (window.platform === 'ios') {
        window.removeEventListener('message', accessPermissions);
      }
    };
  }, []);
};

export default useCancelTerms;
