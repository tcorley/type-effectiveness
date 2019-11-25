import { h, render } from 'preact';
import { Router, Route } from 'preact-router';
import { createUseStyles } from 'react-jss';
import Home from './pages/Home';
import './styles';

const useStyles = createUseStyles({
  link: {
    color: 'red',
    marginRight: 5
  }
});

const Page1 = () => <h2>Page 1</h2>;
const Page2 = () => <h2>Page 2</h2>;
const Error = () => <h3>Error</h3>;

const Header = () => {
  const { link } = useStyles();
  return (
    <header>
      <nav>
        <a href="/" className={link}>
          Home
        </a>
        <a href="/page1">Page 1</a>
        <a href="/page2">Page 2</a>
        <a href="/missing">Missing</a>
      </nav>
    </header>
  );
};

const App = () => (
  <div>
    <Header />
    <h1>Choose a Type</h1>

    <Router>
      <Route component={Home} path="/" />
      <Route component={Page1} path="page1" />
      <Route component={Page2} path="page2" />
      <Route component={Error} default />
    </Router>
  </div>
);

render(<App />, document.getElementById('root'));
