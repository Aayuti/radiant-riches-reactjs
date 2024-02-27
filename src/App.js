// import logo from './logo.svg';
import Header from './components/Header'
import './App.scss';
import Home from './Home';
import Footer from './components/Footer';
// import './index.scss';
// import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>

  );
}

export default App;
