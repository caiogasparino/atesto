import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Colors, Size } from '../../styles/themes';

export const SidebarMenu = styled.div`
  width: 18%;
  padding: 1%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-right: 5px solid ${Colors.border.default};
  just
  top: 0;
  left: '0';
  transition: 0.6s;
`;

export const Container = styled.div`
  display: flex;
  padding: 2%;
  flex-direction: column;
  justify-content: space-between;
`;

export const MenuItems = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1%;
  border: 1px solid ${Colors.neutral[200]};
  height: 50px;
  border-radius: ${Size.radius};
  margin-bottom: ${Size.default[20]};
  &:hover {
    -moz-transition: all 0.2s ease-in;
    -o-transition: all 0.2s ease-in;
    -webkit-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
    background-color: ${Colors.hover.default};
  }
  &:active {
    background: ${Colors.active.default};
    color: ${Colors.neutral[900]};
  }
`;

export const MenuItemLinks = styled(Link)`
  display: flex;
  text-align: center;
  padding: 1rem;
  text-decoration: none;
  color: ${Colors.neutral[100]};
  &:active {
    color: ${Colors.neutral[700]};
  }
`;

export const ContainerLogoHeader = styled.div`
  padding: 5%;
`;

export const ContainerLogoFooter = styled.div`
  padding: 5%;
`;
