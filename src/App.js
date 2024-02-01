import './App.css';
import Pract from './Compo/Pract';

function App() {
  return (
    <div className="App">
      <Pract name='Samsung' price='1200'/>
      <Pract name='poco' price='3200'/>
      <Pract name='Suzuki' price='12000'/>
    </div>
  );
}

export default App;
