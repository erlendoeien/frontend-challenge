import {
  Box,
  CardActions,
  CardProps,
  makeStyles,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import React, { FC } from "react";
import { IconDataProperties } from "../../types";
import FlexContent from "../CardComponents/FlexContent";
import CardMediaPlaceholder from "../CardComponents/CardMediaPlaceholder";
import FlexCard from "../CardComponents/FlexCard";
import { FlexDirection, MediaMaxWidth, UIPosition } from "../types";
import DisableOnClickButton from "../DisableOnClickButton";
import { positionToFlex } from "../../utils/positionToFlex";
import { mobileSize } from "../../constants";

export interface IconCardProps extends CardProps {
  data: IconDataProperties;
  iconPosition?: UIPosition;
  iconSize?: MediaMaxWidth;
}

interface StyleProps {
  cardFlexDirection: FlexDirection;
  isMobile: boolean;
}

const useStyles = makeStyles(() => ({
  content: {
    justifyContent: "center",
    flex: 1,
    flexWrap: "wrap",
  },
  media: ({ cardFlexDirection, isMobile }: StyleProps) => ({
    margin: cardFlexDirection === "column" || isMobile ? "auto" : "5%",
  }),
  actions: { marginTop: "auto", justifyContent: "center", minWidth: 100 },
  cardContentWrapper: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
}));

const IconCard: FC<IconCardProps> = ({
  data: { description, link, icon, name },
  iconPosition = "top",
  iconSize = "xs",
}) => {
  const isMobile = useMediaQuery(`(max-width:${mobileSize}px)`);
  const { cardFlexDirection, positionOrder } = positionToFlex(iconPosition);
  const classes = useStyles({ cardFlexDirection, isMobile });

  return (
    <FlexCard flexDirection={cardFlexDirection}>
      <CardMediaPlaceholder
        title={name}
        image={icon}
        component="img"
        isLoading={false}
        maxWidth={iconSize}
        position={positionOrder}
        classes={{ media: classes.media }}
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
