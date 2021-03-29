const spacing = { 
    xs: "4px",
    sm: "8px",
    md: "16px",
    xl: "32px",
    xxl: "64px",
}

const darkTheme = {
    colors: {
      primary: '#242423',
      secondary: '#fff',
      background: '#312F2F',
      borderColor: '#eaeaea',
    },
    spacing: { ...spacing },
}

const lightTheme = {
    colors: {
        primary: '#fafafa',
        secondary: '#242423',
        background: '#fff',
        borderColor: '#eaeaea',
    },
    spacing: { ...spacing },
}



export { darkTheme, lightTheme }