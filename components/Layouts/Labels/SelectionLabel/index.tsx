'use client';

import styles from '@/components/Layouts/Labels/SelectionLabel/styles';
import {
  Container,
  ContainerProps,
  MenuItem,
  TextField,
  TextFieldProps,
  Typography,
} from '@mui/material';
import { ChangeEventHandler, Key, ReactNode } from 'react';

interface Props
  extends Omit<ContainerProps, 'onChange'>,
    Pick<TextFieldProps, 'placeholder' | 'value' | 'onChange' | 'error' | 'helperText'> {
  label?: ReactNode;
  placeholder?: string;
  value?: unknown;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  dropDownItems?: {
    id: Key | null;
    value: string | number | readonly string[] | number;
    text: string;
  }[];
  error?: boolean;
  helperText?: ReactNode;
}

export default function SelectionLabel(props: Props) {
  const {
    sx = [],
    label,
    placeholder,
    value,
    onChange,
    dropDownItems,
    error,
    helperText,
    ...restProps
  } = props;
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
        sx={styles.select}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        error={error}
        helperText={helperText}
        InputProps={{ style: styles.inputProps }}
        variant='outlined'
        select>
        {dropDownItems?.map((item) => (
          <MenuItem
            key={item.id}
            value={item.value}>
            {item.text}
          </MenuItem>
        ))}
      </TextField>
    </Container>
  );
}
