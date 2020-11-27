import { Card, CardProps, makeStyles, useMediaQuery } from "@material-ui/core";
import React, { FC } from "react";
import { mobileSize } from "../../constants";
import { FlexDirection } from "../types";

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
