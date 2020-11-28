import {
  CardMedia,
  CardMediaProps,
  makeStyles,
  Theme,
} from "@material-ui/core";
import React from "react";
import { ItemOrder, MediaMaxWidth } from "../types";

interface CardMediaPlaceholderProps {
  isLoading?: boolean;
  maxWidth?: MediaMaxWidth;
  position?: ItemOrder;
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

const useStyles = makeStyles((theme: Theme) => ({
  root: (props: {
    mediaPlacement: string;
    maxWidth: ReturnType<typeof convertWidth>;
  }) => ({
    order: parseInt(props.mediaPlacement) || 0,
    maxWidth: props.maxWidth,
    minWidth: 100,
    paddingBlock: theme.spacing(2),
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
    classes,
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

export default CardMediaPlaceholder;
