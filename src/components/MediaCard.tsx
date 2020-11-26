import { Card, CardProps } from "@material-ui/core";
import React, { FC } from "react";

/**
 * Should be the card extenting regular card, but takes in media source,
 * placement and size, The card container with flex depending on the placement,
 * size is set by prop, default medium, small
 * Be able to change what small, medium or default is by css
 * Be able to alter margin/alignItem top or bottom
 */

type MediaPosition = "top" | "right" | "bottom" | "left";

interface MediaCardProps extends CardProps {
  mediaPosition?: MediaPosition;
}

const MediaCard: FC<MediaCardProps> = ({
  mediaPosition = "top",
  style,
  ...props
}) => {
  const mediaPlacement =
    mediaPosition === "top" || mediaPosition === "bottom"
      ? "column-reverse"
      : "row";
  return (
    <Card
      style={{
        display: "flex",
        flexDirection: mediaPlacement,
        ...style,
      }}
      {...props}
    ></Card>
  );
};

export default MediaCard;
