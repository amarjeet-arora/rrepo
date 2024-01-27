import logo from './logo.svg';
import './App.css';
import MainApp from './components/MainApp';
import { AxiosDemo } from './restapp/axiosdemo';
import FormApp from './restapp/FormApp';

function App() {
  return (
    <div className="App">
       <FormApp/>
        <AxiosDemo/> 
    </div>
  );
}

export default App;
