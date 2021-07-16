const formatNumber = (n) => {
  if (n < 10) return `0${n}`;
  return `${n}`;
};

const Clock = ({ time }) => {
  const { hours: h, minutes: m, seconds: s } = time;

  const style = {
    padding: '0.25rem 0.5rem',
    fontSize: '10vw',
  };

  return (
    <p style={style}>
      {`${formatNumber(h)}:${formatNumber(m)}:${formatNumber(s)}`}
    </p>
  );
};

export default Clock;
