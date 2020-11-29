// eslint-disable-next-line
import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { CircularProgress, Divider, makeStyles } from "@material-ui/core";
import useFetchIcons from "./hooks/useFetchIcons";
import CardList from "./components/CardList";
import AlertSnackbar from "./components/AlertSnackbar";
import ErrorCard from "./components/ErrorCard";
import IconCard from "./components/IconCard";
import { IconDataProperties } from "./types";
import { MediaMaxWidth, UIPosition } from "./components/types";
import DemoButtonGroup from "./components/DemoButtonGroup";

const useStyle = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const ICONSIZES: MediaMaxWidth[] = ["xs", "sm", "md", "lg", "xl"];
const ICONPOSITIONS: UIPosition[] = ["top", "right", "bottom", "left"];

function App() {
  const { data, error, loading } = useFetchIcons();

  //Demo state
  const [iconSize, setIconSize] = useState<MediaMaxWidth>("sm");
  const [iconPos, setIconPos] = useState<UIPosition>("left");

  const classes = useStyle();

  const changeIconSize = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIconSize(event.currentTarget.value as MediaMaxWidth);
  };

  const changeIconPos = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIconPos(event.currentTarget.value as UIPosition);
  };

  return (
    <Container maxWidth="md" className={classes.root}>
      <Typography variant="h1">Icon cards</Typography>

      <Typography variant="h5">Icon sizes</Typography>
      <DemoButtonGroup
        currentState={iconSize}
        onClickHandler={changeIconSize}
        names={ICONSIZES}
        values={ICONSIZES}
        style={{ marginBottom: 16 }}
      />

      <Typography variant="h5">Icon position</Typography>
      <DemoButtonGroup
        currentState={iconPos}
        onClickHandler={changeIconPos}
        names={ICONPOSITIONS}
        values={ICONPOSITIONS}
        style={{ marginBottom: 16 }}
      />

      <Typography variant="h3">Static loading icon card</Typography>
      <Divider style={{ minWidth: "50%" }} />
      <IconCard
        data={{} as IconDataProperties}
        loading
        iconPosition={iconPos}
        iconSize={iconSize}
      />
      <Typography variant="h3">Fetched icon cards</Typography>
      <Divider style={{ minWidth: "50%" }} />

      {(loading || Object.keys(data).length === 0) && (
        <CircularProgress color="primary" style={{ margin: "auto" }} />
      )}
      {error ? (
        <ErrorCard error={error} />
      ) : (
        <CardList
          data={Object.values(data)}
          iconPosition={iconPos}
          iconSize={iconSize}
          loading={loading}
        />
      )}
      <Typography variant="h3">Error card</Typography>
      <Divider style={{ minWidth: "50%" }} />
      <ErrorCard error={new Error("Demo error")} />
      <AlertSnackbar
        severity="error"
        initiallyOpen={error != null}
        message={error?.message}
      />
    </Container>
  );
}

export default App;
