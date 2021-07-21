import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import Nav from './components/Nav';
import { Global, css } from '@emotion/react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import { AuthProvider } from './Context';
import Register from './Pages/Register';
const GlobalStyles = css`
  /*
    This will hide the focus indicator if the element receives focus via the mouse,
    but it will still show up on keyboard focus.
  */
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }
`;

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <AuthProvider>
        <Router>
          <Nav />
          <Box w="full" display="flex" justifyContent="center">
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/" component={Home} />
            </Switch>
          </Box>
        </Router>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
