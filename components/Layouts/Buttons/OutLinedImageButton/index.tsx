'use clinet';

import { ButtonProps } from '@mui/material';
import Image from 'next/image';
import OutLinedButton from '@/components/Layouts/Buttons/OutLinedButton';

interface Props extends ButtonProps {
  image: {
    src: string;
    src_d: string;
    alt: string;
  };
}

export default function OutLinedImageButton(props: Props) {
  const { image, disabled, ...restProps } = props;
  const imageSrc = !disabled ? image.src : image.src_d;
  return (
    <OutLinedButton
      disabled={disabled}
      {...restProps}>
      <Image
        src={imageSrc}
        alt={image.alt}
        width={24}
        height={24}
      />
    </OutLinedButton>
  );
}
