import { Box, CardMedia, CardMediaProps, makeStyles } from "@material-ui/core";
import React from "react";
import { MediaMaxWidth } from "./types";

interface CardMediaPlaceholderProps {
  isLoading?: boolean;
  maxWidth?: MediaMaxWidth;
  position?: "first" | "last";
}

const useStyles = makeStyles(() => ({
  // style rule
  root: (props: { mediaPlacement: string }) => ({
    order: parseInt(props.mediaPlacement) || 0,
  }),
}));

//TODO: Convert to theme like, as in the tutorial on MUI
const setMediaWidth = (width: MediaMaxWidth) => {
  switch (width) {
    case "sm":
      return "25%";
    case "md":
      return "50%";
    case "lg":
      return "75%";
  }
};

function CardMediaPlaceholder<C extends React.ElementType>(
  props: CardMediaPlaceholderProps & CardMediaProps<C, { component: C }>
) {
  const {
    isLoading = true,
    image,
    maxWidth = "md",
    position,
    style,
    ...restProps
  } = props;
  const mediaPlacement = position === "last" ? "1" : "0";
  const classes = useStyles({ mediaPlacement });

  return (
    <CardMedia
      classes={{ root: classes.root }}
      src={
        isLoading
          ? (require("../assets/images/placeholder.svg") as string)
          : image
      }
      style={{
        maxWidth: setMediaWidth(maxWidth),
        minWidth: 150,
        ...style,
      }}
      {...restProps}
    />
  );
}

export default CardMediaPlaceholder;
