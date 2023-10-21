import styled, { css } from 'styled-components';

const colorStyles = css`
  ${({ theme, color, outline }) => {
    const selected = theme.colors[color ?? 'primary'];
    return outline
      ? css`
          color: transparent ${selected};
          background: white;
          border: 1px solid ${selected};
          &:hover {
            background: ${selected};
            color: white;
          }
        `
      : css`
          border: none;
          background: ${selected};
          color: ${selected === '#FFF' ? 'black' : 'white'};
          &:not(:disabled):hover {
            background: gray;
          }
          &:not(:disabled):active {
            background: gray;
          }
        `;
  }}
`;

const fontWeightStyles = css`
  ${({ fontWeight }) => {
    const selected = fontWeight;
    return css`
      font-weight: ${selected};
    `;
  }}
`;

const fullWidthStyle = css`
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
      justify-content: center;
    `}
`;

export const Button = styled.button`
  ${({ theme }) => theme.flexRowSet()};
  width: max-content;
  padding: 14px 16px;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: ${({ round }) => (round ? '20px' : '8px')};
  word-break: break-all;
  -webkit-tap-highlight-color: transparent;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '14px')};

  &:disabled {
    cursor: not-allowed !important;
  }

  ${({ size }) =>
    size &&
    css`
      padding: ${size[0]} ${size[1]};
    `};

  ${colorStyles}
  ${fontWeightStyles}
  ${fullWidthStyle}
`;
