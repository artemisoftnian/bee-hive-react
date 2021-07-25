import React from 'react';
import PropTypes from 'prop-types';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import IconButton from '@material-ui/core/IconButton';

import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';


export default function MessagesGuardian(props) {  
  const { msg, ...rest } = props;
 
  return (
     <React.Fragment 
        {...rest}
     >
        <TableHead>
          <TableRow>
            <TableCell>Teacher</TableCell>
            <TableCell>Message</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {msg.map((msg) => (
            <TableRow key={msg.id}>
              <TableCell>{msg.professor_data.name}</TableCell>
              <TableCell>{msg.Message}</TableCell>
              <TableCell>{
                    msg.Readed ?
                    <IconButton><VisibilityOutlinedIcon  className="satisfied-icon" /></IconButton> :
                    <IconButton><VisibilityOffOutlinedIcon className="un-satisfied-icon"/></IconButton>
                  }
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </React.Fragment>

  );
}

MessagesGuardian.propTypes = {
  msg: PropTypes.array
};