import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ButtonSecondary.module.css";

export function ButtonSecondary({
  as: _Component = _Builtin.Link,
  buttonText = "Click me 2",

  buttonLink = {
    href: "#",
    target: "_blank",
  },
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "button", "secondary")}
      button={true}
      options={buttonLink}
    >
      {buttonText}
    </_Component>
  );
}
