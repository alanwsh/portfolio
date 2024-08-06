// Footer.tsx
import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      className="mt-4"
    >
      <Typography variant="body2" className="bg-gray-700 p-4 text-center text-white">
        © {new Date().getFullYear()} Alan Wong Shou Hong. Some images are from{' '}
        <Link href="https://pngtree.com" target="_blank" rel="noopener" color="inherit">
          pngtree.com
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
