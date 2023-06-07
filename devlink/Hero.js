import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Hero.module.css";

export function Hero({
  as: _Component = _Builtin.Section,
  heading = "Default heading from DevLink",
  paragraph = "This default value of the paragraph prop comes straight from DevLink.",
  buttonText = "Click me",

  buttonLink = {
    href: "#",
    target: "_blank",
    preload: "none",
  },

  buttonAction = {},
  button2,
}) {
  return (
    <_Component className={_utils.cx(_styles, "section")} tag="section">
      <_Builtin.Container className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Heading tag="h1">{heading}</_Builtin.Heading>
        <_Builtin.Paragraph>{paragraph}</_Builtin.Paragraph>
        <_Builtin.Block className={_utils.cx(_styles, "div-block")} tag="div">
          <_Builtin.Link
            className={_utils.cx(_styles, "button")}
            button={true}
            options={buttonLink}
            {...buttonAction}
          >
            {buttonText}
          </_Builtin.Link>
          <_Builtin.Block tag="div">{button2}</_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Container>
    </_Component>
  );
}
