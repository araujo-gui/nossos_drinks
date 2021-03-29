import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Footer from './Componentes/Footer/Footer';
import Home from './Componentes/Home/Home';
import Header from './Componentes/Header/Header';
import Contato from './Componentes/Contato/Contato'
import SobreNos from './Componentes/SobreNos/SobreNos';
import NossoTime from './Componentes/NossoTime/NossoTime';
import Drinks from './Componentes/Drinks/Drinks';


function App() {
  return (
    <div className = "App">
      <Router>
        <header className="headerApp">
          <Header />
        </header>
        <main>
          <Switch>
          <Route path="/contato">
            <Contato />
          </Route>
          <Route path="/sobre-nos">
            <SobreNos />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/nosso-time">
            <NossoTime />
          </Route>
          <Route path="/drinks">
            <Drinks />
          </Route>
          </Switch>
        </main>
        <footer className="footerApp">
          <Footer />
        </footer>
      </Router>

    </div>
  );
}

export default App;
