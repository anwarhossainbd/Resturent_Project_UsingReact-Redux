
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "../src/Assets/mystyle.css"
import MainComponent from "./Component/MainComponent";
import { BrowserRouter  } from 'react-router-dom';
import myStore from "./redux/Store";
import {Provider} from "react-redux"


function App() {
  return (
    <div className="App">
        <Provider store={myStore}>
            <BrowserRouter>
                <MainComponent />
            </BrowserRouter>
        </Provider>


    </div>
  );
}

export default App;
