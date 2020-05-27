import React, { Fragment} from "react";
import Appbar from "./Appbar.jsx";
import Menu from "./Menu.jsx";
import { makeStyles, Hidden } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const Layout = () => {
  const classes = useStyles()
  const [openDrawer, setOpenDrawer] = React.useState(false)

  const actionOpen = () => {
    console.log("Hooooolaaa")
    setOpenDrawer(!openDrawer)
  }


  return (
    <Fragment>
      <div className={classes.root}>
        <Appbar actionOpen={actionOpen} />
        <Hidden xsDown>
          <Menu
             variant="permanent"
             open={true}
          />
        </Hidden>

        <Hidden smUp>
          <Menu
             variant="temporary"
             open={openDrawer}
             onClose={actionOpen}
          />
        </Hidden>
        <div className={classes.content}>
          <div className={classes.toolbar}></div>
          
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;