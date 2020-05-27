import React from "react";
import { Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { Container, Typography, Card } from "@material-ui/core";

import Styles from "./Styles";
// validaciones
import useValidation from "../hooks/useValidation";
import validateCreateAccount from "../validate/validateCreateAccount";

const STATE_INICIAL = {
  name: "",
  email: "",
  password: "",
};

const CreateAccount = () => {
  const {
    values,
    errors,
    submitForm,
    handleChange,
    handleSubmit,
  } = useValidation(STATE_INICIAL, validateCreateAccount, createAccount);

  const { name, email, password } = values;

  function createAccount() {
    console.log("creando cuenta...");
  }

  const classes = Styles();
  return (
    <Container className={classes.container}>
      <Card className={classes.cardContainer}>
        <Grid container className={classes.titleGridContainer}>
          <Grid item className={classes.title}>
            <Typography variant="h4">Crear Cuenta</Typography>
          </Grid>
          <Grid item className={classes.inputField}>
            <form className={classes.root} onSubmit={handleSubmit} noValidate>
              <div>
                <TextField
                  id="name"
                  label="Tu Nombre"
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                />
              </div>
              {errors.name && <p>{errors.name}</p>}

              <div>
                <TextField
                  id="email"
                  label="Tu Email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              {errors.email && <p>{errors.email}</p>}

              <div>
                <TextField
                  id="password"
                  label="Tu Password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </div>
              {errors.password && <p>{errors.password}</p>}

              <input type="submit" value="Crear Cuenta" />
            </form>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default CreateAccount;
