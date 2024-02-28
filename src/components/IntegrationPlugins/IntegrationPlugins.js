import React from "react";

import clsx from "clsx";
import SectionHeading from "../common/SectionHeading/SectionHeading";
import Text from "../common/Text/Text";

import { openCart, shopify, wooCommerce } from "../../images";
import classes from "./IntegrationPlugins.module.css";

const IntegrationPlugins = () => {
  const data = [
    {
      icon: wooCommerce,
      title: "WooCommerce",
      info: "Integrate effortlessly with WooCommerce. Our plugin connects your online store to allowing you to accept crypto payments with ease. ",
    },
    {
      icon: openCart,
      title: "OpenCart",
      info: "Unlock the power of crypto for your OpenCart store. Our solution ensures that accepting cryptocurrency is as simple as any traditional payment method.",
    },
    {
      icon: shopify,
      title: "Shopify",
      info: "Bring the future of payment to your Shopify store. Our plugin makes it straightforward to set up and manage crypto payments, giving your customers more ways to pay.",
    },
  ];

  return (
    <section className={classes.wrapper}>
      <div className={clsx("container", classes.container)}>
        <SectionHeading base950 textCenter className={classes.heading}>
          Integration Plugins
        </SectionHeading>

        <div className={classes.cards}>
          {data.map((el, i) => (
            <div className={classes.card} key={i}>
              <img src={el.icon} alt="#" className={classes.icon} />
              <Text xl3 semiBold base800>
                {el.title}
              </Text>{" "}
              <Text lg base500 className={classes.info}>
                {el.info}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationPlugins;
