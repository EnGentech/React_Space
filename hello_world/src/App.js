
import './App.css';
import Helloo from './components/Greet';
import Welcome from './components/welcome';
import {hello as Hello, newHello as NewHello} from './components/hello';
import Checkout from './components/propsFile';
import Message from './components/stateFile';
import Counter from './components/counter';

function App() {
  return (
    <div className="App">
      {/* <Helloo />
      <Welcome />
      <Hello />
      <NewHello />*/}
      <Checkout name="Gentle" nickName="EnGnetech">
        <p>This is children props</p>
      </Checkout>
      <Checkout name="Blessing" nickName="Angel" /> 

      <Counter />

    </div>
  );
}

export default App;
