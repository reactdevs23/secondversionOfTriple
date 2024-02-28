import React from "react";
import classes from "./SectionHeading.module.css";
import clsx from "clsx";

const SectionHeading = ({
  children,
  className,
  xl5,
  textCenter,
  mobileCenter,
  base0,
  base800,
  base950,
}) => {
  return (
    <h2
      className={clsx(
        classes.heading,
        className,

        textCenter && classes.textCenter,
        mobileCenter && classes.mobileCenter,
        base0 && classes.base0,
        base800 && classes.base800,
        base950 && classes.base950,

        xl5 && classes.xl5
      )}
    >
      {children}
    </h2>
  );
};

export default SectionHeading;
