
import './App.css';
import Helloo from './components/Greet';
import Welcome from './components/welcome';
import {hello as Hello, newHello as NewHello} from './components/hello';
import Checkout from './components/propsFile';

function App() {
  return (
    <div className="App">
      <Helloo />
      <Welcome />
      <Hello />
      <NewHello />
      <Checkout name="Gentle" nickName="EnGnetech">
        <p>This is children props</p>
      </Checkout>
      <Checkout name="Blessing" nickName="Angel" />

    </div>
  );
}

export default App;
