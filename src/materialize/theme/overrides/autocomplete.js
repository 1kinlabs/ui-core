const Autocomplete = (theme, skin) => ({
  MuiAutocomplete: {
    styleOverrides: {
      paper: {
        boxShadow: theme.shadows[6],
        ...(skin === 'bordered' && { boxShadow: 'none', border: `1px solid ${theme.palette.divider}` }),
      },
    },
  },
})

export default Autocomplete
