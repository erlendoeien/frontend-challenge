import {
  Card,
  CardProps,
  makeStyles,
  Theme,
  useMediaQuery,
} from "@material-ui/core";
// eslint-disable-next-line
import React, { FC } from "react";
import { mobileSize } from "../../constants";
import { FlexDirection } from "../types";

export interface FlexCardProps extends CardProps {
  flexDirection?: FlexDirection;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: ({
    flexDirection,
    isMobile,
  }: {
    flexDirection: FlexDirection;
    isMobile: boolean;
  }) => ({
    display: "flex",
    flexDirection: isMobile ? "column" : flexDirection,
    margin: isMobile ? theme.spacing(1) : theme.spacing(4),
  }),
}));

/**
 * Flexbox wrapper with default to column-direction on mobile
 */
const FlexCard: FC<FlexCardProps> = ({
  flexDirection = "column",
  classes,
  ...props
}) => {
  const isMobile = useMediaQuery(`(max-width:${mobileSize}px)`);
  const defaultClasses = useStyles({
    flexDirection,
    isMobile,
  });

  return (
    <Card classes={{ root: defaultClasses.root, ...classes }} {...props} />
  );
};

export default FlexCard;
