import React from 'react';
import * as S from './Button.styles';

const Button = ({ children, onClick, ...rest }) => {
  return (
    <S.Button onClick={onClick} {...rest}>
      {children}
    </S.Button>
  );
};
export default Button;
