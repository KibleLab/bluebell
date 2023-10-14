// OutLinedButton Styles
const styles = {
  root: (disabled?: boolean) => ({
    backgroundColor: !disabled ? '#FFFFFF' : '#F6F6F6',
    border: !disabled ? '2px solid #000000' : '2px solid #00000042',
    color: !disabled ? '#000000' : '#00000042',
    fontSize: '28px',
    textTransform: 'none',
  }),
};

export default styles;
