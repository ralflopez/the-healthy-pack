import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import AppBar from './components/AppBar/AppBar';
import LandingPage from './components/Landing/LandingPage';
import ProductsPage from './components/Products/ProductsPage';
import ProductPreview from './components/Products/ProductPreview';
import CartPage from './components/Cart/CartPage';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Router>
          <AppBar/>
          <Switch>
            <Route path="/" exact component={LandingPage}/>
            <Route path="/products" component={ProductsPage}/>
            <Route path="/product" component={ProductPreview}/>
            <Route path="/cart" component={CartPage}/>
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

const theme = createMuiTheme({
  custom: {
    fadedSecondary: '#C5E1D6'
  },
  palette: {
    primary: {
      main: '#F1F1F3',
      contrastText: '#0D0D0E'
    },
    secondary: {
      main: '#13A161',
      contrastText: '#FFFFFF'
    },
    background: {
      paper: '#F1F1F3',
      default: '#F1F1F3'
    }
  },
  typography: {
    fontFamily: "'Ibarra Real Nova', serif",
    button: {
      fontFamily: "'Ibarra Real Nova', serif"
    }
  },
})

export default App;
