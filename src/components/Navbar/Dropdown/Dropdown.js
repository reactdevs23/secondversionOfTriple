import clsx from "clsx";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

import classes from "./Dropdown.module.css";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import { Link } from "react-router-dom";
import { shortLogo } from "../../../images";
import Text from "../../common/Text/Text";

const Dropdown = ({
  dropdownRef,
  isActive,
  setActive,
  label,
  onSelect,
  children,
  services,
  styled,
}) => {
  useOnClickOutside(dropdownRef, () => setActive(false));
  return (
    <div
      className={clsx(
        classes.dropdown,

        styled && classes.styledDropdown
      )}
      onClick={() => {
        if (isActive) {
          setActive(false);
        } else {
          setActive(true);
        }
      }}
    >
      <>
        <p
          className={classes.selectedValue}
          style={{ opacity: isActive && "1" }}
        >
          {label}
        </p>{" "}
        {children}
        {isActive ? (
          <FaAngleUp
            className={classes.icon}
            style={{ opacity: isActive && "1" }}
          />
        ) : (
          <FaAngleDown className={classes.icon} />
        )}
      </>

      <div className={clsx(classes.dropdownMain, isActive && classes.active)}>
        <div className={clsx(classes.serviceContainer, "overflow")}>
          <div className={classes.left}>
            <img src={shortLogo} alt="#" className={classes.logo} />

            <Text md semiBold base0>
              Services
            </Text>
            <Text sm base0>
              Tailored to fit your business needs while supporting your growth
              and budget.
            </Text>
          </div>
          <div className={classes.services}>
            {services.map((el, i) => (
              <div className={classes.service} key={i}>
                <Text sm base0>
                  {el.title}
                </Text>
                <Text sm base0 opacity={0.7}>
                  {el.info}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
