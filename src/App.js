import logo from './logo.svg';
import Input from './Components/Input';
import Result from './Components/Result';
import './App.css';

function add(a,b){
  return a+b;
}

function App() {
  let result = add(1,2);
  return (
    <div className="App">
      <Input/>
    </div>
  );
}

export default App;
