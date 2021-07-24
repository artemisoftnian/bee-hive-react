import  RouteLayOut   from '../components/RouteLayOut'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//import { HashRouter as Router, Switch, Route} from 'react-router-dom'
import About from '../pages/About/About';
import Login from '../pages/Login/Login'
import Signup from '../pages/Signup/Signup'
import Profile from '../pages/Profile/Profile'
import NotFound from '../pages/NotFound/NotFound'
import NewMessage from '../pages/NewMessage/NewMessage'
import PasswordReset from '../pages/PasswordReset/PasswordReset'
import TeacherProfile from '../pages/TeacherProfile/TeacherProfile'
import Main from '../theme/layouts/Main'

const pages = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/password-reset" component={PasswordReset} />
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
        <Route exact path="/app/message" component={NewMessage} /> 
        <Route exact path="/about" component={About} />     
        <Route component={NotFound} />  
      </Switch>
    </Router>
  );
};

export default pages;