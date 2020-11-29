import { CardProps, makeStyles, Theme, Typography } from "@material-ui/core";
// eslint-disable-next-line
import React, { FC } from "react";
import FlexCardMedia from "../CardComponents/FlexCardMedia";
import FlexCard from "../CardComponents/FlexCard";
import FlexContent from "../CardComponents/FlexContent";
import { FlexDirection, ItemOrder, MediaMaxWidth } from "../types";
import useCardIconStyles from "./Styles";

interface LoadingIconCardProps extends CardProps {
  cardFlexDirection: FlexDirection;
  iconSize: MediaMaxWidth;
  positionOrder: ItemOrder;
  iconCardClasses: ReturnType<typeof useCardIconStyles>;
  numberOfLines?: number;
  contentWidth?: number;
}

const useLoadingStyles = makeStyles((theme: Theme) => ({
  loadingMedia: {
    padding: theme.spacing(2),
  },
  textLoading: {
    height: "1em",
    backgroundColor: "#CCC",
  },
  headerLoading: {
    width: "80%",
    backgroundColor: "#BBB",
    marginBlock: theme.spacing(2),
  },
}));

/**
 * Loading card, primarily for IconCards with support for
 * fill content and setting it's width
 */
const LoadingIconCard: FC<LoadingIconCardProps> = ({
  cardFlexDirection,
  iconSize,
  positionOrder,
  iconCardClasses,
  numberOfLines = 3,
  contentWidth = 100,
  ...props
}) => {
  const loadingClasses = useLoadingStyles();

  return (
    <FlexCard
      flexDirection={cardFlexDirection}
      style={{
        backgroundImage: `url(${require("../../assets/images/loaderFill.svg")})`,
      }}
      {...props}
    >
      <FlexCardMedia
        component="img"
        maxWidth={iconSize}
        position={positionOrder}
        className={loadingClasses.loadingMedia}
        classes={{
          media: iconCardClasses.cardMedia,
        }}
      />
      <FlexContent
        flexDirection="column"
        classes={{ root: iconCardClasses.content }}
      >
        <Typography
          gutterBottom
          variant="h4"
          className={`${loadingClasses.textLoading} ${loadingClasses.headerLoading}`}
        />
        {[...new Array(numberOfLines)].map((_, index) => (
          <Typography
            key={`loading_line_${index}`}
            variant="subtitle1"
            color="textSecondary"
            gutterBottom
            className={loadingClasses.textLoading}
            // Createstyles will only generate single random weight
            style={{ width: contentWidth + Math.random() * contentWidth }}
          />
        ))}
      </FlexContent>
    </FlexCard>
  );
};

export default LoadingIconCard;
