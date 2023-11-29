import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import links from './models/Links';
import images from './models/Images';

function App() {
  return (
    <div className="App">
      <div className="full-header">
        <Header link={links} image={images}/>
      </div>
      <div className='main'>
        <Main link={links} image={images}/>
      </div>
      <div>
        <Footer link={links} image={images}/>
      </div>
      
    </div>
  );
}

export default App;
