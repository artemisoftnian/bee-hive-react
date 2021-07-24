import { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../../theme/layouts/Footer'
import SiteLogo from '../../bh-logo.png'
import { config } from '../../helpers/config'

import firebase from "firebase/app";
import "firebase/auth";
import { 
  FirebaseAuthProvider, 
  FirebaseAuthConsumer, 
  IfFirebaseAuthed, 
  IfFirebaseAuthedAnd
} from '@react-firebase/auth'
import { Redirect } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://p2.piqsels.com/preview/583/523/665/boys-school-teacher-education.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    alignItems: 'center'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const classes = useStyles();

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  return (
    <FirebaseAuthProvider {...config} firebase={firebase}> 
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} >      
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>

          <img
            alt="Bee-Hive Logo"
            src={SiteLogo} 
            style={{ marginBottom:100}}
          /> 

          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={ ()=> {
                firebase.auth().signInWithEmailAndPassword(user, pass)
              } }   
            >
              Sign In

            </Button>  

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => {
                firebase.auth().signInAnonymously();
              }}
             >
              Sign In Anonymously
            </Button>                                

            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => {
              const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
              firebase.auth().signInWithPopup(googleAuthProvider);
            }}
          >
            Sign In With Google
          </Button>

            <Link href="/profile" variant="body2">
                  Panic Button
            </Link>    

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>

            <Footer />

            <IfFirebaseAuthed>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => {
                firebase.auth().signOut();                
              }}
             >
              Sign Out
            </Button>                 

              {() => { }}
            </IfFirebaseAuthed>
            <IfFirebaseAuthedAnd
              filter={({ providerId }) => providerId !== "anonymous"}
            >
              {({ providerId }) => {
                return <div>You are authenticated with {providerId}</div>;
              }}
            </IfFirebaseAuthedAnd> 
            <FirebaseAuthConsumer>
                {({ isSignedIn, user, providerId }) => {
                  return (
                    <pre style={{ height: 300, overflow: "auto" }}>
                      {JSON.stringify({ isSignedIn, user, providerId }, null, 2)}
                    </pre>
                  );
                }}
            </FirebaseAuthConsumer>   


          </form>
        </div>
      </Grid>
    </Grid>



    </FirebaseAuthProvider>


  );
}
