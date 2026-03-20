function RollingNumber({ value }) {
  return <span>{value.toFixed(value % 1 !== 0 ? 1 : 0)}</span>;
}

export default RollingNumber;
