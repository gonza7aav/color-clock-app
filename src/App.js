import { useState, useEffect } from 'react';
import Clock from './components/Clock';

const getTime = () => {
  let date = new Date();
  return {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    // milliseconds: date.getMilliseconds(),
  };
};

const App = () => {
  const [time, setTime] = useState(getTime());

  const changeBackground = ({ red, green, blue }) => {
    document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
  };

  const updateTime = () => {
    let now = getTime();
    setTime(now);
    changeBackground({
      red: now.hours,
      green: now.minutes,
      blue: now.seconds,
    });
  };

  useEffect(() => {
    // right after loading everything, update the clock
    updateTime();

    // the timeout will be executed in the beginning of the next second
    let now = new Date();
    let ms = now.getMilliseconds();
    setTimeout(() => {
      updateTime();

      // the interval will be executed every second passed
      setInterval(() => {
        updateTime();
      }, 1000);
    }, 1000 - ms);
  }, []);

  return (
    <div className='center'>
      <Clock time={time} />
    </div>
  );
};

export default App;
