import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';


const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function SchoolInfo(props) {
    const classes = useStyles();
    const school = props.data;
  return (
    <React.Fragment>
      <Title children="School Info"></Title>
      <Typography component="p" variant="h4">
        {school.Name}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        {school.Phone}
      </Typography>
      <div>
        <Link color="primary" href={ `mailto:${school.email}` } >
            {school.email}
        </Link>
      </div>
    </React.Fragment>
  );
}