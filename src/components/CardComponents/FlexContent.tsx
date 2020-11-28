import { CardContent, CardContentProps, makeStyles } from "@material-ui/core";
import React from "react";
import { FlexDirection } from "../types";

interface FlexContentProps {
  flexDirection?: FlexDirection;
}

const useStyles = makeStyles(() => ({
  root: (props: { flexDirection: FlexDirection }) => ({
    display: "flex",
    flexDirection: props.flexDirection,
  }),
}));

export default function FlexContent<C extends React.ElementType>({
  flexDirection,
  ...props
}: FlexContentProps & CardContentProps<C, { component?: C }>) {
  const classes = useStyles({
    flexDirection: flexDirection || "column",
  });
  return <CardContent classes={{ root: classes.root }} {...props} />;
}
