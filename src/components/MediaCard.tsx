import { Card, CardProps, makeStyles, useMediaQuery } from "@material-ui/core";
import React, { FC } from "react";
import { mobileSize } from "../constants";
import { FlexDirection } from "./types";

/**
 * Should be the card extenting regular card, but takes in media source,
 * placement and size, The card container with flex depending on the placement,
 * size is set by prop, default medium, small
 * Be able to change what small, medium or default is by css
 * Be able to alter margin/alignItem top or bottom
 */

interface MediaCardProps extends CardProps {
  flexDirection?: FlexDirection;
}

const useStyles = makeStyles(() => ({
  root: (props: { flexDirection: FlexDirection }) => ({
    display: "flex",
    flexDirection: props.flexDirection,
  }),
}));

const MediaCard: FC<MediaCardProps> = ({ flexDirection, ...props }) => {
  const isMobile = useMediaQuery(`(max-width:${mobileSize}px)`);
  const classes = useStyles({
    flexDirection: isMobile ? "column" : flexDirection || "column",
  });

  return <Card classes={{ root: classes.root }} {...props} />;
};

export default MediaCard;
