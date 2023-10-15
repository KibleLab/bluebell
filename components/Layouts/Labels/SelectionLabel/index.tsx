'use client';

import styles from '@/components/Layouts/Labels/SelectionLabel/styles';
import {
  Container,
  ContainerProps,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { useState } from 'react';

interface Props extends ContainerProps {
  titleLabel?: string;
  defaultValue?: string;
  values?: { id: number; value: string | number; text: string }[];
}

export default function SelectionLabel(props: Props) {
  const { sx = [], titleLabel, defaultValue, values, ...restProps } = props;
  const [select, setSelect] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSelect(event.target.value);
  };

  return (
    <Container
      sx={[styles.root, ...(Array.isArray(sx) ? sx : [sx])]}
      maxWidth={false}
      disableGutters
      {...restProps}>
      <Container
        sx={styles.title}
        maxWidth={false}
        disableGutters>
        <Typography sx={styles.titleLabel}>{titleLabel}</Typography>
      </Container>
      <Select
        sx={styles.select}
        value={select}
        onChange={handleChange}
        displayEmpty>
        <MenuItem value=''>{defaultValue}</MenuItem>
        {values?.map((item) => (
          <MenuItem
            key={item.id}
            value={item.value}>
            {item.text}
          </MenuItem>
        ))}
      </Select>
    </Container>
  );
}
