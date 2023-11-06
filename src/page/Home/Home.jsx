import React from 'react';
import Button from '../../components/Button';
import { ReactComponent as Logo } from '../../asset/home/logo.svg';
import { useNavigateTo } from '../../hook/useNavigationTo';
import * as S from './Home.styles';
const Home = () => {
  const { goTo } = useNavigateTo();
  const buttonList = [
    { label: '고객등록', location: '/user/register' },
    { label: '포인트 적립', location: '/user/earn' },
    { label: '포인트 사용', location: '/user/use' },
  ];

  const goToLink = (location) => {
    goTo(location);
  };

  return (
    <S.Home>
      <S.LogoWrapper>
        <Logo />
      </S.LogoWrapper>
      <S.ButtonGroup>
        {buttonList.map(({ label, location }) => (
          <li>
            <Button
              size={['2rem', '0.4rem']}
              fullWidth
              title={label}
              onClick={() => goToLink(location)}
            >
              {label}
            </Button>
          </li>
        ))}
      </S.ButtonGroup>
    </S.Home>
  );
};

export default Home;
