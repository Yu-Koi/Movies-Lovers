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
            <Link to="/Estrenos">
              <StarHalfIcon />
            </Link>
          </ListItemIcon>
          <ListItemText primary="Estrenos" />
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
            <Link to="/Peliculas">
              <TheatersIcon />
            </Link>
          </ListItemIcon>
          <ListItemText primary="Peliculas" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <Link to="/MisFavoritas">
              <FavoriteBorderIcon />
            </Link>
          </ListItemIcon>
          <ListItemText primary="Mis Favoritas" />
        </ListItem>

        <Divider />
      </List>
    </Fragment>
  );
};

export default Lists;
