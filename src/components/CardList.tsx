import { BoxProps, Box } from "@material-ui/core";
// eslint-disable-next-line
import React, { FC } from "react";
import { IconDataProperties } from "../types";
import IconCard from "./IconCard";
import { MediaMaxWidth, UIPosition } from "./types";

interface CardListProps extends BoxProps {
  data: any[];
  loading?: boolean;
  iconPosition: UIPosition;
  iconSize: MediaMaxWidth;
}

// Card list container for demo purposes mainly
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
      <Box {...props}>
        {[...new Array(3)].map((_, index) => (
          <IconCard
            key={`card_${index}`}
            data={{} as IconDataProperties}
            iconPosition={iconPosition}
            iconSize={iconSize}
            loading
          />
        ))}
      </Box>
    );

  if (data.length === 0 || data == null) return null;

  return (
    <Box {...props}>
      {data.map((values, index) => (
        <IconCard
          key={`card_${index}`}
          data={values as IconDataProperties}
          iconPosition={iconPosition}
          iconSize={iconSize}
        />
      ))}
    </Box>
  );
};

export default CardList;
