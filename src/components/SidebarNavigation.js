import React, { forwardRef } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { List, ListItem, Button, colors } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {},
    item: {
      display: 'flex',
      paddingTop: 0,
      paddingBottom: 0
    },
    button: {
      color: colors.blueGrey[800],
      padding: '10px 8px',
      justifyContent: 'flex-start',
      textTransform: 'none',
      letterSpacing: 0,
      width: '100%',
      fontWeight: theme.typography.fontWeightMedium
    },
    icon: {
      color: theme.palette.icon,
      width: 24,
      height: 24,
      display: 'flex',
      alignItems: 'center',
      marginRight: theme.spacing(1)
    },
    active: {
      color: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightMedium,
      '& $icon': {
        color: theme.palette.primary.main
      }
    }
}));

const CustomRouterLink = forwardRef((props, ref) => (
    <div
        ref={ref}
        style={{ flexGrow: 1 }}
    >
        <RouterLink {...props} />
    </div>
));  

export default function SidebarNavigation(props){
    const { navBarItems, className, ...rest } = props;

    const classes = useStyles();
  
    return (
      <List
        {...rest}
        className={clsx(classes.root, className)}
      >
        {navBarItems.map(navItem => (
          <ListItem
            className={classes.item}
            disableGutters
            key={navItem.title}
          >
            <Button
              activeClassName={classes.active}
              className={classes.button}
              component={CustomRouterLink}
              to={navItem.href}
            >
              <div className={classes.icon}>{navItem.icon}</div>
              {navItem.title}
            </Button>
          </ListItem>
        ))}
      </List>
    );
}

SidebarNavigation.propTypes = {
    className: PropTypes.string,
    pages: PropTypes.array.isRequired
};