import './App.css';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Form from './Form/Form';
import { Switch } from "react-router-dom";


function App() {
  return (
    <Router>
  <Switch>
      <Route path="/register">
        <Form />
      </Route>
      <Route path="/">
        <ImageSlider slides={SliderData} />
      </Route>
  </Switch>
    </Router>
  ) 
  

}

export default App;


