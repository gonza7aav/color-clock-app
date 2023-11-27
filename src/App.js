import { useState, useEffect } from 'react';
import Clock from './components/Clock';

const App = () => {
  const [time, setTime] = useState(getTime());

  const updateTime = () => {
    const now = getTime();
    setTime(now);
    document.body.style.backgroundColor = `rgb(${now.hours},${now.minutes},${now.seconds})`;
  };

  useEffect(() => {
    // right after loading everything, update the clock
    updateTime();

    // the timeout will be executed in the beginning of the next second
    const now = new Date();
    setTimeout(() => {
      updateTime();

      // the interval will be executed every second passed
      setInterval(updateTime, 1000);
    }, 1000 - now.getMilliseconds());
  }, []);

  return (
    <div className='center'>
      <Clock time={time} />
    </div>
  );
};

const getTime = () => {
  const now = new Date();

  return {
    hours: now.getHours(),
    minutes: now.getMinutes(),
    seconds: now.getSeconds(),
  };
};

export default App;
