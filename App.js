import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import FormComponent from "./FormComponent";
import DisplayComponent from "./DisplayComponent";

const App= () =>{
return(
<Router>
<Route path="/" exact component={FormComponent} />
<Route path="/display" component={DisplayComponent} />
</Router>

);

};

export default App;
