import styles from '@/components/Layouts/Dialogs/ConfirmDialog/styles';
import TitleLabel from '@/components/Layouts/Labels/TitleLabel';
import { Container, Modal, ModalProps } from '@mui/material';
import { Children, isValidElement } from 'react';

interface Props extends Pick<ModalProps, 'open' | 'onClose'> {
  open: boolean;
  onClose?: (event: object, reason: 'backdropClick' | 'escapeKeyDown') => void;
  title?: string;
  children?: React.ReactNode;
}

export default function ConfirmDialog(props: Props) {
  const { open, onClose, title, children } = props;

  let manipulationButton1: React.ReactNode;
  let manipulationButton2: React.ReactNode;
  let manipulationButton3: React.ReactNode;
  let contents: React.ReactNode;
  let confirmButtons: React.ReactNode;
  Children.forEach(children, (child) => {
    if (isValidElement(child)) {
      if (child.key === 'manipulation1') {
        manipulationButton1 = child;
      }
      if (child.key === 'manipulation2') {
        manipulationButton2 = child;
      }
      if (child.key === 'manipulation3') {
        manipulationButton3 = child;
      }
      if (child.key === 'contents') {
        contents = child;
      }
      if (child.key === 'confirmButtons') {
        confirmButtons = child;
      }
    }
  });
  return (
    <Modal
      open={open}
      onClose={onClose}>
      <Container
        sx={styles.root}
        maxWidth={false}
        disableGutters>
        <Container
          sx={styles.titleSection}
          maxWidth={false}
          disableGutters>
          <TitleLabel sx={styles.title}>{title}</TitleLabel>
          <Container
            sx={styles.manipulation}
            maxWidth={false}
            disableGutters>
            {manipulationButton1}
            {manipulationButton2}
            {manipulationButton3}
          </Container>
        </Container>
        <Container
          sx={styles.contentSection}
          maxWidth={false}
          disableGutters>
          {contents}
        </Container>
        <Container
          sx={styles.buttonSection}
          maxWidth={false}
          disableGutters>
          {confirmButtons}
        </Container>
      </Container>
    </Modal>
  );
}
