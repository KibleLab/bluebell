'use client';

import styles from '@/components/Layouts/AppBar/styles';
import { Button, Container } from '@mui/material';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Children, isValidElement, useEffect, useState } from 'react';

interface Props {
  children?: React.ReactNode;
}

export default function AppBar(props: Props) {
  const { children } = props;
  const router = useRouter();

  // 현재 날짜
  const [currentDate, setCurrentDate] = useState('');
  const formattedCurrentDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    setCurrentDate(`${year}년 ${month}월 ${day}일`);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      formattedCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // children prop을 3개의 변수로 분리
  let orderMethodButtonGroup: React.ReactNode;
  let manipulationButton1: React.ReactNode;
  let manipulationButton2: React.ReactNode;
  Children.forEach(children, (child) => {
    if (isValidElement(child)) {
      if (child.key === 'orderMethod') {
        orderMethodButtonGroup = child;
      }
      if (child.key === 'manipulation1') {
        manipulationButton1 = child;
      }
      if (child.key === 'manipulation2') {
        manipulationButton2 = child;
      }
    }
  });

  return (
    <Container
      sx={styles.root}
      maxWidth={false}
      disableGutters>
      {/* LeftSection */}
      <Container
        sx={styles.leftSection}
        maxWidth={false}
        disableGutters>
        {/* LogoButton */}
        <Button
          sx={styles.logoButton}
          onClick={() => router.push(`/`)}>
          <Image
            src='/images/logo.svg'
            width={160}
            height={100}
            priority
            alt='logo'
          />
        </Button>
        {/* OrderMethodButtonGroup */}
        {orderMethodButtonGroup}
      </Container>
      {/* RightSection */}
      <Container
        sx={styles.rightSection}
        maxWidth={false}
        disableGutters>
        {/* CurrenDate */}
        <Container
          sx={styles.currentDate}
          maxWidth={false}
          disableGutters>
          {currentDate}
        </Container>
        {/* ManipulationButtons */}
        {manipulationButton1}
        {manipulationButton2}
      </Container>
    </Container>
  );
}
