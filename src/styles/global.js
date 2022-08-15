const global = (theme) => ({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },

  body: {
    overflowX: 'hidden',
    backgroundImage: 'url("https://i.imgur.com/blroYwQ.png")',
    backgroundSize: 'contain',
    backgroundRepeat: 'repeat',
    backgroudnPosition: 'center',
    color: theme.colors.black[0],
    fontFamily: theme.fontFamily,
  },
});

export default global;
