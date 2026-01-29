import ThemeContext from './ThemeContext'

const ThemeProvider = ({childern}) => {
    const theme ="drak"


return(
    <ThemeContext.Provider value={theme}>
        {childern}
    </ThemeContext.Provider>
    )
}

export default ThemeProvider