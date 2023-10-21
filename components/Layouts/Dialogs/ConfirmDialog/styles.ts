// ConfirmDialog Styles
const styles = {
  root: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '660px',
    padding: '36px',
    display: 'inline-flex',
    flexDirection: 'column',
    gap: '60px',
    backgroundColor: '#FFFFFF',
    borderRadius: '5px',
  },
  titleSection: {
    position: 'relative',
    left: '0',
    top: '0',
    display: 'inline-flex',
    justifyContent: 'space-between',
  },
  title: {
    height: '60px',
    flex: '1',
  },
  manipulation: {
    position: 'relative',
    right: '0',
    top: '0',
    height: '60px',
    display: 'inline-flex',
    flexDirection: 'row-reverse',
    flex: '1',
    gap: '36px',
  },
  contentSection: {
    position: 'relative',
    left: '0',
    top: '0',
    display: 'inline-flex',
    flexDirection: 'column',
    gap: '36px',
  },
  buttonSection: {
    position: 'relative',
    left: '0',
    top: '0',
    display: 'inline-flex',
  },
};

export default styles;
