import { useState, useEffect } from 'react';
import Clock from './components/Clock';

const getTime = () => {
  let date = new Date();
  return {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  };
};

const changeBackground = ({ red, green, blue }) => {
  document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
};

const App = () => {
  const [time, setTime] = useState(getTime());

  const update = () => {
    let now = getTime();
    setTime(now);

    changeBackground({
      red: now.hours,
      green: now.minutes,
      blue: now.seconds,
    });
  };

  useEffect(() => {
    let now = new Date();
    let ms = now.getMilliseconds();

    // with this the interval start at 0 milliseconds aprox.
    setTimeout(() => {
      setInterval(() => {
        update();
      }, 1000);
    }, 1000 - ms);
  }, []);

  return (
    <div className='center'>
      <Clock Time={time} />
    </div>
  );
};

export default App;
