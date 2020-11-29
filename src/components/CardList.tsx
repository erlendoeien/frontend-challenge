import { List, ListProps } from "@material-ui/core";
import React, { FC } from "react";
import { IconDataProperties } from "../types";
import IconCard from "./IconCard";

interface CardListProps extends ListProps {
  data: any[];
}

const CardList: FC<CardListProps> = ({ data, ...props }) => {
  if (data.length == 0 || data == null) return null;
  //TODO: Take in ListItem, don't actually need this component
  // Just use List directly in app

  return (
    <List {...props}>
      {data.map((values, index) => (
        <IconCard
          key={`card_${index}`}
          data={values as IconDataProperties}
          iconPosition="left"
          iconSize="sm"
        />
      ))}
    </List>
  );
};

export default CardList;
