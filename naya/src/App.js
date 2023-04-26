import logo from './logo.svg';
import Header from './components/Header';
import Naya from './components/Naya';
import Projects from './components/Projects';
import Experience from './components/Experience';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Naya />
      <Projects />
      <Experience />
    </div>
  );
}

export default App;
