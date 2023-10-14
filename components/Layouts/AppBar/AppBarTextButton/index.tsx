'use client';

import styles from '@/components/Layouts/AppBar/AppBarTextButton/styles';
import { Button, ButtonProps } from '@mui/material';

export default function AppBarTextButton(props: ButtonProps) {
  const { ...restProps } = props;
  return (
    <Button
      sx={styles.root}
      {...restProps}
    />
  );
}
