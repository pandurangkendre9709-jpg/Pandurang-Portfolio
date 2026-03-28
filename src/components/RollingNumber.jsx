import { useEffect, useState } from "react";

function RollingNumber({ value }) {
  const decimals = value % 1 !== 0 ? 1 : 0;
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const duration = 1200;
    const steps = 40;
    const stepTime = duration / steps;
    let currentStep = 0;

    setDisplayValue(0);

    const interval = setInterval(() => {
      currentStep += 1;
      const progress = Math.min(currentStep / steps, 1);
      setDisplayValue(value * progress);

      if (progress >= 1) {
        clearInterval(interval);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [value]);

  return <span>{displayValue.toFixed(decimals)}</span>;
}

export default RollingNumber;
