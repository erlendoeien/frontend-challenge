import { CardProps, makeStyles, Typography } from "@material-ui/core";
import React, { FC } from "react";
import CardMediaPlaceholder from "../CardComponents/CardMediaPlaceholder";
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
}

const useLoadingStyles = makeStyles(() => ({
  textLoading: {
    height: "1em",
    backgroundColor: "#CCC",
  },
  headerLoading: {
    width: "80%",
    backgroundColor: "#BBB",
  },
}));

const LoadingIconCard: FC<LoadingIconCardProps> = ({
  cardFlexDirection,
  iconSize,
  positionOrder,
  iconCardClasses,
  numberOfLines = 3,
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
      <CardMediaPlaceholder
        isLoading
        component="img"
        maxWidth={iconSize}
        position={positionOrder}
        classes={{ media: iconCardClasses.cardMedia }}
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
            style={{ width: `${20 + Math.random() * 40}%` }}
          />
        ))}
      </FlexContent>
    </FlexCard>
  );
};

export default LoadingIconCard;
