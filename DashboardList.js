import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import { Divider, Button } from '@material-ui/core';
import {Link} from 'react-router-dom';
import addMembers from './AddMembers.js'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
  
      className={classes.root}
    >
      <ListItem button>
        <ListItemText primary="Activity" />
      </ListItem>

      <ListItem button>
        {/* <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon> */}
        <ListItemText primary="Recognition" />
      </ListItem>

      <ListItem button>
        <ListItemText primary="Claim reward" />
      </ListItem>

      <ListItem button onClick={handleClick}>
        <ListItemText primary="Organisation" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <List>
              <ListItem>
                <Button>
              <ListItemText primary="Members" />
              </Button>
            </ListItem >
            <ListItem>
              <Button>
            <ListItemText primary="Survey/Poll" />
            </Button>
            </ListItem>
            </List>
            </ListItem>
            </List>
            </Collapse>
           
            
      <Divider/>

      <ListItem button>
        <ListItemText primary="Announcements" />
      </ListItem>

      <ListItem button>
        <ListItemText primary="Nominations" />
      </ListItem>

      <ListItem Button variant="outline" color="secondary" component={Link} to="/AddMembers">
        <ListItemText primary="Add members" />
      </ListItem>

      <ListItem button>
        <ListItemText primary="Polls" />
      </ListItem>

      <ListItem button>
        <ListItemText primary="Send personal E-card" />
      </ListItem>
 
       
      
   </List>
  );
}