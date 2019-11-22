import { h, render } from 'preact';
import { Router } from 'preact-router';
import './styles';

const Home = () => <h2>Home Page</h2>;
const Page1 = () => <h2>Page 1</h2>;
const Page2 = () => <h2>Page 2</h2>;
const Error = () => <h3>Error</h3>;

const App = () => (
  <div>
    <h1>Hello from Preact and Typescript!</h1>

    <Router>
      <Home path="/" />
      <Page1 path="page1" />
      <Page2 path="page2" />
      <Error default />
    </Router>
  </div>
);

render(<App />, document.getElementById('root'));
