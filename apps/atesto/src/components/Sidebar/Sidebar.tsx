import React from 'react';

import { CardMedia, Typography } from '@mui/material';

import images from '../../assets/images';
import { Size } from '../../styles/themes';

import { SidebarData } from './SidebarData';
import {
  Container,
  ContainerLogoFooter,
  ContainerLogoHeader,
  MenuItemLinks,
  MenuItems,
  SidebarMenu,
} from './styles';

interface SideBarProps {
  isOn?: boolean;
}

const Sidebar = ({ isOn }: SideBarProps) => {
  const { logos } = images;
  const LogoSeed = logos.LogoSeed;
  const LogoGovPr = logos.LogoGovPr;

  return (
    <SidebarMenu>
      <Container>
        <ContainerLogoHeader>
          <CardMedia sx={styles.logoHeader} component="img" image={LogoSeed} />
        </ContainerLogoHeader>

        {SidebarData.map((item, index) => {
          return (
            <MenuItems key={index}>
              <MenuItemLinks to={item.path}>
                <Typography sx={styles.typography.title}>
                  {item.title}
                </Typography>
              </MenuItemLinks>
            </MenuItems>
          );
        })}

        <ContainerLogoFooter>
          <CardMedia sx={styles.logoFooter} component="img" image={LogoGovPr} />
        </ContainerLogoFooter>
      </Container>
    </SidebarMenu>
  );
};

export default Sidebar;

const styles = {
  logoHeader: {
    height: '65px',
    width: '200px',
  },
  logoFooter: {
    height: '85px',
    width: '200px',
  },
  typography: {
    title: {
      fontFamily: 'Roboto-Regular',
      fontSize: `${Size.fonts.buttons}`,
    },
  },
};
