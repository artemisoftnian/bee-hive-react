import React, { useEffect, useState } from 'react';
import { useStyles } from './TeacherProfileStyle'
import axios from 'axios';
import { Helmet } from 'react-helmet';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Messages from '../../components/Messages';
import SchoolInfo from '../../components/SchoolInfo';
import Typography from '@material-ui/core/Typography';
import Title from '../../components/Title';
import Calendar from 'react-calendar';
import "firebase/auth";

const apiNodes = {
  parent:"https://x8ki-letl-twmt.n7.xano.io/api:IE4r3vGs/parents?email=",
  messages: "https://x8ki-letl-twmt.n7.xano.io/api:IE4r3vGs/messages?students_id="
}


export default function TeacherProfile() {

  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const [error, setError] = useState(null);

  const [guardian, setGuardian] = useState({});
  const [school, setSchool] = useState({})
  const [students, setStudents] = useState({})
  
  const [currentStudent, setCurrentStudent] = useState({})

  const [msgLoaded, setMsgLoaded] = useState(false)
  const [messages, setMessages] = useState({ 
            teacher: [], 
            guardian: []
        })



  const [value, onChange] = useState(new Date());

  useEffect(() => {

    axios(`${apiNodes.parent}${"test@test.com"}`)
      .then(res => { 
        setSchool(res.data.School[0])
        setGuardian(res.data.Guardian[0])
        setStudents(res.data.Guardian[0].students_of_guardians)       
        setCurrentStudent(res.data.Guardian[0].students_of_guardians[0])  
                 
      })
      .catch(error => {        
        setError(error);
      })
      .finally(()=> {
      } )


    axios(`${apiNodes.messages}${"1"}`)
      .then(res => {
          setMsgLoaded(true)
          setMessages({ 
            teacher: res.data.teacher_messages, 
            guardian: res.data.guardian_messages
          })
          
      })
      .catch(error => {
        setMsgLoaded(false);
        console.log("ERROR",error)
      })
      .finally(()=> {
        setMsgLoaded(true);
      } )      

  }, [])


   return (
        <Container maxWidth="lg" className={classes.container}>
          <Helmet>
            <title>Bee-Hive | Teacher Dashboard</title>
          </Helmet>
          <Grid container spacing={3}>
            {/* School Info */}
            <Grid item xs={12} md={4} lg={4}>
              <Paper className={fixedHeightPaper}> 
                <SchoolInfo data={school}/>
              </Paper>
            </Grid>
            {/* Calendar */}
            <Grid item xs={12} md={4} lg={4}>
              <Paper className={fixedHeightPaper}>
                <Calendar
                  onChange={onChange}
                  value={value}
                />
              </Paper>
            </Grid>
            {/* Calendar */}
            <Grid item xs={12} md={4} lg={4}>
              <Paper className={fixedHeightPaper}>
                <Title children="Just Another Area"></Title>
                <Typography component="p" variant="h4">
                  * Todos
                </Typography>
                <Typography color="textSecondary" className="depositContext">
                * Todos
                </Typography>
                <Typography color="textSecondary" className="depositContext">
                * Todos
                </Typography>
              </Paper>
            </Grid>            
            {/* Parent Messages */}
            <Grid item xs={12} md={12} lg={12}>
              <Paper className={classes.paper}>
                { msgLoaded && <Messages from="guardian" title="Messages From Guardian" data={ messages.guardian } /> }
              </Paper>
            </Grid>    
            {/* Teacher Messages */}
            <Grid item xs={12} md={12} lg={12}>
              <Paper className={classes.paper}>
               { msgLoaded && <Messages from="teacher" title="Messages To Guardian" data={ messages.teacher } /> }
              </Paper>
            </Grid>
        
          </Grid>
        </Container>

  );
}