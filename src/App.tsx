import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { CircularProgress, useTheme } from "@material-ui/core";
import useFetchIcons from "./hooks/useFetchIcons";
import CardList from "./components/CardList";

function App() {
  const { data, error, loading } = useFetchIcons();
  const theme = useTheme();

  return (
    <Container
      maxWidth="md"
      style={{ backgroundColor: theme.palette.background.paper }}
    >
      <Typography variant="h1">Icon cards</Typography>
      {loading || Object.keys(data).length === 0 ? (
        <CircularProgress color="primary" />
      ) : (
        <CardList data={Object.values(data)} />
      )}
    </Container>
  );
}

export default App;
