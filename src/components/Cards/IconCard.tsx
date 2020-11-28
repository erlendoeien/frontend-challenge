import { Box, CardActions, CardProps, Typography } from "@material-ui/core";
import React, { FC } from "react";
import { IconDataProperties } from "../../types";
import FlexContent from "../CardComponents/FlexContent";
import CardMediaPlaceholder from "../CardComponents/CardMediaPlaceholder";
import FlexCard from "../CardComponents/FlexCard";
import { FlexDirection, MediaMaxWidth } from "../types";
import DisableOnClickButton from "../DisableOnClickButton";

type Position = "top" | "bottom" | "left" | "right";
export interface IconCardProps extends CardProps {
  data: IconDataProperties;
  iconPosition?: Position;
  iconSize?: MediaMaxWidth;
}

const positionToFlex = (position: Position) => {
  let cardFlexDirection: FlexDirection = "column";
  let positionOrder: "first" | "last" = "first";
  switch (position) {
    case "left":
      positionOrder = "last";
      cardFlexDirection = "row";
      break;
    case "right":
      positionOrder = "last";
      cardFlexDirection = "row";
      break;
    case "bottom":
      cardFlexDirection = "column";
      positionOrder = "last";
      break;
    default:
      positionOrder = "first";
      cardFlexDirection = "column";
  }
  return { cardFlexDirection, positionOrder };
};

const IconCard: FC<IconCardProps> = ({
  data: { description, link, icon, name },
  iconPosition = "top",
  iconSize = "sm",
}) => {
  const { cardFlexDirection, positionOrder } = positionToFlex(iconPosition);
  return (
    <FlexCard flexDirection={cardFlexDirection} style={{ margin: 20 }}>
      <CardMediaPlaceholder
        title={name}
        image={icon}
        component="img"
        isLoading={false}
        maxWidth={iconSize}
        position={positionOrder}
        style={{
          margin: "auto",
        }}
      />
      <Box style={{ display: "flex", flexDirection: "column" }}>
        <FlexContent
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
        </FlexContent>
        <CardActions
          style={{
            marginTop: "auto",
            justifyContent: "center",
          }}
        >
          <DisableOnClickButton href={link}>See more</DisableOnClickButton>
        </CardActions>
      </Box>
    </FlexCard>
  );
};

export default IconCard;
