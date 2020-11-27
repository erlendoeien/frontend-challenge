import { Box, Button, CardActions, Typography } from "@material-ui/core";
import React, { FC } from "react";
import { IconDataProperties } from "../../types";
import ContentLayout from "../CardComponents/ContentLayout";
import CardMediaPlaceholder from "../CardComponents/CardMediaPlaceholder";
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
        <ContentLayout
          flexDirection="column"
          style={{
            justifyContent: "center",
            flex: 1,
            flexWrap: "wrap",
          }}
        >
          <Typography variant="h4" color="textPrimary">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {description}
          </Typography>
        </ContentLayout>
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
