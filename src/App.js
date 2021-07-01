import './App.css';
import './styles.css'
import Footer from './components/Footer';
import Header from './components/Header';
import routes from './routes'
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
          {routes}
        <Footer />
      </div>
      </HashRouter>
    
  );
}

export default App;
