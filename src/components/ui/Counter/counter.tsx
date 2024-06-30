import { useEffect, useMemo, useRef } from 'react';
import s from './counter.module.styl';

interface ICounter {
  style?: 'primary' | 'secondary';
  size?: '8' | '12' | '16' | '20' | '24';
  stroke?: boolean;
  quantity?: string;
  pulse?: boolean;
  strokeColor?: string;
}

export const Counter = ({
  style = 'primary',
  size = '8',
  stroke,
  quantity,
  pulse,
  strokeColor,
}: ICounter) => {
  const radius = useMemo(() => +size / 1.9, [size]);

  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (quantity?.length === 1) {
      if (counterRef.current) {
        counterRef.current.style.height = `${radius}px`;
        counterRef.current.style.width = `${radius}px`;
      }
    }
  }, [quantity?.length, radius]);

  return (
    <>
      <div
        className={
          s.containter +
          ' ' +
          s[style] +
          ' ' +
          s[size] +
          (stroke ? ' ' + s.stroke : '')
        }
      >
        <div
          ref={counterRef}
          className={s.counter}
          style={{
            borderColor: strokeColor,
          }}
        >
          {size !== '8' && size !== '12' && (
            <label
              style={{
                fontSize:
                  quantity && quantity.length > 2
                    ? `${radius / 1.3}px`
                    : `${radius}px`,
              }}
            >
              {quantity && quantity.length > 2 ? '99+' : quantity}
            </label>
          )}
        </div>
        {pulse && <div className={s.pulse + ' ' + s[style]}> </div>}
      </div>
    </>
  );
};
