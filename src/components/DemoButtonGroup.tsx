import { Button, ButtonGroup, ButtonGroupProps } from "@material-ui/core";
// eslint-disable-next-line
import React, { FC } from "react";

interface DemoButtonGroupProps extends ButtonGroupProps {
  values: string[] | number[];
  names: string[];
  onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  currentState: string | number | boolean;
}

/**
 * Basic Button group, assuming same-index pair for values-names
 */
const DemoButtonGroup: FC<DemoButtonGroupProps> = ({
  values,
  names,
  onClickHandler,
  currentState,
  ...props
}) => {
  if (
    values.length === 0 ||
    names.length === 0 ||
    values.length !== names.length
  )
    return null;
  return (
    <ButtonGroup {...props}>
      {names.map((name, index) => (
        <Button
          key={`button_${name}_${index}`}
          value={values[index]}
          onClick={onClickHandler}
          disabled={currentState === values[index]}
        >
          {name}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default DemoButtonGroup;
