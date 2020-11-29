import { CardMedia, CardMediaProps, makeStyles } from "@material-ui/core";
// eslint-disable-next-line
import React from "react";
import { ItemOrder, MediaMaxWidth } from "../types";

interface FlexCardMediaProps {
  maxWidth?: MediaMaxWidth;
  position?: ItemOrder;
  isLoading?: boolean;
}
//TODO: Convert to theme like, as in the tutorial on MUI
const convertWidth = (width: MediaMaxWidth) => {
  switch (width) {
    case "xs":
      return "10%";
    case "sm":
      return "25%";
    case "md":
      return "40%";
    case "lg":
      return "50%";
    case "xl":
      return "75%";
  }
};

const useStyles = makeStyles(() => ({
  root: (props: {
    mediaPlacement: string;
    maxWidth: ReturnType<typeof convertWidth>;
  }) => ({
    order: parseInt(props.mediaPlacement) || 0,
    maxWidth: props.maxWidth,
    minWidth: 100,
  }),
}));

/**
 * Extends card media to be ordered in flex-container
 * Makes media's placement dependent on siblings non-default order values
 */
function FlexCardMedia<C extends React.ElementType>(
  props: FlexCardMediaProps & CardMediaProps<C, { component?: C }>
) {
  const {
    image,
    maxWidth = "md",
    position,
    classes,
    isLoading,
    ...restProps
  } = props;
  const mediaPlacement = position === "last" ? "1" : "0";
  const defaultClasses = useStyles({
    mediaPlacement,
    maxWidth: convertWidth(maxWidth),
  });

  return (
    <CardMedia
      classes={{ root: defaultClasses.root, ...classes }}
      image={
        isLoading
          ? (require("../../assets/images/placeholder.svg") as string)
          : image
      }
      {...restProps}
    />
  );
}

export default FlexCardMedia;
