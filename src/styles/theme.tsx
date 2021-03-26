const spacing = { 
    xs: "4px",
    sm: "8px",
    md: "16px",
    xl: "32px",
    xxl: "64px",
}

const darkTheme = {
    colors: {
      primary: 'black',
      secondary: 'white',
    },
    spacing: { ...spacing },
}

const lightTheme = {
    colors: {
        primary: 'white',
        secondary: 'black',
    },
    spacing: { ...spacing },
}



export { darkTheme, lightTheme }