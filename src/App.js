import './app.css';
import ImageSlider from './Components/ImageSlider';
import { SliderData } from './Components/SliderData';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Form from './Register/Form';
import Feedback from './Feedback/FeedbackForm';
import Rocket from './Components/Rocket';
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
         <Route path='/feedback'>
            <Feedback />
         </Route>
         <Route path='/rocket'>
           <Rocket />
         </Route>
     </Switch>
     </Router>
  ) 
  

}

export default App;

/*
<Route path="/feedback">
<Feedback />
</Route>
*/

