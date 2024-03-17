
import './App.css';
import Helloo from './components/Greet';
import Welcome from './components/welcome';
import {hello as Hello, newHello as NewHello} from './components/hello';
import Checkout from './components/propsFile';
import Message from './components/stateFile';
import Counter from './components/counter';
import FunctionClick from './components/functionClick';
import classClick from './components/classClick';
import EventBind from './components/eventBind';
import ParentComponent from './components/parentComponent';
import ConditionalStructuring from './components/conditionalStructuring';
import NameList from './components/nameList';
import GetList from './components/getList';

function App() {
  return (
    <div className="App">
      {/* <Helloo />
      <Welcome />
      <Hello />
      <NewHello />*/}
      {/* <Checkout name="Gentle" nickName="EnGnetech">
        <p>This is children props</p>
      </Checkout>
      <Checkout name="Blessing" nickName="Angel" /> 

      <Counter /> */}

      {/* <FunctionClick />
      <ClassClick /> 
      <EventBind /> */}
      <GetList />

    </div>
  );
}

export default App;
