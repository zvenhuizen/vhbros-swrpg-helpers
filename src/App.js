import logo from './logo.svg';
import './styles/main.scss';
import Header from './Header.js';

/* ==== COMMENTS ===== */
// I will add a lot of comments in code to help us keep track of what each person is doing, and why.

/* ===== APP ===== */
// This is the primary component of our app. 
// Everything we make will eventually be rendered through App.
// I believe we will want this component to be a stateful component

/* ===== CHALLENGE ===== */
// Change App from a stateless functional componenet to a stateful class based component.
// The App should look the same after the change.

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
