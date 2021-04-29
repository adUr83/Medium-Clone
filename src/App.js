import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Trending from './components/Trending';
import SectionBottom from './components/SectionBottom';
import Test from './components/test';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Trending/>
      <SectionBottom/>
     {/* <Test/> */}
    </div>
  );
}

export default App;
