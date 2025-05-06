import './index.css';
import { FC } from 'react';
import { IProps } from './types.ts';

function Input(props): FC<IProps> {
  const { label, placeholder } = props;

  return (
    <div class="input">
      <input type="text" class="input__root" />
      {label && <div class="input__label">{label}</div>}
      {placeholder && <div class="input__placeholder">{placeholder}</div>}
    </div>
  );
}

export default Input;
