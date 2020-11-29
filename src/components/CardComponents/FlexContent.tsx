import { CardContent, CardContentProps, makeStyles } from "@material-ui/core";
// eslint-disable-next-line
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
  classes,
  ...props
}: FlexContentProps & CardContentProps<C, { component?: C }>) {
  const defaultClasses = useStyles({
    flexDirection: flexDirection || "column",
  });
  return (
    <CardContent
      classes={{ root: defaultClasses.root, ...classes }}
      {...props}
    />
  );
}
