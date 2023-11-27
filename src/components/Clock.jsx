const Clock = ({ time }) => {
  const style = {
    padding: '0.25rem 0.5rem',
    fontSize: '10vw',
  };

  return (
    <p style={style}>
      {`${formatNumber(time.hours)}:${formatNumber(time.minutes)}:${formatNumber(time.seconds)}`}
    </p>
  );
};

const formatNumber = (n) => n < 10 ? `0${n}` : `${n}`;

export default Clock;
