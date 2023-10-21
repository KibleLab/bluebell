'use client';

import styles from '@/components/Layouts/Dialogs/DialogIconButton/styles';
import OutLinedButton from '@/components/Layouts/Buttons/OutLinedButton';
import { ButtonProps } from '@mui/material';
import Image from 'next/image';

interface Props extends ButtonProps {
  image: {
    src: string;
    alt: string;
  };
}

export default function DialogIconButton(props: Props) {
  const { image, ...restProps } = props;

  return (
    <OutLinedButton
      sx={styles.root}
      {...restProps}>
      <Image
        src={image.src}
        alt={image.alt}
        width={24}
        height={24}
      />
    </OutLinedButton>
  );
}
