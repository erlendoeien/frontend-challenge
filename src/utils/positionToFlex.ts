import { FlexDirection, ItemOrder, UIPosition } from "../components/types";

/**
 * Maps natural position to flex properties and "natural
 * language" order
 * @param position UI-friendly position
 */
export function positionToFlex(position: UIPosition) {
  let cardFlexDirection: FlexDirection = "column";
  let positionOrder: ItemOrder = "first";
  switch (position) {
    case "left":
      positionOrder = "first";
      cardFlexDirection = "row";
      break;
    case "right":
      positionOrder = "last";
      cardFlexDirection = "row";
      break;
    case "bottom":
      positionOrder = "last";
      cardFlexDirection = "column";
      break;
    default:
      positionOrder = "first";
      cardFlexDirection = "column";
  }
  return { cardFlexDirection, positionOrder };
}
