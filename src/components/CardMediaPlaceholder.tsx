import { CardMedia, CardMediaProps } from "@material-ui/core";
import React from "react";

type MediaMaxWidth = "sm" | "md" | "lg";
interface CardMediaPlaceholderProps {
  isLoading?: boolean;
  maxWidth?: MediaMaxWidth;
}

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
    style,
    ...restProps
  } = props;
  return (
    <CardMedia
      src={
        isLoading
          ? (require("../assets/images/placeholder.svg") as string)
          : image
      }
      style={{ maxWidth: setMediaWidth(maxWidth), minWidth: 150, ...style }}
      {...restProps}
    />
  );
}

export default CardMediaPlaceholder;
