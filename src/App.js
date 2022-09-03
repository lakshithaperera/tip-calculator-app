import { Tipcalculator } from "./components/tipcalculator/Tipcalculator";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./Global.styled";

const theme = {
  colors: {
    primaryColor: 'hsl(183, 100%, 15%)',
    primaryVeriantColor: 'hsl(172, 67%, 45%)',
    whiteColor: 'hsl(0, 0%, 100%)',
    inputAreaColor: 'hsl(188, 41%, 90%)',
    textColorVeriant:'hsl(186, 14%, 43%)',
    inputTextColor: ' hsl(184, 14%, 56%)',
    body: 'hsl(185, 41%, 84%)',
  },
  mobile: '768px',
  
}

function App() {
  return (


    <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Tipcalculator />
    </ThemeProvider>
    
    
  );
}

export default App;
