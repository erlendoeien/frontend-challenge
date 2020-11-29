import {
  Button,
  CardActions,
  Divider,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
// eslint-disable-next-line
import React, { FC } from "react";
import FlexCard, { FlexCardProps } from "./CardComponents/FlexCard";
import FlexContent from "./CardComponents/FlexContent";

interface ErrorCardProps extends FlexCardProps {
  error?: Error;
}

const useStyle = makeStyles((theme: Theme) => ({
  root: {
    border: "solid",
    borderColor: theme.palette.error.light,
  },
  errorText: {
    color: theme.palette.error.dark,
  },
  divider: {
    backgroundColor: theme.palette.error.light,
  },
  errorContent: {
    marginTop: theme.spacing(2),
  },
}));

const ErrorCard: FC<ErrorCardProps> = ({ error, ...props }) => {
  const classes = useStyle();
  if (!error) return null;

  const onClickHandler = () => window.location.reload();

  return (
    <FlexCard className={classes.root} {...props}>
      <FlexContent>
        <Typography className={classes.errorText} align="center" variant="h4">
          Oops, something didn't go as planned
        </Typography>
        <Divider className={classes.divider} />
        <Typography className={classes.errorContent} variant="h5">
          Error message
        </Typography>
        <Typography className={classes.errorText} variant="overline">
          {error.message}
        </Typography>
      </FlexContent>
      <CardActions>
        <Button onClick={onClickHandler}>Retry</Button>
      </CardActions>
    </FlexCard>
  );
};

export default ErrorCard;
