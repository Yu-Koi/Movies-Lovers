import { makeStyles } from "@material-ui/styles";

const centeredStyleObj = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default makeStyles({
  container: {
    height: "100vh",
    flexDirection: "column",
    ...centeredStyleObj,
  },
  cardContainer: {
    flexDirection: "column",
    width: "400",
    height: "800",
    padding: "2rem",
    ...centeredStyleObj,
  },
  title: {
    fontSize: "4rem",
  },
  titleGridContainer: {
    flexDirection: "column",
    ...centeredStyleObj,
  },
  inputField: {
    width: "90%",
  },
  
});
