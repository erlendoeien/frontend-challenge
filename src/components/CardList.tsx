import { List, ListProps } from "@material-ui/core";
import React, { FC } from "react";
import { IconDataProperties } from "../types";
import IconCard from "./IconCard";
import { MediaMaxWidth, UIPosition } from "./types";

interface CardListProps extends ListProps {
  data: any[];
  loading?: boolean;
  iconPosition: UIPosition;
  iconSize: MediaMaxWidth;
}

const CardList: FC<CardListProps> = ({
  data,
  loading,
  iconPosition,
  iconSize,
  ...props
}) => {
  // Load fixed amount of placeholders when loading
  if (loading)
    return (
      <List {...props}>
        {[...new Array(3)].map((_, index) => (
          <IconCard
            key={`card_${index}`}
            data={{} as IconDataProperties}
            iconPosition={iconPosition}
            iconSize={iconSize}
            loading
          />
        ))}
      </List>
    );

  if (data.length === 0 || data == null) return null;
  //TODO: Take in ListItem, don't actually need this component
  // Just use List directly in app

  return (
    <List {...props}>
      {data.map((values, index) => (
        <IconCard
          key={`card_${index}`}
          data={values as IconDataProperties}
          iconPosition={iconPosition}
          iconSize={iconSize}
        />
      ))}
    </List>
  );
};

export default CardList;
