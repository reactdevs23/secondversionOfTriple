import React from "react";
import classes from "./Text.module.css";
import clsx from "clsx";

const Text = ({
  primaryDefault,
  base0,
  base500,
  base600,
  base700,
  base800,
  base900,
  base950,
  color,
  xs,
  sm,
  md,
  lg,
  xl,
  xl2,
  xl3,
  xl4,
  xl5,
  bold,
  semiBold,
  wFull,
  textCenter,
  mobileCenter,
  textRight,
  textLeft,
  upperCase,
  className,
  opacity,
  mlAuto,
  children,
}) => {
  return (
    <p
      style={{ opacity: opacity, color: color }}
      className={clsx(
        classes.text,
        primaryDefault && classes.primaryDefault,
        base0 && classes.base0,
        base500 && classes.base500,
        base600 && classes.base600,
        base700 && classes.base700,
        base800 && classes.base800,
        base900 && classes.base900,
        base950 && classes.base950,

        xs && classes.xs,
        sm && classes.sm,
        md && classes.md,
        lg && classes.lg,
        xl && classes.xl,
        xl2 && classes.xl2,
        xl3 && classes.xl3,
        xl4 && classes.xl4,
        xl5 && classes.xl5,
        bold && classes.bold,
        mlAuto && classes.mlAuto,
        semiBold && classes.semiBold,
        upperCase && classes.upperCase,
        wFull && classes.wFull,
        textCenter && classes.textCenter,
        textRight && classes.textRight,
        textLeft && classes.textLeft,
        mobileCenter && classes.mobileCenter,
        className
      )}
    >
      {children}
    </p>
  );
};

export default Text;
