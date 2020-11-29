import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { CircularProgress, makeStyles, useTheme } from "@material-ui/core";
import useFetchIcons from "./hooks/useFetchIcons";
import CardList from "./components/CardList";
import AlertSnackbar from "./components/AlertSnackbar";
import ErrorCard from "./components/ErrorCard";

const useStyle = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

function App() {
  const { data, error, loading } = useFetchIcons();
  const classes = useStyle();

  return (
    <Container maxWidth="md" className={classes.root}>
      <Typography variant="h1">Icon cards</Typography>
      {(loading || Object.keys(data).length === 0) && (
        <CircularProgress color="primary" style={{ margin: "auto" }} />
      )}
      {error ? (
        <ErrorCard error={error} />
      ) : (
        <CardList data={Object.values(data)} />
      )}
      <AlertSnackbar
        severity="error"
        initiallyOpen={error != null}
        message={error?.message}
      />
    </Container>
  );
}

export default App;
