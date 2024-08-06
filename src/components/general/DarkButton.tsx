// DarkButton.tsx
import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { useTheme } from '@mui/material/styles';
import { colors } from '@mui/material';

interface DarkButtonProps extends ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  outlined?: boolean;
}

const DarkButton: React.FC<DarkButtonProps> = ({ onClick, children, outlined = false, ...props }) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Button
      variant={outlined ? 'outlined' : 'contained'}
      sx={{
        backgroundColor: outlined ? 'transparent' : (isDarkMode ? colors.common.white : colors.common.black),
        borderColor: isDarkMode ? colors.common.white : colors.common.black,
        color: outlined ? (isDarkMode ? colors.common.white : colors.common.black) : (isDarkMode ? colors.common.black : colors.common.white),
        "&:hover": {
          backgroundColor: (isDarkMode ? colors.common.white : colors.common.black),
          color: outlined ? (isDarkMode ? colors.common.black : colors.common.white) : (isDarkMode ? colors.common.white : colors.common.black),
          borderColor: isDarkMode ? colors.common.black : colors.common.white,
        },
        borderRadius: '1rem',
        mt: 2,
      }}
      startIcon={<RestartAltIcon />}
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  );
};

export default DarkButton;
