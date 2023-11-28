import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import links from './models/Links';

function App() {
  return (
    <div className="App">
      <div className="full-header">
        <Header link={links}/>
      </div>
      <div className='main'>
        <Main/>
      </div>
      <div>
        <Footer/>
      </div>
      
    </div>
  );
}

export default App;
