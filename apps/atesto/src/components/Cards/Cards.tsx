import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { CardActionArea, SxProps, Theme } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { Colors } from '../../styles/themes';

export interface CardProps {
  title?: string;
  text?: string;
  img?: string;
  customStylesContainer?: SxProps<Theme>;
  customStylesImg?: SxProps<Theme>;
  path?: string;
  manage?: string;
}

const styles = {
  container: {
    height: '366px',
    width: '254px',
    border: `2px solid ${Colors.neutral[100]}`,
    borderRadius: '12px',
    '@media screen and (max-width: 700px)': {
      width: '85%',
      fontSize: '18px',
    },
  },
  conteinerMedia: {
    height: '212px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.brand.default,
  },
  cardMedia: {
    width: '140px',
  },
  containerText: {
    height: '154px',
  },
  title: {
    fontFamily: 'Roboto-Regular',
    fontSize: '28px',
    lineHeight: '30px',
    letterSpacing: '0.5px',
    color: Colors.brand.default,
  },
  text: {
    fontFamily: 'Roboto-Regular',
    fontSize: '13px',
    letterSpacing: '0.25px',
    color: Colors.brand.default,
  },
};

export const Cards = ({
  title,
  text,
  img,
  customStylesContainer,
  customStylesImg,
  path,
  manage,
}: CardProps) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`${path}`, { state: { type: manage } });
  };

  return (
    <Card
      onClick={() => handleNavigate()}
      sx={customStylesContainer ? customStylesContainer : styles.container}
    >
      <CardActionArea>
        <CardActionArea sx={styles.conteinerMedia}>
          <CardMedia
            sx={customStylesImg ? customStylesImg : styles.cardMedia}
            component="img"
            image={img}
            alt="icons"
          />
        </CardActionArea>
        <CardContent sx={styles.containerText}>
          <Typography
            style={styles.title}
            gutterBottom
            variant="h5"
            component="div"
          >
            {title}
          </Typography>
          <Typography
            style={styles.text}
            variant="body2"
            color="text.secondary"
          >
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
