import  RouteLayOut   from './components/RouteLayOut'
//import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { HashRouter as Router, Switch, Route} from 'react-router-dom'
//import Nav from './components/Nav';
//import Home from './routes/Home/Home';
import Login from './routes/Login/Login'
import Signup from './routes/Signup/Signup'
import Profile from './routes/Profile/Profile'
import TeacherProfile from './routes/TeacherProfile/TeacherProfile'
import Main from './theme/layouts/Main'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
         <RouteLayOut
          component={Profile}
          exact
          layout={Main}
          path="/profile"
        />
         <RouteLayOut
          component={TeacherProfile}
          exact
          layout={Main}
          path="/teacher"
        />        
      </Switch>
    </Router>
  );
};

export default Routes;