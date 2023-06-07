import * as React from "react";
import * as Types from "./types";

declare function Hero(props: {
  as?: React.ElementType;
  heading?: React.ReactNode;
  paragraph?: React.ReactNode;
  buttonText?: React.ReactNode;
  buttonLink?: Types.Basic.Link;
  buttonAction?: Types.Devlink.RuntimeProps;
  button2?: Types.Devlink.Slot;
}): React.JSX.Element;
