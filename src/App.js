import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import './App.css';

import Add from './containers/Add/Add';
import List from './containers/List/List';
import { useStateValue} from './context/StateProvider';

const App = () => {
	
	
	return (
        <Router>
            <div>
				<Switch>
					
					<Route path="/list" component={List} />
					<Route path="/add" component={ Add } />
					<Route path="/"  component={ Add } />
				</Switch>
            </div>
        </Router>
    );
}

export default App;