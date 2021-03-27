const spacing = { 
    xs: "4px",
    sm: "8px",
    md: "16px",
    xl: "32px",
    xxl: "64px",
}

const darkTheme = {
    colors: {
      primary: '#312F2F',
      secondary: '#fff',
    },
    spacing: { ...spacing },
}

const lightTheme = {
    colors: {
        primary: '#FDFFFC',
        secondary: '#312F2F',
    },
    spacing: { ...spacing },
}



export { darkTheme, lightTheme }