import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Scrollspy from 'react-scrollspy'
import { NavBar }from './NavBar';
import Header from './Header';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import './style.css'
import { EasybaseProvider } from 'easybase-react';
import ebconfig from "./ebconfig";



function App() {
  return (
    <div className="App">
      < EasybaseProvider ebconfig={ebconfig}>
      <div>
      <NavBar/>
      <Scrollspy items={ ['home', 'section-1', 'section-2', 'section-3'] } currentClassName="is-current">
        <a href="#home"><Header/></a>
        <a href="#section-1"><About/></a>
        <a href="#section-2"><Portfolio/></a>
        <a href="#section-3"><Contact/></a>
      </Scrollspy>
    </div>
    </EasybaseProvider>
    </div>
  );
}

export default App;