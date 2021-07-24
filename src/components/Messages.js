import React from 'react';
import Table from '@material-ui/core/Table';
import Title from './Title';
import MessagesTeacher from './MessagesTeacher'
import MessagesGuardian from './MessagesGuardian'


export default function Messages(props) {

  let rows = props.data;
  
  return (
    <React.Fragment>
      <Title>{props.title}</Title>
      <Table size="small">
        {
          props.from==="teacher" && rows ?
            <MessagesTeacher msg={rows}/> :
            <MessagesGuardian msg={rows} />
        } 
      </Table>

    </React.Fragment>
  );
}