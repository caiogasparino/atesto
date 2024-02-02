import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Button } from '@mui/material';

import { ReactComponent as IconArrow } from '../../assets/images/icons/icon_arrow_circle_left.svg';
import { ReactComponent as IconHome } from '../../assets/images/icons/icon_home.svg';

export interface HeaderProps {
  title?: string;
}

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 2rem;
  padding-right: 2rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 2rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;

export const ButtonIconLeft = styled.div``;

export const HeaderTitle = styled.div``;

export const ButtonIconRight = styled.div``;

export const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: ${({ theme }) => theme.text};
`;

export const Text = styled.h1`
  font-size: 1.8em;
  text-align: center;
  color: ${({ theme }) => theme.text};
`;

export function Header({ title }: HeaderProps) {
  const navigate = useNavigate();
  return (
    <>
      <HeaderTitle>
        <Title>{title}</Title>
      </HeaderTitle>
      <HeaderContainer>
        <ButtonIconLeft>
          <Button onClick={() => navigate('/')}>
            <IconHome width={50} />
            <Text>INÍCIO</Text>
          </Button>
        </ButtonIconLeft>
        <ButtonIconRight>
          <Button onClick={() => navigate(-1)}>
            <IconArrow width={50} />
            <Text>VOLTAR</Text>
          </Button>
        </ButtonIconRight>
      </HeaderContainer>
    </>
  );
}

export default Header;
