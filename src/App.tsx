import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {
  Button,
  ButtonGroup,
  CircularProgress,
  Divider,
  makeStyles,
} from "@material-ui/core";
import useFetchIcons from "./hooks/useFetchIcons";
import CardList from "./components/CardList";
import AlertSnackbar from "./components/AlertSnackbar";
import ErrorCard from "./components/ErrorCard";
import IconCard from "./components/IconCard";
import { IconDataProperties } from "./types";
import { MediaMaxWidth, UIPosition } from "./components/types";

const useStyle = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

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
      <ButtonGroup style={{ marginBottom: 16 }}>
        <Button
          value="xs"
          disabled={iconSize === "xs"}
          onClick={changeIconSize}
        >
          xs
        </Button>
        <Button
          value="sm"
          disabled={iconSize === "sm"}
          onClick={changeIconSize}
        >
          sm
        </Button>
        <Button
          value="md"
          disabled={iconSize === "md"}
          onClick={changeIconSize}
        >
          md
        </Button>
        <Button
          value="lg"
          disabled={iconSize === "lg"}
          onClick={changeIconSize}
        >
          lg
        </Button>
        <Button
          value="xl"
          disabled={iconSize === "xl"}
          onClick={changeIconSize}
        >
          xl
        </Button>
      </ButtonGroup>

      <Typography variant="h5">Icon position</Typography>
      <ButtonGroup style={{ marginBottom: 16 }}>
        <Button
          value="top"
          disabled={iconPos === "top"}
          onClick={changeIconPos}
        >
          top
        </Button>
        <Button
          value="right"
          disabled={iconPos === "right"}
          onClick={changeIconPos}
        >
          right
        </Button>
        <Button
          value="bottom"
          disabled={iconPos === "bottom"}
          onClick={changeIconPos}
        >
          bottom
        </Button>
        <Button
          value="left"
          disabled={iconPos === "left"}
          onClick={changeIconPos}
        >
          left
        </Button>
      </ButtonGroup>

      <Typography variant="h3">Static loading icon card</Typography>
      <Divider style={{ minWidth: "50%" }} />
      <IconCard
        data={{} as IconDataProperties}
        loading
        iconPosition={iconPos}
        iconSize={iconSize}
      />
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
