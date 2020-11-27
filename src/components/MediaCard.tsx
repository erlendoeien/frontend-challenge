import { Card, CardProps, makeStyles } from "@material-ui/core";
import React, { FC } from "react";
import CardMediaPlaceholder from "./CardMediaPlaceholder";
import { MediaMaxWidth } from "./types";

/**
 * Should be the card extenting regular card, but takes in media source,
 * placement and size, The card container with flex depending on the placement,
 * size is set by prop, default medium, small
 * Be able to change what small, medium or default is by css
 * Be able to alter margin/alignItem top or bottom
 */

// type MediaPosition = "top" | "right" | "bottom" | "left";
type CardLayout = "vertical" | "horizontal";

interface MediaCardProps extends CardProps {
  mediaPosition?: CardLayout;
}

const MediaCard: FC<MediaCardProps> = ({ mediaPosition, style, ...props }) => {
  let cardLayout: "row" | "column";
  //Set flexOrder, others are in order of JSX-elements
  if (mediaPosition === "vertical") {
    cardLayout = "column";
  } else {
    cardLayout = "row";
  }
  // console.log(mediaPlacement);

  // const classes = useStyles({ mediaPlacement: "" + mediaPlacement });

  return (
    <Card
      style={{
        display: "flex",
        flexDirection: cardLayout,
        ...style,
      }}
      {...props}
    ></Card>
  );
};

export default MediaCard;
