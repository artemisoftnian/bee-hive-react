import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Avatar, Typography } from '@material-ui/core';
import AvatarBee from '../avatar-bee.png'


const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: 'fit-content'
    },
    avatar: {
      width: 60,
      height: 60
    },
    name: {
      marginTop: theme.spacing(1)
    }
  }));

export default function ProfileBlock(props){
    const { className, ...rest } = props;
    const classes = useStyles();
  
    const user = {
      name: 'Test User',
      avatar: AvatarBee,
      bio: 'Student Guardian'
    };

    return (
        <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        <Avatar
          alt="Person"
          className={classes.avatar}
          component={RouterLink}
          src={user.avatar}
          to="/settings"
        />
        <Typography
          className={classes.name}
          variant="h4"
        >
          {user.name}
        </Typography>
        <Typography variant="body2">{user.bio}</Typography>
      </div>
    )
}

ProfileBlock.propTypes = {
    className: PropTypes.string
};