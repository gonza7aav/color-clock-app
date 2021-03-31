const formatNumber = (n) => {
  if (n < 10) return `0${n}`;
  return `${n}`;
};

const Clock = ({ Time }) => {
  const { hours: h, minutes: m, seconds: s } = Time

  return (
    <p className='Clock'>
      {`${formatNumber(h)}:${formatNumber(m)}:${formatNumber(s)}`}
    </p>
  )
}

export default Clock