import AssignmentIcon from '@material-ui/icons/Assignment';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import { Typography } from '@material-ui/core';
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

export default function StudentList(props){
    const { navBarItems, className, ...rest } = props;
    const classes = useStyles();

    return (
        <List
            {...rest}
            className={clsx(classes.root, className)}
        >
           <Typography variant="h5" style={{textAlign:"center"}}>Students at charge</Typography> 
           <ListItem
            className={classes.item}
            disableGutters
          >
            <Button
              activeClassName={classes.active}
              className={classes.button}
            >
              <div className={classes.icon}><AssignmentIcon /></div>
              Dante Whitmire
            </Button>
          </ListItem>
          <ListItem
            className={classes.item}
            disableGutters
          >
            <Button
              activeClassName={classes.active}
              className={classes.button}
            >
              <div className={classes.icon}><AssignmentIcon /></div>
              Jeniffer Wood
            </Button>
          </ListItem>          
        </List>        

    )
}