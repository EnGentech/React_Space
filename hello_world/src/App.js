
import './App.css';
import Helloo from './components/Greet';
import Welcome from './components/welcome';
import {hello as Hello, newHello as NewHello} from './components/hello';

function App() {
  return (
    <div className="App">
      <Helloo />
      <Welcome />
      <Hello />
      <NewHello />
    </div>
  );
}

export default App;
