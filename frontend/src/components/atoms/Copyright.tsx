import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import * as React from 'react';

interface CopyrightProps {
  className?: string;
  style?: React.CSSProperties;
}

const Copyright: React.FC<CopyrightProps> = ({ className, style }) => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" className={className} style={style}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        Draft Blog
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default Copyright;
