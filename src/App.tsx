
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Container, Box } from '@mui/material'
import { Header, HomePage } from './components'

function App() {

  const theme = createTheme({
    palette: {
      background: {
        paper: '#f6f8fa'
      },
      primary: {
        main: '#052849',
        light: '#49a9f4'
      },
      secondary: {
        main: '#9aa8bc',
        light: '#ffffff'
      },
      text: {
        primary: '#4C5767',
        secondary: '#ADBCD0'
      }
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <Container disableGutters maxWidth={false} sx={{ backgroundColor: 'background.paper', height: '100vh', boxSizing: "border-box" }}>
        <Header />
        <HomePage />
      </Container>
    </ThemeProvider>
  );
}

export default App;
