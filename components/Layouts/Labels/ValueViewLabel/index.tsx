'use client';

import styles from '@/components/Layouts/Labels/ValueViewLabel/styles';
import { Container, ContainerProps, Typography } from '@mui/material';
import React from 'react';

interface Props extends ContainerProps {
  value?: { label: string; value: string };
}

export default function ValueViewLabel(props: Props) {
  const { sx = [], value, ...restProps } = props;
  return (
    <Container
      sx={[styles.root, ...(Array.isArray(sx) ? sx : [sx])]}
      maxWidth={false}
      disableGutters
      {...restProps}>
      <Container
        sx={styles.labelView}
        maxWidth={false}
        disableGutters>
        <Typography sx={styles.label}>{value?.label}</Typography>
      </Container>
      <Container
        sx={styles.valueView}
        maxWidth={false}
        disableGutters>
        <Typography sx={styles.value}>{value?.value}</Typography>
      </Container>
    </Container>
  );
}
