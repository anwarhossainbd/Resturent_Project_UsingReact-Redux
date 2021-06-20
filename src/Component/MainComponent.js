import React, {Component, Fragment} from 'react';
import Header from "./header/Header";
import Body from "./body/Body";

class MainComponent extends Component {
    render() {
        return (
               <div>
                  <Header />
                   <Body />

               </div>
        );
    }
}

export default MainComponent;