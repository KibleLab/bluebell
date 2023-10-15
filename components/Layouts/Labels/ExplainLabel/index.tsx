'use client';

import styles from '@/components/Layouts/Labels/ExplainLabel/styles';
import { Container, ContainerProps, Typography } from '@mui/material';

export default function ExplainLabel(props: ContainerProps) {
  const { sx = [], children, ...restProps } = props;
  return (
    <Container
      sx={[styles.root, ...(Array.isArray(sx) ? sx : [sx])]}
      maxWidth={false}
      disableGutters
      {...restProps}>
      <Typography sx={styles.label}>{children}</Typography>
    </Container>
  );
}
