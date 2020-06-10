import React, { useState } from "react";
import { auth } from "../firebase";
import { Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { Container, Typography, Card } from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";

import Styles from "./Styles";
// validaciones
import useValidation from "../hooks/useValidation";
import validateSingInAccount from "../validate/validateSingInAccount";

const STATE_INICIAL = {
  email: "",
  password: "",
};

const Login = (props) => {
  const [error, saveError] = useState(null);

  const singInAccount = async () => {
    console.log("Esta logeando");

    try {
      const res = await auth.signInWithEmailAndPassword(email, password);
      props.history.push("/");
      console.log(res.user);
    } catch (error) {
      console.error("Hubo un error al autenticar al usuario", error.message);
      saveError(error.message);
    }
  };

  const {
    values,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useValidation(STATE_INICIAL, validateSingInAccount, singInAccount);

  const { email, password } = values;

  const classes = Styles();
  return (
    <Container className={classes.container}>
      <Card className={classes.cardContainer}>
        <Grid container className={classes.titleGridContainer}>
          <Grid item className={classes.title}>
            <Typography variant="h4">Login</Typography>
          </Grid>
          <Grid item className={classes.inputField}>
            <form className={classes.root} onSubmit={handleSubmit} noValidate>
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

              <input type="submit" value="Iniciar Sesión" />

              <Link to="/CreateAccount">
                <button>¿No tienes cuenta?</button>
              </Link>
            </form>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default withRouter(Login);
