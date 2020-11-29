import {
  Box,
  CardActions,
  CardProps,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import React, { FC } from "react";
import { IconDataProperties } from "../../types";
import FlexContent from "../CardComponents/FlexContent";
import CardMediaPlaceholder from "../CardComponents/CardMediaPlaceholder";
import FlexCard from "../CardComponents/FlexCard";
import { MediaMaxWidth, UIPosition } from "../types";
import DisableOnClickButton from "../DisableOnClickButton";
import { positionToFlex } from "../../utils/positionToFlex";
import { mobileSize } from "../../constants";
import useCardIconStyles from "./Styles";
import LoadingIconCard from "./LoadingIconCard";

export interface IconCardProps extends CardProps {
  data: IconDataProperties;
  loading?: boolean;
  error?: Error;
  iconPosition?: UIPosition;
  iconSize?: MediaMaxWidth;
}

const IconCard: FC<IconCardProps> = ({
  data: { description, link, icon, name },
  iconPosition = "top",
  iconSize = "xs",
  loading,
  ...props
}) => {
  const isMobile = useMediaQuery(`(max-width:${mobileSize}px)`);
  const { cardFlexDirection, positionOrder } = positionToFlex(iconPosition);
  const classes = useCardIconStyles({
    cardFlexDirection,
    isMobile,
  });

  if (loading)
    return (
      <LoadingIconCard
        cardFlexDirection={cardFlexDirection}
        iconSize={iconSize}
        positionOrder={positionOrder}
        iconCardClasses={classes}
      />
    );

  return (
    <FlexCard flexDirection={cardFlexDirection} {...props}>
      <CardMediaPlaceholder
        title={name}
        image={icon}
        component="img"
        isLoading={false}
        maxWidth={iconSize}
        position={positionOrder}
        classes={{ media: classes.cardMedia }}
      />
      <Box className={classes.cardContentWrapper}>
        <FlexContent flexDirection="column" classes={{ root: classes.content }}>
          <Typography gutterBottom variant="h4" color="textPrimary">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {description}
          </Typography>
        </FlexContent>
        <CardActions classes={{ root: classes.actions }}>
          <DisableOnClickButton href={link}>See more</DisableOnClickButton>
        </CardActions>
      </Box>
    </FlexCard>
  );
};

export default IconCard;
