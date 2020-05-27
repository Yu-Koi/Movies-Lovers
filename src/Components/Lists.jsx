import React, { Fragment } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import HomeIcon from "@material-ui/icons/Home";
import MovieFilterIcon from "@material-ui/icons/MovieFilter";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import TheatersIcon from "@material-ui/icons/Theaters";
import { Link } from "react-router-dom";

const Lists = () => {
  return (
    <Fragment>
      <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <Link to="/">
              <HomeIcon />
            </Link>
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <Link to="/Premieres">
              <StarHalfIcon />
            </Link>
          </ListItemIcon>
          <ListItemText primary="Premieres" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <Link to="/Series">
              <MovieFilterIcon />
            </Link>
          </ListItemIcon>
          <ListItemText primary="Series" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <Link to="/Movies">
              <TheatersIcon />
            </Link>
          </ListItemIcon>
          <ListItemText primary="Movies" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <Link to="/MyFavourites">
              <FavoriteBorderIcon />
            </Link>
          </ListItemIcon>
          <ListItemText primary="My Favourites" />
        </ListItem>

        <Divider />
      </List>
    </Fragment>
  );
};

export default Lists;
