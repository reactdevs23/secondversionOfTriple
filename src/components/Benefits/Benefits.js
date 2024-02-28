import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import classes from "./Benefits.module.css";
import SectionHeading from "../common/SectionHeading/SectionHeading";
import Text from "../common/Text/Text";
import clsx from "clsx";
import { benefitMobile, exploreMore } from "../../images";
const Benefits = () => {
  const data = [
    {
      title: "No Chargebacks",
      info: "Enjoy the peace of mind that comes with blockchain transactions. With TriplePay, chargebacks are a thing of the past, ensuring that every sale is final and fraud is significantly reduced.",
      img: benefitMobile,
    },
    {
      title: "Cost-Effective Transactions",
      info: "With our fixed monthly fee, you can forget about the high costs usually associated with payment processing. Keep more of your earnings with our transparent pricing model.",
    },
    {
      title: "Global Accessibility",
      info: "Expand your reach. TriplePay enables you to accept payments from anywhere in the world, opening your business to a global customer base without the usual hassle of currency conversion.",
    },
  ];
  return (
    <section className={classes.wrapper}>
      <div className={clsx(classes.container, "container")}>
        <div className={classes.header}>
          <SectionHeading base0 className={classes.heading}>
            Benefits
          </SectionHeading>
          <Text lg base0 className={classes.infoContainer}>
            Welcome to predictable billing without compromising on quality.
            Tailored to fit your business needs while supporting your growth and
            budget.
          </Text>
        </div>
        <div className={classes.cards}>
          {data.map((el, i) => (
            <div className={classes.card} key={i}>
              {" "}
              <div className={classes.infoContainer}>
                <Text xl3 semiBold base800>
                  {el.title}
                </Text>{" "}
                <Text xl base500 className={classes.info}>
                  {el.info}
                </Text>
              </div>
              {el.img && (
                <div className={classes.imgContainer}>
                  <img src={el.img} alt="#" className={classes.img} />
                </div>
              )}
            </div>
          ))}
          <div className={clsx(classes.card, classes.exploreMore)}>
            {" "}
            <Text xl3 semiBold base0>
              Explore <br /> More
            </Text>{" "}
            <img src={exploreMore} alt="#" className={classes.exploreMoreBg} />
            <a
              href="#/"
              target="_blank"
              rel="noreferrer"
              className={classes.learnMore}
            >
              Learn More <GoArrowUpRight className={classes.arrow} />
            </a>
          </div>
        </div>{" "}
      </div>{" "}
    </section>
  );
};

export default Benefits;
