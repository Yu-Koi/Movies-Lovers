import React, { useState } from "react";
import { auth, db } from "../firebase";
import { Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { Container, Typography, Card } from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";

import Styles from "./Styles";
// validaciones
import useValidation from "../hooks/useValidation";
import validateCreateAccount from "../validate/validateCreateAccount";

const STATE_INICIAL = {
  name: "",
  email: "",
  password: "",
};

const CreateAccount = (props) => {
  const [error, saveError] = useState(null);

  const register = async () => {
    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);
      console.log(res);
      await db.collection("users").doc(res.user.email).set({
        name: name,
        email: email,
        password: password,
      });

      props.history.push("/");
    } catch (error) {
      console.error("Hubo un error al crear el usuario", error.message);
      saveError(error.message);
    }
  };

  const {
    values,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useValidation(STATE_INICIAL, validateCreateAccount, register);

  const { name, email, password } = values;

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
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
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
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
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
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              {errors.password && <p>{errors.password}</p>}
              {error && <p>{error}</p>}

              <input type="submit" value="Crear Cuenta" />

              <Link to="/Login">
                <button bgcolor="true">¿ya estas registrado?</button>
              </Link>
            </form>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default withRouter(CreateAccount);
