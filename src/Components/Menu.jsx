import React from "react";
import Lists from "./Lists.jsx";
import { makeStyles, Drawer, Divider } from "@material-ui/core";

const drawerWidth = 240;

const styles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
}));

export const Menu = (props) => {
  const classes = styles();

  return (
    <Drawer
      className={classes.drawer}
      
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
      variant={props.variant}
      open={props.open}
      onClose={props.onClose? props.onClose : null}
    >
      <div className={classes.toolbar}></div>
      <Divider />
      <Lists />
    </Drawer>
  );
};

export default Menu;
