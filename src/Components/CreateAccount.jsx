import React from "react";
import { Grid } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import { Container, Typography, Card } from "@material-ui/core";

import Styles from "./Styles";




const CreateAccount = () => {
    
  const classes = Styles();
  return (
    <Container className={classes.container}>
      <Card className={classes.cardContainer}>
        <Grid container className={classes.titleGridContainer}>
          <Grid item className={classes.title}>
            <Typography variant="h4">Crear Cuenta</Typography>
          </Grid>
          <Grid item className={classes.inputField}>
            <form className={classes.root}>
              {/* <div>
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Tu Nombre"
                  name="name"
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Tu Email"
                  name="email"
                />
              </div>

              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Tu Password"
                  name="password"
                />
              </div> */}

              <div>
              <TextField id="name" label="Tu Nombre" type="text" name="name" />
              </div>

              <div>
              <TextField id="email" label="Tu Email" type="email" name="email" />
              </div>
              
              <div>
              <TextField id="password" label="Tu Password" type="password" name="password" />
              </div>

              <input type="submit" value="Crear Cuenta" />
            </form>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default CreateAccount;
