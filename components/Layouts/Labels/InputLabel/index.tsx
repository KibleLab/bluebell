'use client';

import styles from '@/components/Layouts/Labels/InputLabel/styles';
import { Container, ContainerProps, TextField, TextFieldProps, Typography } from '@mui/material';
import { ChangeEventHandler, ReactNode } from 'react';

interface Props
  extends Omit<ContainerProps, 'onChange'>,
    Pick<TextFieldProps, 'placeholder' | 'value' | 'onChange' | 'error' | 'helperText'> {
  label?: string;
  placeholder?: string;
  value?: unknown;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  error?: boolean;
  helperText?: ReactNode;
}

export default function InputLabel(props: Props) {
  const { sx = [], label, placeholder, value, onChange, error, helperText, ...restProps } = props;
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
        <Typography sx={styles.label}>{label}</Typography>
      </Container>
      <TextField
        sx={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        error={error}
        helperText={helperText}
        InputProps={{ style: styles.inputProps }}
        variant='outlined'
        size='small'
      />
    </Container>
  );
}
