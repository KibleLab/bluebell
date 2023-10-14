'use client';

import { Container, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

import AppBar from '@/components/Layouts/AppBar';
import AppBarIconButton from '@/components/Layouts/AppBar/AppBarIconButton';

const styles = {
  root: {
    position: 'relative',
    left: '0',
    top: '0',
    width: '1920px',
    height: '1080px',
    margin: '0',
    display: 'inline-flex',
    flexDirection: 'column',
  },
  contents: {
    position: 'relative',
    left: '0',
    top: '102px',
    width: '1920px',
    height: '978px',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '36px',
    margin: '0',
  },
  errorView: {
    position: 'relative',
    width: 'auto',
    height: 'auto',
    padding: '60px',
    margin: '0',
    display: 'inline-flex',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    borderRadius: '5px',
  },
  errorCode: {
    position: 'relative',
    fontSize: '120px',
    fontWeight: 'bold',
    color: '#ff0000',
  },
  errorMessage: {
    position: 'relative',
    fontSize: '72px',
    color: '#000000',
  },
};

export default function NotFoundCilent() {
  const router = useRouter();
  return (
    <Container
      sx={styles.root}
      maxWidth={false}
      disableGutters>
      <AppBar>
        <AppBarIconButton
          image={{ src: 'images/back.svg', alt: 'back' }}
          onClick={() => router.back()}
          key='manipulation1'
        />
      </AppBar>
      <Container
        sx={styles.contents}
        maxWidth={false}
        disableGutters>
        <Container
          sx={styles.errorView}
          maxWidth={false}
          disableGutters>
          <Typography sx={styles.errorCode}>404 Error</Typography>
          <Typography sx={styles.errorMessage}>Page is not Found :(</Typography>
        </Container>
      </Container>
    </Container>
  );
}
