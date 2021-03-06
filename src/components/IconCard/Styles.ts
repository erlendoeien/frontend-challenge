import { makeStyles, Theme } from "@material-ui/core";
import { FlexDirection } from "../types";

export interface IconCardStyleProps {
  cardFlexDirection: FlexDirection;
  isMobile: boolean;
}

/**
 * Styling for IconCard, and the LoadingIconCard
 */
const useCardIconStyles = makeStyles((theme: Theme) => ({
  cardHover: {
    transition: "padding 0.2s ease-in-out",
    "&:hover": {
      borderColor: theme.palette.grey[700],
      borderStyle: "solid",
      borderWidth: 1,
      paddingBlock: theme.spacing(2),
    },
  },
  cardContentWrapper: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    paddingBlock: theme.spacing(1),
  },
  content: {
    justifyContent: "center",
    flex: 1,
    flexWrap: "wrap",
    paddingBlock: 0,
  },
  cardMedia: ({ cardFlexDirection, isMobile }: IconCardStyleProps) => {
    // Center media on flex direction
    if (cardFlexDirection === "column" || isMobile)
      return {
        marginInline: "auto",
      };
    else return { marginBlock: "auto" };
  },
  actions: { marginTop: "auto", justifyContent: "center", minWidth: 100 },
}));

export default useCardIconStyles;
