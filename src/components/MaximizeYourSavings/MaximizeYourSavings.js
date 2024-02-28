import React from "react";
import classes from "./MaximizeYourSavings.module.css";
import clsx from "clsx";
import SectionHeading from "../common/SectionHeading/SectionHeading";
import Text from "../common/Text/Text";
import { GoArrowUpRight } from "react-icons/go";
import { placeHolder } from "../../images";

const MaximizeYourSavings = () => {
  const data = [
    {
      title: "Static Wallet Addresses",
      info: "Take control of your payments with our static wallet addresses. Each address is uniquely linked to a customer, eliminating confusion and ensuring that funds always reach their intended destination.",
      img: placeHolder,
    },
    {
      title: "Fixed Monthly Usage Costs",
      info: "Say goodbye to unpredictable transaction fees. Our fixed monthly usage costs mean you pay one flat rate to access all our premium features — simplicity and savings combined.",
      img: placeHolder,
    },
    {
      title: "Self-Listing Capabilities for Cryptocurrencies",
      info: "Embrace the full potential of crypto payments. With TriplePay, you can self-list any ERC20 token, opening up a world of possibilities for receiving payments in the currency that best suits your business.",
      img: placeHolder,
    },
    {
      title: "Instant Payout Section",
      info: "Transform your crypto into cash instantly. With TriplePay, you're always just a few clicks away from converting your cryptocurrency into your local currency and transferring it directly into your account. Fast, fluid, and secure — liquidity on your terms.",
      img: placeHolder,
    },
  ];
  return (
    <section className={classes.wrapper}>
      <div className={clsx("container", classes.container)}>
        <div className={classes.header}>
          <SectionHeading base950 className={classes.heading}>
            MAXIMIZE YOUR SAVINGS
          </SectionHeading>

          <div className={classes.learnMoreContainer}>
            <Text lg base800>
              Welcome to predictable billing without compromising on quality.
              Tailored to fit your business needs while supporting your growth
              and budget.
            </Text>
            <a
              href="#/"
              target="_blank"
              rel="noreferrer"
              className={classes.learnMore}
            >
              Learn More <GoArrowUpRight className={classes.arrow} />
            </a>
          </div>
        </div>

        <div className={classes.content}>
          {data.map(({ title, info, img }, i) => (
            <div className={clsx(classes.row)} key={i}>
              <React.Fragment key={i}>
                <div
                  className={clsx(
                    classes.infoContainer,
                    (i + 1) % 2 === 0 && classes.order1
                  )}
                >
                  <Text semiBold base800 xl5 className={classes.title}>
                    {title}
                  </Text>
                  <Text xl base600>
                    {info}
                  </Text>
                </div>
                <div className={classes.imgContainer}>
                  <img src={img} alt="#" className={classes.img} />
                </div>
              </React.Fragment>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaximizeYourSavings;
