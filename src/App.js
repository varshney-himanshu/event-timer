import React from 'react';
import EventTimer from './EventTimer';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';

class App extends React.Component {


  render(){
  return (
  <Router>
    <Switch>
    <Route exact path="/" component={EventTimer}/>
    </Switch>
  </Router>
  );
 }
}

export default App;
