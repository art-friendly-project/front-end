import { type RefObject, useEffect, useState } from 'react';

const useScrollHeight = (ref: RefObject<HTMLDivElement>) => {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    if (ref.current !== null) {
      setScrollHeight(ref.current.scrollHeight);
    }
  }, [ref]);

  return scrollHeight;
};

export default useScrollHeight;
