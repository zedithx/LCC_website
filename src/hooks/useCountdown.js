import { useEffect, useState } from 'react';

const calculateInitialCountDown = (targetDate) => {
  const countDownDate = new Date(targetDate).getTime();
  return countDownDate - new Date().getTime();
};

const useCountdown = (targetDate) => {
  const [countDown, setCountDown] = useState(calculateInitialCountDown(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(prevCountDown => {
        if (prevCountDown <= 1000) {
          clearInterval(interval);
          return 0;
        }
        return prevCountDown - 1000;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

export { useCountdown };
