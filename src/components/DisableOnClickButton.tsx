import { Button, ButtonProps } from "@material-ui/core";
// eslint-disable-next-line
import React, { useState } from "react";

function DisableOnClickButton<C extends React.ElementType>({
  ...props
}: ButtonProps<C, { component?: C }>) {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    if (!isDisabled) setIsDisabled(!isDisabled);
  };

  return <Button onClick={handleClick} disabled={isDisabled} {...props} />;
}

export default DisableOnClickButton;
