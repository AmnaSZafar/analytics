import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Login from './components/Login.js';
import Home from './components/Home.js';
import Register from './components/Register.js';
import Services from './components/Services.js';
import Support from './components/Support.js';
import Plans from './components/Plans.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/plans" component={Plans} />
          
          <Route path="/support" component={Support} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
        <Footer />
      </Router>
        
      </div>
  );
}

export default App;

      
