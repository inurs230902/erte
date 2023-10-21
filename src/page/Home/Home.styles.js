import styled from 'styled-components';

export const Home = styled.main`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.flexColumnSet()};
`;

export const LogoWrapper = styled.div`
  flex: 1 1;
  ${({ theme }) => theme.flexRowSet()};

  & > svg {
    width: 750px;
    height: 271px;
  }
`;

export const ButtonGroup = styled.ul`
  width: 60%;
  padding-bottom: 20vh;
  ${({ theme }) => theme.flexColumnSet()};
  gap: 2rem;

  & > li {
    width: 100%;

    & > button {
      font-size: 36px;
      background: white;
      color: black;
    }
  }
`;
