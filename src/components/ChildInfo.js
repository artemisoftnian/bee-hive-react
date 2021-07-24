import React from 'react';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

export default function ChildInfo(props) {
  const child = props.data;

  return (
    <React.Fragment>
      <Title children={props.title}></Title>
      <Typography component="p" variant="h4">
        {child.Full_Name}
      </Typography>
      <Typography color="textSecondary" className="depositContext">
         Grade: {child.Grade}
      </Typography>
      <Typography color="textSecondary" className="depositContext">
         Semester: {child.Semester}
      </Typography>
    </React.Fragment>
  );
}