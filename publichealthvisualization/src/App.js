import React, {Component} from 'react';
import CanvasJSReact from './canvasjs.react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {csv} from 'd3';

import Graphs from "./components/Graphs"
//import CSV from "./components/CSV"

class App extends Component {	
  
  render() {
		
   	return (
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/graphs" component={Graphs} />
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;