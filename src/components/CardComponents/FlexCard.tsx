import { Card, CardProps, makeStyles, useMediaQuery } from "@material-ui/core";
import React, { FC } from "react";
import { mobileSize } from "../../constants";
import { FlexDirection } from "../types";

interface FlexCardProps extends CardProps {
  flexDirection?: FlexDirection;
}

const useStyles = makeStyles(() => ({
  root: (props: { flexDirection: FlexDirection }) => ({
    display: "flex",
    flexDirection: props.flexDirection,
  }),
}));

const FlexCard: FC<FlexCardProps> = ({
  flexDirection = "column",
  ...props
}) => {
  const isMobile = useMediaQuery(`(max-width:${mobileSize}px)`);
  const classes = useStyles({
    flexDirection: isMobile ? "column" : flexDirection,
  });

  return <Card classes={{ root: classes.root }} {...props} />;
};

export default FlexCard;
