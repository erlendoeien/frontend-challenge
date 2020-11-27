import {
  CardContent,
  Button,
  Card,
  CardActions,
  List,
  Typography,
  ListProps,
} from "@material-ui/core";
import React, { FC } from "react";
import { IconDataProperties } from "../types";
import CardMediaPlaceholder from "./CardMediaPlaceholder";
import MediaCard from "./MediaCard";

interface CardListProps extends ListProps {
  data: IconDataProperties[];
}

const CardList: FC<CardListProps> = ({ data, ...props }) => {
  if (data.length == 0 || data == null) return null;
  return (
    <List {...props}>
      {data.map(({ description, icon, link, name }) => (
        <MediaCard
          key={`card_${name}`}
          mediaPosition="horizontal"
          style={{ margin: 20 }}
        >
          <CardMediaPlaceholder
            title={name}
            image={icon}
            component="img"
            isLoading={false}
            maxWidth="sm"
            position="first"
            // style={{
            //   margin: "auto",
            // }}
          ></CardMediaPlaceholder>
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
        </MediaCard>
      ))}
    </List>
  );
};

export default CardList;
