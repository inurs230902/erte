import styled from 'styled-components';

export const Wrapper = styled.div`
  & > label {
    ${({ theme }) => theme.flexRowSet()};
  }

  label {
    & > input:last-of-type {
      border: 2px solid orange;
    }
  }
`;

export const LastInput = styled.div`
  position: relative;
  & > div {
    ${({ theme }) => theme.posCenterY()};
    position: absolute;
    left: 10px;
  }
`;
