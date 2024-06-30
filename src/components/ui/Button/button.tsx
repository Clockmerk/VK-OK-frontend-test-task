import React from 'react';
import s from './button.module.styl';

interface IButton {
  label?: string;
  style?: 'primary' | 'secondary';
  size?: '28' | '36' | '56';
  state?: 'enabled' | 'pressed' | 'loading' | 'disabled';
  counter?: boolean;
  focused?: boolean;
  children?: React.ReactNode;
}

export const Button = ({
  label = 'button',
  style = 'primary',
  size = '28',
  state,
  counter,
  focused,
  children,
}: IButton) => {

  return (
    <button
      className={
        s.button +
        ' ' +
        s[style] +
        ' ' +
        s[size] +
        ' ' +
        (state === 'pressed' ? s[state] : '') +
        ' ' +
        (focused ? s.focused : '')
      }
      disabled={state === 'disabled'}
    >
      {state === 'loading' && (
        <div
          className={s.loader}
          style={{ height: `${+size / 2}px`, width: `${+size / 2}px` }}
        />
      )}
      {state !== 'loading' && (
        <label style={{ fontSize: `${+size / 2}px` }}>{label}</label>
      )}
      {counter &&
        state !== 'loading' &&
        children &&
        React.Children.count(children) > 0 &&
        React.Children.toArray(children)[0]}
    </button>
  );
};
