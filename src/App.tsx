import { BrowserRouter } from 'react-router-dom';
import { SiteRoutes } from './config/Routes';
import { ThemeProvider } from '@material-ui/core/styles';
import { StyledEngineProvider } from '@material-ui/core';
import { theme } from './themes';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme()}>
        <BrowserRouter>
          <SiteRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
