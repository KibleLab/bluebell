'use client';

import styles from '@/components/Layouts/AppBar/AppBarIconButton/styles';
import { Button, ButtonProps } from '@mui/material';
import Image from 'next/image';

interface Props extends ButtonProps {
  image: {
    src: string;
    alt: string;
  };
}

export default function AppBarIconButton(props: Props) {
  const { image, ...restProps } = props;
  return (
    <Button
      sx={styles.root}
      {...restProps}>
      <Image
        src={image.src}
        alt={image.alt}
        width={24}
        height={24}
      />
    </Button>
  );
}
