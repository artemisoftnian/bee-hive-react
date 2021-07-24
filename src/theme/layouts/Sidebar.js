import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer } from '@material-ui/core';

import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import ProfileBlock from '../../components/ProfileBlock';
import SidebarNavigation from '../../components/SidebarNavigation';
import StudentList from '../../components/StudentList';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';


const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

export default function Sidebar(props){
  const { open, variant, onClose, className, ...rest } = props;

  const classes = useStyles();
  const navBarItems = [
    {
      href: '/Profile',
      icon: <DashboardOutlinedIcon />,
      title: 'Dashboard'
    },
    {
      href: '/teacher',
      icon: <DashboardOutlinedIcon />,
      title: 'Teacher Dashboard'
    },  
    {
      href: '/app/message',
      icon: <MessageOutlinedIcon />,
      title: 'New Message'
    },        
    {
      href: '/settigs',
      icon: <SettingsOutlinedIcon />,
      title: 'Settings'
    },
    {
      href: '/login',
      icon: <LockOutlinedIcon />,
      title: 'Login'
    },
    {
      href: '/signup',
      icon: <PersonAddOutlinedIcon />,
      title: 'Register'
    },
    {
      href: '/404',
      icon: <ErrorOutlineOutlinedIcon />,
      title: '404 Page'
    }
  ];

  return (
    <Drawer
      onClose={onClose}
      open={open}
      variant={variant}
      anchor="left"
      classes={{ paper: classes.drawer }}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        <ProfileBlock />
        <Divider className={classes.divider} />
        <SidebarNavigation  
          navBarItems={navBarItems} 
          className={classes.nav}          
        />
        <Divider className={classes.divider} />
        <StudentList />
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};