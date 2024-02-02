import { Button, Stack } from '@mui/material';

import { Colors } from '../../styles/themes';

export interface ButtonProps {
  variant?: string;
  textButton?: string;
  onClick?: () => void;
  customStyles?: React.CSSProperties;
  disabled?: boolean;
  children?: React.ReactNode;
}

const styles = {
  button: {
    height: '65px',
    width: '150px',
    fontFamily: 'Oswald-Regular',
    fontSize: '18px',
    borderRadius: '10px',
    color: `${Colors.neutral[100]}`,
    backgroundColor: `${Colors.brand.default}`,
    '&:hover': {
      backgroundColor: Colors.hover.default,
      cursor: 'pointer',
    },
  },
};

export function Buttons({
  variant,
  textButton,
  onClick,
  customStyles,
  disabled,
  children,
}: ButtonProps) {
  return (
    <Stack spacing={2} direction="row">
      <Button
        disabled={disabled}
        onClick={onClick}
        style={customStyles || styles.button}
        variant={'text' || variant}
      >
        {textButton}
        {children}
      </Button>
    </Stack>
  );
}

export default Buttons;
