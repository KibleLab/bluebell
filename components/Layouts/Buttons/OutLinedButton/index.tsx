'use clinet';

import styles from '@/components/Layouts/Buttons/OutLinedButton/styles';
import { Button, ButtonProps } from '@mui/material';

export default function OutLinedButton(props: ButtonProps) {
  const { sx = [], disabled, ...restProps } = props;
  return (
    <Button
      sx={[styles.root(disabled), ...(Array.isArray(sx) ? sx : [sx])]}
      disabled={disabled}
      {...restProps}
    />
  );
}
