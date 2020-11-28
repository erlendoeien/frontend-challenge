import {
  Card,
  CardProps,
  makeStyles,
  Theme,
  useMediaQuery,
} from "@material-ui/core";
import React, { FC } from "react";
import { mobileSize } from "../../constants";
import { FlexDirection } from "../types";

interface FlexCardProps extends CardProps {
  flexDirection?: FlexDirection;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: (props: { flexDirection: FlexDirection }) => ({
    display: "flex",
    flexDirection: props.flexDirection,
    margin: theme.spacing(4),
  }),
}));

const FlexCard: FC<FlexCardProps> = ({
  flexDirection = "column",
  classes,
  ...props
}) => {
  const isMobile = useMediaQuery(`(max-width:${mobileSize}px)`);
  const defaultClasses = useStyles({
    flexDirection: isMobile ? "column" : flexDirection,
  });

  return (
    <Card classes={{ root: defaultClasses.root, ...classes }} {...props} />
  );
};

export default FlexCard;
