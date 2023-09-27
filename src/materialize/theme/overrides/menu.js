const Menu = (theme, skin) => {
  const boxShadow = () => {
    if (skin === 'bordered') {
      return theme.shadows[0]
    } if (theme.palette.mode === 'light') {
      return theme.shadows[8]
    } return theme.shadows[9]
  }

  return {
    MuiMenu: {
      styleOverrides: {
        root: {
          '& .MuiMenu-paper': {
            borderRadius: 5,
            boxShadow: boxShadow(),
            ...(skin === 'bordered' && { border: `1px solid ${theme.palette.divider}` }),
          },
        },
      },
    },
  }
}

export default Menu
