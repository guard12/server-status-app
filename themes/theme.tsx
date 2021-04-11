const spacing = { 
    xs: "4px",
    sm: "8px",
    md: "16px",
    xl: "32px",
    xxl: "64px",
}

const darkTheme = {
    colors: {
      primary: '#242526',
      secondary: '#fff',
      background: '#18191a',
      borderColor: '#eaeaea',
      hoverColor: '#3a3b3c',
      activeColor: '#2d88ff'
    },
    spacing: { ...spacing },
}

const lightTheme = {
    colors: {
        primary: '#fafafa',
        secondary: '#242423',
        background: '#fff',
        borderColor: '#eaeaea',
        hoverColor: '#e2dddd',
        activeColor: '#2d88ff'
    },
    spacing: { ...spacing },
}



export { darkTheme, lightTheme }