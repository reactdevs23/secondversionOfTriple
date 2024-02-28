import clsx from "clsx";
import { Link } from "react-router-dom";

import classes from "./Button.module.css";

const Button = ({
  btnGreen,
  btnPrimary,
  btnTransparent,
  size,
  to,
  onClick,
  className,
  children,
  mlAuto,
  wFull,

  ...rest
}) => {
  const classname = clsx(
    className,
    classes.btn,
    size && classes[size],
    btnPrimary && classes.btnPrimary,
    btnTransparent && classes.btnTransparent,
    btnGreen && classes.btnGreen,
    wFull && classes.wFull,
    mlAuto && classes.mlAuto,
    ""
  );

  if (to)
    return (
      <Link className={classname} to={to} {...rest}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button className={classname} onClick={onClick} {...rest}>
        {children}
      </button>
    );

  return (
    <button className={classname} {...rest}>
      {children}
    </button>
  );
};

export default Button;
