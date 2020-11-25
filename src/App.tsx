import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import fetchIcons from "./api/fetchIcons";
import { IconData, IconDataProperties } from "./types";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  useTheme,
} from "@material-ui/core";
import useFetchIcons from "./hooks/useFetchIcons";

function App() {
  const { data, error, loading } = useFetchIcons();
  const theme = useTheme();

  return (
    <Container
      maxWidth="md"
      style={{ backgroundColor: theme.palette.background.paper }}
    >
      <Typography variant="h1">Icon cards</Typography>
      {loading || !data ? (
        <CircularProgress color="primary" />
      ) : (
        Object.entries(data).map(
          ([iconKey, { description, icon, link, name }]) => (
            <Card
              key={`card_${iconKey}`}
              style={{ margin: 20, maxWidth: "30vw" }}
            >
              <CardMedia
                title={iconKey}
                image={icon}
                component="img"
                style={{
                  width: "50%",
                  margin: "auto",
                }}
              />
              <CardContent>
                <Typography variant="h4" color="textPrimary">
                  {name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button href={link}>See more</Button>
              </CardActions>
            </Card>
          )
        )
      )}
    </Container>
  );
}

export default App;
