import React, { useEffect, useState } from 'react';
import s from './Counter.module.scss';
import { CounterInterface } from '../../types/counter.interface';

export const Counter: React.FC<CounterInterface> = ({ val, type, time, descr }) => {
  const [currVal, setCurrVal] = useState(0);

  useEffect(() => {
    currVal !== val && setTimeout(setCurrVal, time, currVal + 1);
  }, [currVal]);

  return (
    <div className={s.counter}>
      <p className={s.value}>{currVal}{type}</p>
      <p className={s.type}>{descr}</p>
    </div>
  )
}