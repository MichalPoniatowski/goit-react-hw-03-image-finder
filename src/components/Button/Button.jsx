import React from 'react';
import css from './Button.module.css';

export const Button = ({ onClick }) => {
  return (
    <div className={css['Button-Wrapper']}>
      <button type="button" onClick={onClick} className={css.Button}>
        Load more
      </button>
    </div>
  );
};
