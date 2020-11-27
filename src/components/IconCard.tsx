import {
  Box,
  Button,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import React, { FC } from "react";
import { IconDataProperties } from "../types";
import CardMediaPlaceholder from "./CardMediaPlaceholder";
import MediaCard from "./MediaCard";

const IconCard: FC<IconDataProperties> = ({
  name,
  icon,
  description,
  link,
}) => {
  return (
    <MediaCard flexDirection="row" style={{ margin: 20 }}>
      <CardMediaPlaceholder
        title={name}
        image={icon}
        component="img"
        isLoading={false}
        maxWidth="md"
        position="first"
        style={{
          margin: "auto",
        }}
      ></CardMediaPlaceholder>
      <Box style={{ display: "flex", flexDirection: "column" }}>
        <CardContent
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <Typography variant="h4" color="textPrimary">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions
          style={{
            marginTop: "auto",
            justifyContent: "center",
          }}
        >
          <Button href={link}>See more</Button>
        </CardActions>
      </Box>
    </MediaCard>
  );
};

export default IconCard;
