import * as React from 'react';

type useRefType = () => void | null;

export const useInterval = (callback: () => void, delay: number) => {
    const savedCallback = React.useRef<useRefType>(callback);
  
    React.useEffect(() => {
      savedCallback.current = callback;
    });
  
    React.useEffect(() => {
      function tick() {
        savedCallback.current();
      }
  
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }, [delay]);
}