
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "../src/Assets/mystyle.css"
import MainComponent from "./Component/MainComponent";
import { BrowserRouter  } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <MainComponent />
        </BrowserRouter>

    </div>
  );
}

export default App;
