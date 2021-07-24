import React from 'react';
import PropTypes from 'prop-types';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';

import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import SentimentDissatisfiedOutlinedIcon from '@material-ui/icons/SentimentDissatisfiedOutlined';
import DraftsOutlinedIcon from '@material-ui/icons/DraftsOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';

export default function MessagesTeacher(props) {
  const { msg , ...rest} = props;

  return (
    <React.Fragment 
        {...rest}
    >
        <TableHead>
          <TableRow>
            <TableCell>Type</TableCell>
            <TableCell>Subject</TableCell>
            <TableCell>Teacher</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Message</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {msg.map((msg) => (
            <TableRow key={msg.id}>
              <TableCell>
                  {
                    msg.Merit_Demerit==="Merit" ?
                    <SentimentSatisfiedOutlinedIcon  className="satisfied-icon" fontSize="large" /> :
                    <SentimentDissatisfiedOutlinedIcon  className="un-satisfied-icon" fontSize="large"/>
                  }
              </TableCell>
              <TableCell>{ msg.professor_data.class_subject[0] }</TableCell>
              <TableCell>{ msg.professor_data.name }</TableCell>
              <TableCell>{ new Date(msg.Date).toDateString()}</TableCell>
              <TableCell>{ msg.Message }</TableCell>
              <TableCell>{
                    msg.Readed ?
                    <IconButton><DraftsOutlinedIcon  className="satisfied-icon" /></IconButton> :
                    <IconButton><MailOutlineOutlinedIcon className="un-satisfied-icon"/></IconButton>
                  }
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </React.Fragment>

  );
}


MessagesTeacher.propTypes = {
  msg: PropTypes.array
};