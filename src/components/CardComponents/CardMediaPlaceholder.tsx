import { CardMedia, CardMediaProps, makeStyles } from "@material-ui/core";
import React from "react";
import { MediaMaxWidth } from "../types";

interface CardMediaPlaceholderProps {
  isLoading?: boolean;
  maxWidth?: MediaMaxWidth;
  position?: "first" | "last";
}
//TODO: Convert to theme like, as in the tutorial on MUI
const convertWidth = (width: MediaMaxWidth) => {
  switch (width) {
    case "sm":
      return "25%";
    case "md":
      return "50%";
    case "lg":
      return "75%";
  }
};

const useStyles = makeStyles(() => ({
  root: (props: { mediaPlacement: string; maxWidth: MediaMaxWidth }) => ({
    order: parseInt(props.mediaPlacement) || 0,
    maxWidth: convertWidth(props.maxWidth),
    minWidth: 100,
  }),
}));

function CardMediaPlaceholder<C extends React.ElementType>(
  props: CardMediaPlaceholderProps & CardMediaProps<C, { component?: C }>
) {
  const {
    isLoading = true,
    image,
    maxWidth = "md",
    position,
    ...restProps
  } = props;
  const mediaPlacement = position === "last" ? "1" : "0";
  const classes = useStyles({ mediaPlacement, maxWidth });

  return (
    <CardMedia
      classes={{ root: classes.root }}
      image={
        isLoading
          ? (require("../../assets/images/placeholder.svg") as string)
          : image
      }
      {...restProps}
    />
  );
}

export default CardMediaPlaceholder;
